<?php

function register_cpt_result() {

	$labels = array(
		'name' => __( 'Converter', 'Converter' ),
		'singular_name' => __( 'Converter', 'Converter' ),
		'add_new' => __( 'Add New', 'Converter' ),
		'add_new_item' => __( 'Add New Converter', 'Converter' ),
		'edit_item' => __( 'Edit Converter', 'Converter' ),
		'new_item' => __( 'New Converter', 'Converter' ),
		'view_item' => __( 'View Converter', 'Converter' ),
		'search_items' => __( 'Search Converters', 'Converter' ),
		'not_found' => __( 'No Converters found', 'Converter' ),
		'not_found_in_trash' => __( 'No Converters found in Trash', 'Converter' ),
		'parent_item_colon' => __( 'Parent Converter:', 'Converter' ),
		'menu_name' => __( 'Converters', 'Converter' ),
	);

	$args = array(
		'labels' => $labels,
		'hierarchical' => false,
		'supports' =>  array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
		'public' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_nav_menus' => true,
		'publicly_queryable' => true,
		'exclude_from_search' => false,
		'has_archive' => true,
		'query_var' => true,
		'can_export' => true,
		'rewrite' => true,
		'capability_type' => 'post'
	);

	register_post_type( 'converter', $args );
}
add_action( 'init', 'register_cpt_result' );

//register taxonomy
function create_from_hierarchical_taxonomy() {
    $labels = array(
      'name' => _x( 'Coin From ', 'taxonomy general name' ),
      'singular_name' => _x( 'Coin From', 'taxonomy singular name' ),
      'search_items' =>  __( 'Search Coin From ' ),
      'all_items' => __( 'All Coin From ' ),
      'parent_item' => __( 'Parent Coin From' ),
      'parent_item_colon' => __( 'Parent Coin From:' ),
      'edit_item' => __( 'Edit Coin From' ), 
      'update_item' => __( 'Update Coin From' ),
      'add_new_item' => __( 'Add New Coin From' ),
      'new_item_name' => __( 'New Coin From Name' ),
      'menu_name' => __( 'Coin From ' ),
    );
    register_taxonomy('coinfroms',array('converter'), array(
      'hierarchical' => true,
      'labels' => $labels,
      'show_ui' => true,
      'show_admin_column' => true,
      'query_var' => true,
      'rewrite' => array( 'slug' => 'coinfrom' ),
    ));
  }
  add_action( 'init', 'create_from_hierarchical_taxonomy', 0 );

  
  //register taxonomy
function create_to_hierarchical_taxonomy() {
    $labels = array(
      'name' => _x( 'Coin To', 'taxonomy general name' ),
      'singular_name' => _x( 'Coin To', 'taxonomy singular name' ),
      'search_items' =>  __( 'Search Coin To' ),
      'all_items' => __( 'All Coin To' ),
      'parent_item' => __( 'Parent Coin To' ),
      'parent_item_colon' => __( 'Parent Coin To:' ),
      'edit_item' => __( 'Edit Coin To' ), 
      'update_item' => __( 'Update Coin To' ),
      'add_new_item' => __( 'Add New Coin To' ),
      'new_item_name' => __( 'New Coin To Name' ),
      'menu_name' => __( 'Coin To' ),
    );
    register_taxonomy('cointos',array('converter'), array(
      'hierarchical' => true,
      'labels' => $labels,
      'show_ui' => true,
      'show_admin_column' => true,
      'query_var' => true,
      'rewrite' => array( 'slug' => 'cointo' ),
    ));
  }
  add_action( 'init', 'create_to_hierarchical_taxonomy', 0 );

//Organisation slug change with the custom taxonomy (Group type)
add_filter('post_link', 'rudr_post_type_permalink', 20, 3);
add_filter('post_type_link', 'rudr_post_type_permalink', 20, 3);

function rudr_post_type_permalink($permalink, $post_id, $leavename) {

	$post_type_name = 'converter'; // post type name, you can find it in admin area or in register_post_type() function
	$post_type_slug = 'converter'; // the part of your product URLs, not always matches with the post type name
	$tax_name = 'coinfroms'; // the product categories taxonomy name
    $tax_name2 = 'cointos';
	$post = get_post( $post_id );

	if ( strpos( $permalink, $post_type_slug ) === FALSE || $post->post_type != $post_type_name ) // do not make changes if the post has different type or its URL doesn't contain the given post type slug
		return $permalink;

        $terms = wp_get_object_terms( $post->ID, $tax_name ); // get all terms (product categories) of this post (product)
        $terms2 = wp_get_object_terms( $post->ID, $tax_name2 ); 
        
        if ( !is_wp_error( $terms ) && !empty( $terms ) && is_object( $terms[0] )  && !empty( $terms2 ) && is_object( $terms2[0] ) )
         // rewrite only if this product has categories
         $slutest=$terms[0]->slug.'/'.$terms2[0]->slug;
         $slug = $post->post_name;
         $permalink = str_replace( $slug,  $slutest, $permalink );

	return $permalink;
}

//Organisation post type slug change to the group type(taxonomy)
add_filter('request', 'rudr_post_type_request', 1, 1 );
function rudr_post_type_request( $query ){
	global $wpdb, $wp;
    
	$post_type_name = 'converter'; // specify your own here
	$tax_name = 'coinfroms'; // and here
	
	$slug = $query['attachment']; 
    // when we change the post type link, WordPress thinks that these are attachment pages
  
    $request_uri  = $wp->request;

    $url_slugs = explode( '/', $request_uri );
  
    if (!empty($url_slugs) && sizeof($url_slugs) >= 3) { 

       
         $current_slug = end($url_slugs);
        $parent_slug_key = array_key_last($url_slugs) - 1;

       if($post_type_name == $url_slugs[0]){
           
            $coinfrom=$url_slugs[1];
            $cointo=$url_slugs[2];
           
            $coinfromtermid = $wpdb->get_results("
            SELECT * 
            FROM wp_terms
            WHERE slug = '$coinfrom' ");
          
            $cointormid = $wpdb->get_results("
            SELECT * 
            FROM wp_terms
            WHERE slug = '$cointo' ");
           
            $a1=array();
            $a2=array();
            foreach($coinfromtermid as $confid){

                $termid=$confid->term_id;
                $taxonomy='coinfroms';
                $cointorm_relationtext = $wpdb->get_results(" SELECT * FROM `wp_term_taxonomy` where taxonomy='$taxonomy' and term_id='$termid' ");
                foreach( $cointorm_relationtext as $termsid){
                    
                    if(!empty($termsid->term_taxonomy_id)){
                        $a1=array($termsid->term_taxonomy_id);
                    }
                }
               
                
            }    
            foreach($cointormid as $contoid){

                $termid=$contoid->term_id;
                $taxonomy='cointos';
                $cointos_relationtext = $wpdb->get_results(" SELECT * FROM `wp_term_taxonomy` where taxonomy='$taxonomy' and term_id='$termid' ");
                foreach( $cointos_relationtext as $termsid){
                    
                    if(!empty($termsid->term_taxonomy_id)){
                        $a2=array($termsid->term_taxonomy_id);
                    }
                }
                
            }    
            $finalarray=array_merge($a1,$a2);
           
            foreach($a1 as $postid){

              
                    $term_relationships = $wpdb->get_results("
                            SELECT *
                            FROM wp_term_relationships
                            WHERE term_taxonomy_id = '$postid'
                             LIMIT 1");
                      $textpost1= $term_relationships[0]->object_id;         


            }
            foreach($a2 as $postid){

              
                $term_relationships = $wpdb->get_results("
                        SELECT *
                        FROM wp_term_relationships
                        WHERE term_taxonomy_id = '$postid'
                         LIMIT 1");
                  $textpost2= $term_relationships[0]->object_id;         


        }

                if($textpost1 == $textpost2){
                    $getpostname = $wpdb->get_results("
                    SELECT *
                    FROM wp_posts
                    WHERE ID = '$textpost2'
                    and `post_type`='converter'
                     LIMIT 1");

                     $query['page_id'] = $textpost2;   
                     $query['converter'] = $getpostname[0]->post_name;             
                     $query['post_type'] = 'converter';
                     $query['name'] = $getpostname[0]->post_name;
                     unset( $query['attachment'] );  
                     $GLOBALS['current_query'] = $query;
                    
                     return $query;


                }
           

       }

    }


    
	// $post_id = $wpdb->get_var(
	// 	"
	// 	SELECT ID
	// 	FROM $wpdb->posts
	// 	WHERE post_name = '$slug'
	// 	AND post_type = '$post_type_name'
	// 	" 
	// );
	// $terms = wp_get_object_terms( $post_id, $tax_name ); // our post should have the terms
	// if( isset( $slug ) && $post_id && !is_wp_error( $terms ) && !empty( $terms ) ) : // change the query
	
	// 	unset( $query['attachment'] );

        
	// 	$query[$post_type_name] = $slug;
	// 	$query['post_type'] = $post_type_name;
	// 	$query['name'] = $slug;
		
	// endif;
  
    $GLOBALS['current_query'] = $query; 
    return $query;


}
 
  function okxbitcoinconvert(){
    $from = strtoupper($_POST['from']);
    $to = strtoupper($_POST['to']);
    $amount = ($_POST['amount']);

    $url='https://api.coinlayer.com/convert?access_key=d7a66e6f754617ac557f7fcb9958a2e4&to='.$to.'&from='.$from.'&amount='.$amount;
    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => $url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'GET',
    ));
   $response = curl_exec($curl);

curl_close($curl);


$bitcoinconvert = json_decode($response);
	$convert = json_decode(json_encode($bitcoinconvert), true);
 
	echo ($convert['result']);
die();

  }
    
  add_action('wp_ajax_nopriv_okxbitcoinconvert', 'okxbitcoinconvert');
add_action('wp_ajax_okxbitcoinconvert', 'okxbitcoinconvert');








function testcustinfo(){
  ob_start();
  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.coinlayer.com/api/list?access_key=d7a66e6f754617ac557f7fcb9958a2e4',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
  ));
  
  $response = curl_exec($curl);
  curl_close($curl);

  $lostofall = json_decode($response);
  $lostofallnew = json_decode(json_encode($lostofall), true);
$datat=array();
 foreach($lostofallnew['crypto'] as $cryptocurrency){

      $symbol=$key;
      $name=$cryptocurrency['name'];
      $descripton=$cryptocurrency.' ('.$symbol.')';
      $slug=strtolower($symbol);
      $parent_term = term_exists($slug, 'coinfroms' );




        $datat[]=array('NAME'=>$name,'symbole'=>$cryptocurrency['symbol'],'id'=>strtolower($name),'img'=>$cryptocurrency['icon_url']);

  }


}
//add_action('init','testcustinfo');




add_shortcode('solana_info','solana_price_info');
function solana_price_info(){
    ob_start();

        $curl = curl_init();

        curl_setopt_array($curl, array(
          CURLOPT_URL => 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h',
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => '',
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => 'GET',
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        $results = json_decode($response);
        //print_r($results);

        foreach($results as $result){
            $market_cap = $result->market_cap;
            $total_volume = $result->total_volume;
            $price_change_24h = $result->price_change_24h;
            $total_supply = $result->total_supply;
            $max_supply = $result->max_supply;
        ?>  
            <div class="solana-price-info">
                <div class="top-info">
                    <div class="block box1">
                        <label><?=$result->name?> Market Cap</label>
                        <div class="price">$<?=number_format((float)$market_cap, 0, '.', ',')?></div>

                    </div>
                    <div class="block box2">
                        <label><?=$result->name?> 24H Volume</label>
                        <div class="price">$<?=number_format((float)$total_volume, 0, '.', ',')?></div>
                    </div>
                </div>
                <div class="price-block">
                    <h3><?=$result->name?> Price</h3>
                    <div class="box-wrap">
                         <div class="block box1">
                            <label>24H Open</label>
                            <div class="price"></div>

                        </div>
                        <div class="block box2">
                            <label>24H Change</label>
                            <div class="price green">$<?=number_format((float)$price_change_24h, 2, '.', ',')?></div>
                        </div>
                    </div>
                </div>
                <div class="market-stats-block">
                    <h3>Solana Market Stats</h3>
                    <div class="box-wrap">
                        <div class="block box1">
                            <label>Total Supply</label>
                            <div class="price">$<?=number_format((float)$total_supply, 2, '.', ',')?></div>
                        </div>
                        <div class="block box2">
                            <label>Max Supply</label>
                            <div class="price"><?=$max_supply?></div> 
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }
    return ob_get_clean(); 
}













?>