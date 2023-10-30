<?php
    get_header();
?>
<div class="page-loader">
	<div class="spinner"></div>
</div>
<!-- Main-wrapper Start -->
<div class="main-wrapper">
  <?php  
        while ( have_posts() ) : the_post(); 
        $pid=get_the_ID();
        $post_coinfroms = get_the_terms( $pid, 'coinfroms' );
        $post_cointos = get_the_terms( $pid, 'cointos' );
        $coinfrom= $post_coinfroms[0]->slug;
        $cointo= $post_cointos[0]->slug;
        $coinfromname= $post_coinfroms[0]->name;
        $cointoname= $post_cointos[0]->name;

        /*Details of 1 month price*/
        $thirteedays=date('Y-m-d', strtotime('-30 days'));
        $n = date('Y-m-d', strtotime( $thirteedays . " -1 days"));
        $urlchnage='https://api.coinlayer.com/change?access_key=d7a66e6f754617ac557f7fcb9958a2e4&start_date='.$n.'&end_date='.$thirteedays.'&target='.$cointo.'&symbols='.$coinfrom;
        $curl = curl_init();
        curl_setopt_array($curl, array(
          CURLOPT_URL => $urlchnage,
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

        $chnagedata = json_decode($response);
        $chnagedataall = json_decode(json_encode($chnagedata), true);
         /*Details of 1 month price*/


         /*final details*/
         $url='https://api.coinlayer.com/live?access_key=d7a66e6f754617ac557f7fcb9958a2e4&expand=1&target='.$cointo.'&symbols='.$coinfrom;
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

         $lostofall = json_decode($response);
         $conversionResult = json_decode(json_encode($lostofall), true);

         $finalratedata=$conversionResult['rates'][strtoupper($coinfrom)];

         /*List of all crygency and cion*/
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
         /*end */

         /*otherdetails*/
         foreach($lostofallnew['crypto'] as $valusymbol){ 
            
          if($valusymbol['symbol'] == strtoupper($coinfrom)){
            $nameofid= strtolower($valusymbol['name']);
            $string = str_replace(' ', '', $nameofid);
            $vs_currency=strtolower($cointo);
            curl_setopt_array($curl, array(
              CURLOPT_URL => 'https://api.coingecko.com/api/v3/coins/markets?vs_currency='.$vs_currency.'&symbol='.$string,
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
              $assertprice = json_decode(json_encode($bitcoinconvert), true);
           }
         }

      /*end*/
      /*yesterdayprice*/
      $yesertday=date('Y-m-d', strtotime('-1 days'));
      $endpoint = $yesertday;
      $access_key = 'd7a66e6f754617ac557f7fcb9958a2e4';
      $ch = curl_init('https://api.coinlayer.com/api/'.$endpoint.'?access_key='.$access_key.'&target='.$cointo.'&symbols='.$coinfrom.'');   
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      $json = curl_exec($ch);
      curl_close($ch);
      $yeseteprice = json_decode($json, true);
      
  ?>


      <!-- Banner start -->
      <section class="banner section-gap">
            <div class="container">
                <img src="<?=get_stylesheet_directory_uri()?>/assets/images/banner-img.svg" class="banner-img" alt="">
               <div class="banner-inner">
                    <div class="row">
                        <div class="heading">
                            <h1>Convert <?php echo $coinfromname; ?> to <?php echo $cointoname; ?></h1>
                        </div>
                        <div class="bitcoin-box  align-items-center">
                             <div class="box1 d-flex ">
                                <input type="number" class="user-input" name="converterfrom_amount" id="converterfrom_amount">
                                <input type="hidden" class="hidencoinfrom" id="coinhiddenfrom" value="<?php echo strtoupper($coinfrom); ?>">
                                <div class="dropdown sik-dropdown" id="sik-select">
                                    
                                    <div id="coinfromdiv">
                                        <button class="btn btn-sm btn-secondary coinbtndrop dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img  src="https://assets.coinlayer.com/icons/<?php echo strtoupper($coinfrom); ?>.png">
                                        <?php echo strtoupper($coinfrom); ?>
                                        </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdown_user">
                                                <form class="px-4 py-2">
                                                <input type="search" class="form-control search" placeholder="Suche.." autofocus="autofocus">
                                                </form>
                                                <div class="menuItems">
                                                    <ul id="menuItems">
                                                        <?php
                                                        foreach($lostofallnew['crypto'] as $valusymbol){ ?>
                                                        <li>
                                                            <span class="dropdown-item" data-value="<?php echo $valusymbol['symbol']; ?>">
                                                                <img class="crypto-icon" src="<?php echo $valusymbol['icon_url']; ?>"  alt="<?php echo $valusymbol['symbol']; ?>" />
                                                                    <?php echo $valusymbol['symbol']; ?>
                                                            </span>
                                                        </li>
                                                        <?php }  ?>
                                                    </ul>
                                                </div>
                                                <div style="display:none;" class="dropdown-header dropdown_empty">No entry found</div>
                                            </div>
                                    </div>
                                    
                                </div>
                                <!--- -->
                                <div id="coinfromcrunnecy">
                                  <div class="dropdown sik-dropdown" id="coinnew-select">          
                                                <button class="btn btn-sm btn-secondary coinnewdropdown-toggle dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <?php echo strtoupper($cointo);?>
                                                </button>
                                                <div class="coinnewtodropdown-menu dropdown-menu" aria-labelledby="dropdown_user">
                                                    <form class="px-4 py-2">
                                                    <input type="search" class="form-control search" placeholder="Search.." autofocus="autofocus">
                                                    </form>
                                                    <div class="menuItems">
                                                        <ul id="menuItemscoinnewto">
                                                        <?php
                                                            foreach($lostofallnew['fiat'] as $symb=>$valusymbol){ ?>
                                                            <li>
                                                                <span class="dropdown-item" data-value="<?php echo $symb; ?>">
                                                                <?php echo $symb; ?>
                                                                </span>
                                                            </li>
                                                            <?php }  ?>
                                                                
                                                        </ul>
                                                    </div>
                                                    <div style="display:none;" class="coinnewdropdown-header coinnewdropdown_empty">No entry found</div>
                                                </div>                
                                    </div>
                                </div>
                                <!--- -->
                             </div>
                             <!---  -->
                             <div class="swiper-arrow">
                                <a href="#" id="swapconvertation">
                                    <img src="<?=get_stylesheet_directory_uri()?>/assets/images/swipe-arrow.svg" alt="">
                                </a>
                            </div>
                            <!--- -->

                            
                            <div class="box1 box2 d-flex ">
                                <input type="number" class="user-input" name="converterto_amount" id="converterto_amount">
                                <input type="hidden" class="coinhiddento" id="coinhiddento" value="<?php echo strtoupper($cointo); ?>">
                                <div class="dropdown sik-dropdown" id="coin-select">
                                <div class="coin-select">
                                                
                                                <button class="btn btn-sm btn-secondary cointodropdown-toggle dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <?php echo strtoupper($cointo);?>
                                                </button>
                                                <div class="cointodropdown-menu dropdown-menu" aria-labelledby="dropdown_user">
                                                    <form class="px-4 py-2">
                                                    <input type="search" class="form-control search" placeholder="Search.." autofocus="autofocus">
                                                    </form>
                                                    <div class="menuItems">
                                                        <ul id="menuItemscointo">
                                                        <?php
                                                            foreach($lostofallnew['fiat'] as $symb=>$valusymbol){ ?>
                                                            <li>
                                                                <span class="dropdown-item" data-value="<?php echo $symb; ?>">
                                                                <?php echo $symb; ?>
                                                                </span>
                                                            </li>
                                                            <?php }  ?>
                                                                
                                                            </ul>
                                                    </div>
                                                    <div style="display:none;" class="cointodropdown-header cointodropdown_empty">No entry found</div>
                                                </div>
                                    </div>
                                </div>
                               <!---  --->
                               <div class="dropdown sik-dropdown" id="swapcoincoint">
                                    
                                    <div id="swapcoincointdiv">
                                        <button class="btn btn-sm btn-secondary swapcoincointdrop dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img  src="https://assets.coinlayer.com/icons/<?php echo strtoupper($coinfrom); ?>.png">
                                        <?php echo strtoupper($coinfrom); ?>
                                        </button>
                                            <div class="dropdown-menu swapcoincointmenu" aria-labelledby="dropdown_user">
                                                <form class="px-4 py-2">
                                                <input type="search" class="form-control search" placeholder="Suche.." autofocus="autofocus">
                                                </form>
                                                <div class="menuItems">
                                                    <ul id="swapcoincointmenuItems">
                                                        <?php
                                                        foreach($lostofallnew['crypto'] as $valusymbol){ ?>
                                                        <li>
                                                            <span class="dropdown-item" data-value="<?php echo $valusymbol['symbol']; ?>">
                                                                <img class="crypto-icon" src="<?php echo $valusymbol['icon_url']; ?>"  alt="<?php echo $valusymbol['symbol']; ?>" />
                                                                    <?php echo $valusymbol['symbol']; ?>
                                                            </span>
                                                        </li>
                                                        <?php }  ?>
                                                    </ul>
                                                </div>
                                                <div style="display:none;" class="dropdown-header swapcoincointdropdown_empty">No entry found</div>
                                            </div>
                                    </div>
                                    
                                </div>
                               <!--- --->                                 

                            </div>
                           
                        </div> 
                        <div id="imgloading"><span id="refershicon"><img src="<?php echo  get_stylesheet_directory_uri(); ?>/icons8-refresh.gif"></span> <span class="refeshbtn">Refresh</span></div>  
                        <div class="heading">
                            <h3>Convert <?php echo  strtoupper($coinfrom);?> to <?php echo  strtoupper($cointo);?></h3>
                            <p><?php echo  strtoupper($coinfrom);?> to <?php echo  strtoupper($cointo);?> rate today is $<?php echo $finalratedata['rate'] ?> and has decreased <?php echo $finalratedata['change_pct'] ?>% 
                                    from $<?php echo $yeseteprice['rates'][strtoupper($coinfrom)]; ?> since
                                      yesterday. <?php echo $coinfromname; ?> is on a downward monthly trajectory as it has changed <?php echo $chnagedataall['rates'][strtoupper($coinfrom)]['change_pct'] ;?>% from
                                      $<?php echo $chnagedataall['rates'][strtoupper($coinfrom)]['end_rate'] ;?> since 1 month (30 days) ago.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
 
      <!-- Banner End -->
       <!-- Buy-crypto Start -->
       <section class="buy-crypto section-gap pt-0">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="buy-crypto-left">
                            <div class="heading">
                                <h2>Buy <?php echo  strtoupper($coinfrom);?> with  <?php echo  strtoupper($cointo);?> in a few steps</h2>
                                <p>Habitant dolor rhoncus duis augue adipiscing quis ultricies aliquam. Feugiat
                                    vulputate etiam quam malesuada eget.</p>
                                <ul class="crypto-icon">
                                    <li><a href="#"><img src="<?=get_stylesheet_directory_uri()?>/assets/images/visa-1.svg" alt=""></a>
                                    </li>
                                    <li><a href="#"><img src="<?=get_stylesheet_directory_uri()?>/assets/images/visa-2.svg" alt=""></a>
                                    </li>
                                    <li><a href="#"><img src="<?=get_stylesheet_directory_uri()?>/assets/images/visa-3.svg" alt=""></a>
                                    </li>
                                    <li><a href="#"><img src="<?=get_stylesheet_directory_uri()?>/assets/images/visa-4.svg" alt=""></a>
                                    </li>
                                    <li><a href="#">107+</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="buy-crypto-right">
                            <div class="button-box">
                                <a href="<?php echo get_field('buy_coin_link',$pid);?>" target="_blank" class="my-button btn-1">Buy <?php echo  strtoupper($coinfrom);?></a>
                                <a href="<?php echo get_field('buy_flat_curruency_link',$pid);?>" target="_blank"  class="my-button btn-2">Buy  <?php echo  strtoupper($cointo);?></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Buy-crypto End -->
            <!-- Chart Start -->
            <section class="chart">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-xl-7 col-xxl-8">
                        <div class="chart-left">
                            <div class="tab-box">
                                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active left-border" id="pills-home-tab"
                                            data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab"
                                            aria-controls="pills-home" aria-selected="true">Price</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-profile" type="button" role="tab"
                                            aria-controls="pills-profile" aria-selected="false">Market Cap</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link right-border " id="pills-contact-tab"
                                            data-bs-toggle="pill" data-bs-target="#pills-contact" type="button"
                                            role="tab" aria-controls="pills-contact"
                                            aria-selected="false">TradingView</button>
                                    </li>
                                </ul>
                                <div class="right-box lh-0">
                                   
                                </div>
                            </div>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab">
                                    <div class="imgbox">
                                      <coingecko-coin-compare-chart-widget  coin-ids="<?php echo$string = str_replace(' ', '', $nameofid); ?>" currency="<?php  echo strtolower($cointo);?>" locale="en">
                                      </coingecko-coin-compare-chart-widget>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab">
                                    <div class="imgbox">
                                    <coingecko-coin-compare-chart-widget  coin-ids="<?php echo$string = str_replace(' ', '', $nameofid); ?>" currency="<?php  echo strtolower($cointo);?>" locale="en" type="market_cap"></coingecko-coin-compare-chart-widget>
                                       
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                                    aria-labelledby="pills-contact-tab">
                                    <div class="imgbox">
                                       <!-- TradingView Widget BEGIN -->
<!-- TradingView Widget BEGIN -->
<iframe id="tradingviewchart" src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_c1b62&symbol=BTC&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=0&toolbarbg=f1f3f6&studies=ROC%40tv-basicstudies%1FStochasticRSI%40tv-basicstudies%1FMASimple%40tv-basicstudies&theme=light&style=1&timezone=exchange&withdateranges=1&showpopupbutton=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&showpopupbutton=1&locale=in&utm_source=okxprod.wpengine.com&utm_medium=widget_new&utm_campaign=chart&utm_term=AAPL&page-uri=https://okxprod.wpengine.com/4594-2"></iframe>
<!-- TradingView Widget END -->
<!-- TradingView Widget END -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-5 col-xxl-4">
                        <div class="chart-right">
                            <div class="row align-items-center">
                              <?php 
                              foreach($lostofallnew['crypto'] as $valusymbol){ 
                                if($valusymbol['symbol'] == strtoupper($coinfrom)){ 
                              ?>
                                <div class="col-6">
                                    <div class="detail d-flex">
                                        <div class="icon">
                                            <img src="<?php echo $valusymbol['icon_url']; ?>" alt="<?php echo $valusymbol['name']; ?>">
                                        </div>
                                        <div class="text">
                                            <p><?php echo $valusymbol['name_full']; ?></p>
                                            <h5>$<?php echo $finalratedata['rate']; ?></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="button-box d-flex justify-content-center align-items-center">
                                        <img src="<?=get_stylesheet_directory_uri()?>/assets/images/btn-arrow.svg" alt="">
                                        <p><?php $foo =$finalratedata['change_pct']; echo number_format((float)$foo, 2, '.', '');?>%</p>
                                    </div>
                                </div>
                                <?php 
                                $testmax_supply=$valusymbol['max_supply'];
                              } 
                               }
                                ?>

                               <div class="col-lg-12">
                                <ul>
                                        <h3><?php echo strtoupper($coinfrom); ?> Price Statistics</h3>
                                        <li>
                                            <div class="box1">
                                                <span><?php echo strtoupper($coinfrom); ?> Price</span>
                                            </div>
                                            <div class="box2">
                                                <span>$<?php echo $finalratedata['rate'];?></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box1">
                                                <span>Price Change</span>
                                            </div>
                                            <div class="box2">
                                                <span>$<?php echo $finalratedata['change'];?></span>
                                                <p class="green"><?php echo $finalratedata['change_pct'];?></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box1">
                                                <span>24h Low / 24h High</span>
                                            </div>
                                            <div class="box2">
                                                <span>$<?php echo $finalratedata['low'];?> / <br> $<?php echo $finalratedata['high'];?></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box1">
                                                <span>Trading Volume</span>
                                            </div>
                                            <div class="box2">
                                                <span>$<?php echo $finalratedata['vol']; ?></span>
                                                <p class="red"><?php echo $assertprice[0]['market_cap_change_percentage_24h']; ?>%</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box1">
                                                <span>Volume / Market Cap</span>
                                            </div>
                                            <div class="box2">
                                                <span><?php echo $finalratedata['cap']; ?></span>
                                            </div>
                                        </li>
                                        <!-- <li>
                                            <div class="box1">
                                                <span>Market Dominance</span>
                                            </div>
                                            <div class="box2">
                                                <span>42.37%</span>
                                            </div>
                                        </li> -->
                                        <li>
                                            <div class="box1">
                                                <span>Market Rank</span>
                                            </div>
                                            <div class="box2">
                                                <span>#<?php echo $assertprice[0]['market_cap_rank']; ?></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Chart End -->
         <!-- Content-block Start -->
         <section class="content-block section-gap">
            <div class="container">
                <div class="heading">
                    <h3><?php echo get_field('content_block_title',$pid);?></h3>
                    <div class="desccontent">
                    <?php echo get_field('content_block_description',$pid);?>
                    </div>
                </div>
            </div>
        </section>
        <!-- Content-block End -->
        <!-- Price-history Strat -->
        <section class="price-history section-gap pt-0">
            <div class="container">
                <div class="heading">
                    <h3>7-day price history of <?php echo  strtoupper($coinfrom);?> to <?php echo  strtoupper($cointo);?></h3>
                    <p>Compare the price & changes of  <?php echo  strtoupper($coinfrom);?> in <?php echo  strtoupper($cointo);?> for the week.</p>
                </div>
                <?php
                 $today=date('Y-m-d');
                 $sevendate=date('Y-m-d', strtotime('-6 days'));
                 $btc=$coinfrom;
                 $tobtc=$cointo;
              
                 $URL='https://api.coinlayer.com/timeframe?access_key=d7a66e6f754617ac557f7fcb9958a2e4&symbols='.$btc.'&start_date='.$sevendate.'&end_date='.$today.'&target='.$tobtc;
                 $curl = curl_init();
                   curl_setopt_array($curl, array(
                     CURLOPT_URL => $URL,
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
                 $convertbtc = json_decode(json_encode($bitcoinconvert), true);
                ?>
                <div class="main-table">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <!-- <th>Day of the week</th> -->
                                <th>1 <?php echo  strtoupper($coinfrom);?> to <?php echo  strtoupper($cointo);?></th>
                                <!-- <th>24hr Changes</th> -->
                                <th>24hr Change %</th>
                            </tr>
                        </thead>
                        <tbody>
                          <?php 
                            foreach($convertbtc['rates'] as $datekey=>$histdata){
                              $endpoint = 'change';
                              $access_key = 'd7a66e6f754617ac557f7fcb9958a2e4';
                              $endate=$datekey;
                              $endn = date('Y-m-d', strtotime( $endate . " -1 days"));
                              $ch = curl_init('https://api.coinlayer.com/api/'.$endpoint.'?access_key='.$access_key.'&start_date='.$endn.'&end_date='.$endate.'&target='.$cointo.'&symbols='.$coinfrom.'');   
                              curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                              $json = curl_exec($ch);
                              curl_close($ch);
                              $conversionResult = json_decode($json, true);
                          ?>
                          <tr>
                              <td> <?php  echo date('M ,d Y', strtotime($datekey)); ?> </td>
                              <!-- <td><?php echo date('l', strtotime($datekey));;  ?></td> -->
                              <td>$<?php echo $histdata[strtoupper($coinfrom)];  ?> </td>
                              <?php   $mystring=$conversionResult['rates'][strtoupper($coinfrom)]['change'];  if(strpos($mystring, '-') !== false){ ?>
                                <!-- <td class="red">-$<?php  echo substr($mystring,1); ?></td> -->
                              <?php } else{ ?>
                                <!-- <td class="green">$<?php echo $mystring; ?></td> -->
                              <?php } ?>
                              <?php   $mystring=$conversionResult['rates'][strtoupper($coinfrom)]['change_pct'];  if(strpos($mystring, '-') !== false){ ?>
                                <td class="red">-<?php  echo substr($mystring,1); ?>%</td>
                              <?php } else{ ?>
                                <td class="green"><?php echo $mystring; ?>%</td>
                              <?php } ?>
                          </tr>
                            <?php } ?>   
                          </tbody>
                    </table>
                </div>

            </div>
        </section>
        <!-- Price-history End -->
        <!-- Feature Start -->
        <section class="feature">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="heading text-center">
                        <h3>Why buy <?php echo $coinfromname; ?> with OKX?</h3>
                    </div>
                    <?php
                    $feature = get_field('why_buy_litecoin_with_okx',$pid);
                    if( $feature ) {
                       foreach( $feature as $row ) {
                            $icon_whyokx = $row['icon_whyokx'];
                            $title_okx = $row['title_okx'];
                            $description_okx = $row['description_okx'];
                        ?>
                      <div class="col-sm-6 col-lg-4">
                        <div class="feature-box text-center">
                            <img src="<?php echo $icon_whyokx; ?>" alt="<?php echo $title_okx; ?>">
                            <h5><?php echo $title_okx; ?></h5>
                            <div class="featuredesc"><?php echo $description_okx; ?></div>
                        </div>
                      </div>
                        <?php
                        }
                    } ?>
                </div>
            </div>
        </section>
        <!-- Feature End -->
        <!-- About-us Start -->
        <section class="about-us section-gap">
            <?php  $aboutimg = get_field('imgandcontent',$pid); ?>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8">
                        <div class="about-left">
                            <div class="heading">
                                <h3><?php echo $aboutimg["title_imgcontent"];?></h3>
                                <div class="imgcontentdescript">
                                  <?php echo $aboutimg["description_imgcontent"];?>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-right text-center lh-0">
                            <img src="<?php echo $aboutimg["img_content"];?>" alt="<?php echo $aboutimg["title_imgcontent"];?>">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About-us End -->

        <!-- Top Crypto to Fiat Rates Start -->
        <section class="top-cryptofiatrates section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                                <div class="text-center"><h3>Top Crypto to Flat Rates</h3></div>
                    </div>        
                </div>   
                
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <table id="topcryptofiat">
                            <thead>
                                <tr id="trdling">
                                    <td>Crypto</td>
                                    <td>USD</td>
                                    <td>INR</td>
                                    <td>EUR</td>
                                    <td>GBP</td>
                                    <td>AUD</td>
                                    <td>CAD</td>
                                </tr>
                            </thead>
                            <tbody>
                                <?php 
                                 $arylist=array();
                                 $arylistnew=array();
                                 $crtpyoarray=array('BTC','ETH','USDT','USDC','BNB','BUSD','XRP','ADA');

                                 $arraynewc=array("usd-coin","solana","binance-usd","dogecoin");
                                 $crtpyotopricearray=array('USD','INR','EUR','GBP','AUD','CAD');
                                 $crtpyotopriarray=array('usd','inr','eur','gbp','aud','cad');
                                 foreach($lostofallnew['crypto'] as $valusymbol){
                                    if (in_array($valusymbol['symbol'],$crtpyoarray))
                                    { 
                                      
                                        $arylist[]=array('symbol'=>$valusymbol['symbol'],'name'=>$valusymbol['name'],'icon_url'=>$valusymbol['icon_url']);
                                   }

                                 }

                                 foreach($arraynewc as $listvid){

                                     $url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids='.$listvid.'&order=market_cap_desc&per_page=100&page=1&sparkline=false';
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
                                     $bitcoinconver= json_decode($response);
                                     $convertc = json_decode(json_encode($bitcoinconver), true);

                                     

                                    $arylistnew[]=array('id'=>$listvid,'symbol'=>$convertc[0]['symbol'],'name'=>$convertc[0]['name'],'icon_url'=>$convertc[0]['image']);

                                 }

                               
                              
                                foreach($arylist as $topcontent){
                                ?>
                                <tr>
                                    <td>
                                        <div class="infocrypto">
                                            <div class="cryptoiconurl"><img src="<?php echo $topcontent['icon_url'];?>"></div>
                                            <div class="nameofcry"><span class="topcryname"><?php echo $topcontent['name'];?></span><span class="topcryptosymbol"><?php echo $topcontent['symbol'];?></span></div>
                                        </div>
                                    </td>
                                    <?php foreach($crtpyotopricearray as $cryp){ 
                                   
                                    $url='https://api.coinlayer.com/convert?access_key=d7a66e6f754617ac557f7fcb9958a2e4&to='.$cryp.'&from='.$topcontent['symbol'].'&amount=1';
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
                                     $bitcoinconvertvcx = json_decode($response);
                                     $convert = json_decode(json_encode($bitcoinconvertvcx), true);
                                  
                                    
                                    
                                    
                                    ?>
                                     <td class="crttd"><?php  echo $convert['result']; ?></td>

                                  <?php } ?>      

                                </tr>
                                <?php } 
                                 foreach($arylistnew as $topnewcontent){ ?>
                                <tr>
                                    <td>
                                        <div class="infocrypto">
                                            <div class="cryptoiconurl"><img src="<?php echo $topnewcontent['icon_url'];?>"></div>
                                            <div class="nameofcry"><span class="topcryname"><?php echo $topnewcontent['name'];?></span><span class="topcryptosymbol"><?php echo $topnewcontent['symbol'];?></span></div>
                                        </div>
                                    </td>
                                    <?php foreach($crtpyotopriarray as $cryp){ 
                                   
                                   $url='https://api.coingecko.com/api/v3/coins/markets?vs_currency='.$cryp.'&ids='.$topnewcontent['id'].'&order=market_cap_desc&per_page=100&page=1&sparkline=false';
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
                                    $bitcoinconvertvcx = json_decode($response);
                                    $convert = json_decode(json_encode($bitcoinconvertvcx), true);
                                 
                                   
                                   
                                   
                                   ?>
                                    <td class="crttd"><?php  echo $convert[0]['current_price']; ?></td>

                                 <?php } ?>      





                                 </tr>

                                <?php  }
                                
                                
                                ?>
                            </tbody>
                        </table>       
                    </div>        
                </div>   
            </div>    
        </section>

         <!-- Top Crypto to Fiat Rates End -->


        <!-- Convert Start -->
        <section class="convert">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="convert-left text-center">
                            <div class="heading">
                              <h3>Convert (<?php echo  strtoupper($coinfrom);?>) to <?php echo  strtoupper($cointo);?></h3>
                            </div>
                            <table class="table text-center">
                                <thead>
                                    <tr>
                                        <th><?php echo  strtoupper($coinfrom);?></th>
                                        <th><?php echo  strtoupper($cointo);?></th>
                                    </tr>
                                </thead>
                                <tbody>
                                 <?php 
                                   $btc=$coinfrom;
                                   $tobtc=$cointo;
                                   $array_coverv=array();
                                   $array_coverv=array('1','5','10','20','50','100','1000');
                                   $currentdate=date('Y-m-d');
                                  foreach($array_coverv as $cvt){
                                    $url='https://api.coinlayer.com/convert?access_key=d7a66e6f754617ac557f7fcb9958a2e4&to='.$tobtc.'&from='.$btc.'&amount='.$cvt;
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
                                    $convertbtc = json_decode(json_encode($bitcoinconvert), true);
                                 
                                 ?> 
                                    <tr>
                                    <td><?php echo $cvt; ?></td>
                                              <?php 
                                                    $word = "E-";
                                                    $mystring = $convertbtc['result'];
                                                    if(strpos($mystring, $word) !== false){

                                                      $de=explode('E-',$mystring);
                                                      $dss=explode('.',$de[0]);
                                                      $ded='%.'.$de[1].'f';
                                                      $test= sprintf($ded, floatval($mystring));
                                                      echo ' <td>'.$test.$dss[1].'</td>';
                                                     
                                                    }else{
                                                  ?>
                                                  <td><?php echo $convertbtc['result']; ?> </td>
                                                  <?php } ?>
                                      
                                    </tr>
                                 <?php } ?> 
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="convert-left mb-0 text-center">
                            <div class="heading">
                            <h3>Convert (<?php echo  strtoupper($cointo);?>) to <?php echo  strtoupper($coinfrom);?></h3>
                            </div>
                            <table class="table text-center">
                                <thead>
                                    <tr>
                                        <th><?php echo  strtoupper($cointo);?></th>
                                        <th><?php echo  strtoupper($coinfrom);?></th>
                                    </tr>
                                </thead>
                                <tbody>
                                 <?php  foreach($array_coverv as $cvt){
                                         $curl = curl_init();
                                         $url='https://api.coinlayer.com/convert?access_key=d7a66e6f754617ac557f7fcb9958a2e4&to='.$btc.'&from='.$tobtc.'&amount='.$cvt;
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
                                          $convertbtc = json_decode(json_encode($bitcoinconvert), true);
                                                    
                                 ?>
                                 <tr>
                                        <td><?php echo $cvt; ?></td>
                                          <?php 
                                                    $word = "E-";
                                                    $mystring = $convertbtc['result'];
                                                    if(strpos($mystring, $word) !== false){

                                                      $de=explode('E-',$mystring);
                                                      $dss=explode('.',$de[0]);
                                                      $ded='%.'.$de[1].'f';
                                                      $test= sprintf($ded, floatval($mystring));
                                                      echo '<td>'.$test.$dss[1].'</td>';
                                                     
                                                    }else{
                                                  ?>
                                                  <td ><?php echo $convertbtc['result']; ?> </td>
                                                  <?php } ?>
                                    </tr>
                                   <?php } ?>
                                  </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Convert End -->
        <!-- Faq Start -->
        <section class="faq section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="heading text-center">
                            <h3>FAQ</h3>
                        </div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                          <?php $faq = get_field('faq_section',$pid); 
                          if( $faq ) { $i=0; foreach( $faq as $row ) {
                                $title_faq = $row['title_faq']; 
                                $faq_description = $row['faq_description']; 
                                ?>
                                <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading<?php echo $i;?>">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapse<?php echo $i;?>" aria-expanded="false"
                                        aria-controls="flush-collapse<?php echo $i;?>">
                                       <?php echo  $title_faq; ?>
                                    </button>
                                </h2>
                                <div id="flush-collapse<?php echo $i;?>" class="accordion-collapse collapse"
                                    aria-labelledby="flush-heading<?php echo $i;?>" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body"><?php echo  $faq_description; ?></div>
                                </div>
                            </div>
                           <?php  $i++;}    } ?>
                          </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Faq End -->
        <!-- Okx-details Start -->
        <section class="okx-details section-gap pt-0">
          <?php 
          $blog_posts = get_field('blog_section');
         ?>
            <div class="container">
                <div class="row justify-content-center">

                <div class="col-md-4 col-sm-6 col-11">
                        <div class="okx-details-box" >
                            <div class="imgbox">
                            <a href="https://okxprod.wpengine.com/what-is-solana" target="_blank"> <img src="<?=get_stylesheet_directory_uri()?>/assets/images/Rectangle.png" alt=""></a>
                            </div>
                            <div class="heading">
                              <a href="https://okxprod.wpengine.com/what-is-solana" target="_blank"><h3>How to buy Solana</h3></a>
                              <p>Financial markets rally last week, giving crypto a rare positive week amidst the bear market. Meanwhile, crypto lending firms seek bailout to survive.</p>
                              <p>Financial markets rally last week, giving crypto a rare positive week amidst the bear market.</p>
                            </div>
                        </div>
                        </div>

                        <div class="col-md-4 col-sm-6 col-11">
                        <div class="okx-details-box" id="chartmarteckprivce">
                           
                            <div class="heading">
                               <a href="https://www.okx.com/markets/prices" target="_blank"><h3>Market prices list</h3></a>
                               <p>Collective Western fiscal tightening measures sent the crypto market into a down </p>
                               <!-- TradingView Widget BEGIN -->
<iframe id="marketpricelisys" src="https://s.tradingview.com/embed-widget/market-overview/?locale=in&page-uri=https%3A%2F%2Fokxprod.wpengine.com%2Fconverter%2Fbtc%2Fusd#%7B%22colorTheme%22%3A%22light%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Atrue%2C%22showSymbolLogo%22%3Atrue%2C%22showFloatingTooltip%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Bonds%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22BINANCE%3AAVAXUSD%22%7D%2C%7B%22s%22%3A%22COINBASE%3AMATICUSD%22%7D%2C%7B%22s%22%3A%22BITFINEX%3ALEOUSD%22%7D%2C%7B%22s%22%3A%22COINBASE%3AWBTCUSD%22%7D%2C%7B%22s%22%3A%22COINBASE%3ALTCUSD%22%7D%5D%2C%22originalTitle%22%3A%22Bonds%22%7D%5D%2C%22utm_source%22%3A%22okxprod.wpengine.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22market-overview%22%7D"> </iframe>
</div></div>
<!-- TradingView Widget END -->
                          
                        </div>

                        <div class="col-md-4 col-sm-6 col-11">
                        <div class="okx-details-box" id="minicharwidgetcont">
                          
                            <div class="heading">
                                <a href="https://www.okx.com/markets/prices/bitcoin-btc" target="_blank"><h3>BTC prices page</h3></a>   
                                <p>Markets plunge on surging inflation, with ETH in particular badly hit. Due to extreme market conditions, Celsius pauses withdrawals sending stETH tumbling.</p>
                          <iframe src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=in&page-uri=https%3A%2F%2Fokxprod.wpengine.com%2Fconverter%2Fbtc%2Fusd#%7B%22symbol%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%221D%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22okxprod.wpengine.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%7D" id="chartdd"> </iframe>
                            </div>
                        </div>
                        </div>
                        
               
                  <?php 
                //   if( $blog_posts ){
                //     foreach( $blog_posts as $featured_post ){
                //       $permalink = get_permalink( $featured_post->ID );
                //       $title = get_the_title( $featured_post->ID );
                //       $desc = get_the_excerpt( $featured_post->ID );
                //       $feat_image = wp_get_attachment_url( get_post_thumbnail_id( $featured_post->ID) );

                //       ?>
                <!-- //        <div class="col-md-4 col-sm-6 col-11">
                //         <div class="okx-details-box">
                //             <div class="imgbox">
                //                 <img src="<?php echo  $feat_image;?>" alt="<?php echo $title;?>">
                //             </div>
                //             <div class="heading">
                //                 <h5><?php echo  get_the_category($featured_post->ID)[0]->name;?></h5>
                //                 <a href="<?php echo $permalink;?>"><h3><?php echo $title;?></h3></a>
                //                 <p><?php echo $desc; ?></p>
                //             </div>
                //         </div>
                //         </div> -->
                      <?php
                //     }
                //   }
                  ?>
                  
                  
                  
                </div>
            </div>
        </section>
        <!-- Okx-details End -->
        <!-- Qrcode Start -->
        <section class="qrcode">
            <div class="line-box"></div>
          <?php $hero = get_field('img_and_text_conten_background'); ?>
           
            <div class="container">
                <div class="row align-items-center">

               

                    <div class="col-md-6 col-lg-5 col-xl-4">
                        <div class="qrcode-left">
                            <div class="heading">
                                <h3><?php echo $hero['title_black_bg']; ?></h3>
                                <h5><?php echo $hero['subtitle_blackbg']; ?></h5>
                                <?php echo $hero['description_blackbg']; ?>
                             </div>
                            <div class="btn-box">
                              <a href="<?php echo $hero['google_playlink'];?>" target="_blank" class="google-play"> 
                                <img src="<?=get_stylesheet_directory_uri()?>/assets/images/google-play.svg" alt="google-play"> 
                              </a>
                              <a href="<?php echo $hero['app_store_link'];?>" class="app-store" target="_blank"  > 
                                  <img src="<?=get_stylesheet_directory_uri()?>/assets/images/app-store.svg" alt="app-store">
                              </a>
                              <div class="scanner">
                                 <img  class="code-img" src="<?=get_stylesheet_directory_uri()?>/assets/images/scanner.svg" alt="">
                                    <div class="show-code">
                                        <div class="triangle-top"></div>
                                        <div class="show-code-line">
                                            <img src="<?=get_stylesheet_directory_uri()?>/assets/images/scanner-code.png" alt="">
                                            <p class="scan-text">Scan To Download</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text">
                                <a href="<?php echo $hero['okx_api_document_link'];?>" target="_blank">
                                    <p>OKX API Documentation</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-7 col-xl-7">
                        <div class="qacode-right  text-end lh-0">
                            <img src="<?php echo $hero['black_background_img'];?>" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Qrcode End -->
        <!-- Learn-more Start -->
        <section class="learn-more section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="heading text-center">
                            <h3>Want to learn more before you buy Tether?</h3>
                            <p>Get detailed information about cryptocurrencies listed on OKX, including their tech,
                                founders and price history.</p>
                        </div>
                    </div>
                    <div class="col-lg-12 p-0">
                        <ul>
                            <li> <a href="javascript:void(0)">Bitcoin</a> </li>
                            <li><a href="javascript:void(0)">Tether</a></li>
                            <li><a href="javascript:void(0)">BTC to USD</a></li>
                            <li><a href="javascript:void(0)">Ethereum</a></li>
                            <li><a href="javascript:void(0)">XRP</a></li>
                            <li><a href="javascript:void(0)">Cryptocurrency</a></li>
                            <li><a href="javascript:void(0)">Bittorrent</a></li>
                            <li><a href="javascript:void(0)">Ronin Network</a></li>
                            <li><a href="javascript:void(0)">Conflux Token</a></li>
                            <li><a href="javascript:void(0)">WEMIX Token</a></li>
                            <li><a href="javascript:void(0)">Gods Unchained</a></li>
                            <li><a href="javascript:void(0)">LinkEye</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- Learn-more End -->
 <?php 
    endwhile;
  ?>
</div>
<!-- Main-wrapper End -->
<link rel="stylesheet" href="<?=get_stylesheet_directory_uri()?>/assets/vendor/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="<?=get_stylesheet_directory_uri()?>/assets/css/app.css" />
  
    <!-- <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"> -->
<script src="<?=get_stylesheet_directory_uri()?>/assets/vendor/js/bootstrap.bundle.min.js"></script>
<script src="<?=get_stylesheet_directory_uri()?>/assets/vendor/js/jquery-3.6.0.js"></script>

<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />

<!-- <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script> -->

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src="<?=get_stylesheet_directory_uri()?>/converter_chart.js"></script>
<!-- <script src="<?=get_stylesheet_directory_uri()?>/assets/js/custom.js"></script> -->



  <?php get_footer(); ?>
<script>

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
</script>
  <script>
jQuery('#sik-select').each(function(index, dropdown) {
  //Find the input search box
  let search = jQuery(dropdown).find('.search');

  //Find every item inside the dropdown
  let items = jQuery(dropdown).find('.dropdown-item');


  jQuery(search).on('input', function() {
    filter(jQuery(search).val().trim().toLowerCase())
  });

 
  function filter(word) {
    let length = items.length
    let collection = []
    let hidden = 0
    for (let i = 0; i < length; i++) {
	
	
	if (jQuery(items[i]).data('value').toString().toLowerCase().includes(word)) {
	 jQuery(items[i]).closest('li').show()
	}
	else{
	jQuery(items[i]).closest('li').hide()
	hidden++
	}
	
    }

    //If all items are hidden, show the empty view
    if (hidden === length) {
        jQuery(dropdown).find('.dropdown_empty').show();
    } else {
        jQuery(dropdown).find('.dropdown_empty').hide();
    }
  }

  //If the user clicks on any item, set the title of the button as the text of the item
  jQuery(dropdown).find('.dropdown-menu').find('#menuItems').on('click', '.dropdown-item', function() {
    jQuery(dropdown).find('.dropdown-toggle').html($(this).html());
    jQuery(dropdown).find('.dropdown-toggle').dropdown('toggle');
    jQuery('#coinhiddenfrom').val(jQuery(this).data('value'));

         var convert_to_coint_id = jQuery('#coinhiddento').val();
         var from_bitcoin_id = jQuery('#coinhiddenfrom').val();
         var toamount=  jQuery("#converterfrom_amount").val();

         var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
         var str =  '&from=' + from_bitcoin_id +  '&to=' + convert_to_coint_id +  '&amount=' + toamount + '&action=okxbitcoinconvert';
         
         jQuery.ajax({
                           type: "POST",
                           url: ajaxUrl,
                           data: str,
                           beforeSend: function() {
                            jQuery('#imgloading').addClass('showim');
                           },
                           success: function(data){
                               var data = jQuery.parseJSON(data);
                               jQuery("#converterfrom_amount").val(toamount);
                               jQuery("#converterto_amount").val(data);
                           },
                           error : function(jqXHR, textStatus, errorThrown) {
                           },
                           complete: function() {
                            jQuery('#imgloading').removeClass('showim');
                           }
    });


  })
});



jQuery('#coin-select').each(function(index, dropdown) {
//Find the input search box
let search = jQuery(dropdown).find('.search');

//Find every item inside the dropdown
let items = jQuery(dropdown).find('.dropdown-item');


jQuery(search).on('input', function() {
filter(jQuery(search).val().trim().toLowerCase())
});


function filter(word) {
let length = items.length
let collection = []
let hidden = 0
for (let i = 0; i < length; i++) {


if (jQuery(items[i]).data('value').toString().toLowerCase().includes(word)) {
 jQuery(items[i]).closest('li').show()
}
else{
jQuery(items[i]).closest('li').hide()
hidden++
}

}

//If all items are hidden, show the empty view
if (hidden === length) {
    jQuery(dropdown).find('.cointodropdown_empty').show();
} else {
    jQuery(dropdown).find('.cointodropdown_empty').hide();
}
}

//If the user clicks on any item, set the title of the button as the text of the item
jQuery(dropdown).find('.cointodropdown-menu').find('#menuItemscointo').on('click', '.dropdown-item', function() {
jQuery(dropdown).find('.cointodropdown-toggle').html($(this).html());
jQuery(dropdown).find('.cointodropdown-toggle').dropdown('toggle');
jQuery('#coinhiddento').val(jQuery(this).data('value'));

         var convert_to_coint_id = jQuery('#coinhiddento').val();
          var from_bitcoin_id = jQuery('#coinhiddenfrom').val();
          var toamount=  jQuery("#converterfrom_amount").val();
          var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
          var str =  '&from=' + from_bitcoin_id +  '&to=' + convert_to_coint_id +  '&amount=' + toamount + '&action=okxbitcoinconvert';

          jQuery.ajax({  type: "POST",
                            url: ajaxUrl,
                            data: str,
                            beforeSend: function() {
                                jQuery('#imgloading').addClass('showim');
                            },
                            success: function(data){
                                var data = jQuery.parseJSON(data);
                                jQuery("#converterto_amount").val(data);
                                jQuery("#converterfrom_amount").val(toamount);
                            },
                            error : function(jqXHR, textStatus, errorThrown) {
                            },
                            complete: function() {
                                jQuery('#imgloading').removeClass('showim');
                            }
                            
          });



})
});



jQuery('#coinnew-select').each(function(index, dropdown) {
//Find the input search box
let search = jQuery(dropdown).find('.search');

//Find every item inside the dropdown
let items = jQuery(dropdown).find('.dropdown-item');


jQuery(search).on('input', function() {
filter(jQuery(search).val().trim().toLowerCase())
});


function filter(word) {
let length = items.length
let collection = []
let hidden = 0
for (let i = 0; i < length; i++) {


if (jQuery(items[i]).data('value').toString().toLowerCase().includes(word)) {
 jQuery(items[i]).closest('li').show()
}
else{
jQuery(items[i]).closest('li').hide()
hidden++
}

}

//If all items are hidden, show the empty view
if (hidden === length) {
    jQuery(dropdown).find('.coinnewdropdown_empty').show();
} else {
    jQuery(dropdown).find('.coinnewdropdown_empty').hide();
}
}

//If the user clicks on any item, set the title of the button as the text of the item
jQuery(dropdown).find('.coinnewtodropdown-menu').find('#menuItemscoinnewto').on('click', '.dropdown-item', function() {
jQuery(dropdown).find('.coinnewdropdown-toggle').html($(this).html());
jQuery(dropdown).find('.coinnewdropdown-toggle').dropdown('toggle');
jQuery('#coinhiddento').val(jQuery(this).data('value'));

         var convert_to_coint_id = jQuery('#coinhiddento').val();
          var from_bitcoin_id = jQuery('#coinhiddenfrom').val();
          var toamount=  jQuery("#converterfrom_amount").val();
          var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
          var str =  '&from=' + convert_to_coint_id +  '&to=' + from_bitcoin_id +  '&amount=' + toamount + '&action=okxbitcoinconvert';

          jQuery.ajax({  type: "POST",
                            url: ajaxUrl,
                            data: str,
                            beforeSend: function() {
                                jQuery('#imgloading').addClass('showim');
                            },
                            success: function(data){
                                var data = jQuery.parseJSON(data);
                                jQuery("#converterto_amount").val(data);
                                jQuery("#converterfrom_amount").val(toamount);
                            },
                            error : function(jqXHR, textStatus, errorThrown) {
                            },
                            complete: function() {
                                jQuery('#imgloading').removeClass('showim');
                            }
                            
          });



})
});



jQuery('#swapcoincointdiv').each(function(index, dropdown) {
  //Find the input search box
  let search = jQuery(dropdown).find('.search');

  //Find every item inside the dropdown
  let items = jQuery(dropdown).find('.dropdown-item');


  jQuery(search).on('input', function() {
    filter(jQuery(search).val().trim().toLowerCase())
  });

 
  function filter(word) {
    let length = items.length
    let collection = []
    let hidden = 0
    for (let i = 0; i < length; i++) {
	
	
	if (jQuery(items[i]).data('value').toString().toLowerCase().includes(word)) {
	 jQuery(items[i]).closest('li').show()
	}
	else{
	jQuery(items[i]).closest('li').hide()
	hidden++
	}
	
    }

    //If all items are hidden, show the empty view
    if (hidden === length) {
        jQuery(dropdown).find('.swapcoincointdropdown_empty').show();
    } else {
        jQuery(dropdown).find('.swapcoincointdropdown_empty').hide();
    }
  }

  //If the user clicks on any item, set the title of the button as the text of the item
  jQuery(dropdown).find('.swapcoincointmenu').find('#swapcoincointmenuItems').on('click', '.dropdown-item', function() {
    jQuery(dropdown).find('.swapcoincointdrop').html($(this).html());
    jQuery(dropdown).find('.swapcoincointdrop').dropdown('toggle');
    jQuery('#coinhiddenfrom').val(jQuery(this).data('value'));

         var convert_to_coint_id = jQuery('#coinhiddento').val();
         var from_bitcoin_id = jQuery('#coinhiddenfrom').val();
         var toamount=  jQuery("#converterfrom_amount").val();

         var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
         var str =  '&from=' + convert_to_coint_id +  '&to=' + from_bitcoin_id +  '&amount=' + toamount + '&action=okxbitcoinconvert';
         
         jQuery.ajax({
                           type: "POST",
                           url: ajaxUrl,
                           data: str,
                           beforeSend: function() {
                            jQuery('#imgloading').addClass('showim');
                           },
                           success: function(data){
                               var data = jQuery.parseJSON(data);
                               jQuery("#converterfrom_amount").val(toamount);
                               jQuery("#converterto_amount").val(data);
                           },
                           error : function(jqXHR, textStatus, errorThrown) {
                           },
                           complete: function() {
                            jQuery('#imgloading').removeClass('showim');
                           }
    });


  })
});




</script>

<script>
    jQuery(document).ready(function(){
       

     
      jQuery('div#coinfromcrunnecy').hide();
      jQuery('div#swapcoincoint').hide();
      var from_bitcoin_id = jQuery('#coinhiddenfrom').val();
      var convert_to_coint_id = jQuery('#coinhiddento').val();
      var toamount=1;

    
     
      var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
      var str =  '&from=' + from_bitcoin_id +  '&to=' + convert_to_coint_id +  '&amount=' + toamount + '&action=okxbitcoinconvert';
      jQuery.ajax({
                            type: "POST",
                            url: ajaxUrl,
                            data: str,
                            beforeSend: function() {
                                jQuery('#imgloading').addClass('showim');
                            },
                            success: function(data){
                                var data = jQuery.parseJSON(data);
                                jQuery("#converterfrom_amount").val(1);
                                jQuery("#converterto_amount").val(data);
                                jQuery('#imgloading').removeClass('showim');
                              
                            },
                            error : function(jqXHR, textStatus, errorThrown) {
                            },
                            complete: function() {
                                jQuery('#imgloading').removeClass('showim');
                            }
       });

       
       jQuery('#converterfrom_amount').keyup(debounce(function(){
        var convert_to_coint_id = jQuery('#coinhiddento').val();
         var from_bitcoin_id = jQuery('#coinhiddenfrom').val();
         var toamountc=  jQuery("#converterfrom_amount").val();
         if(toamountc == '') {
            var toamount = 1;
            
         }
         else{
            var toamount =toamountc;
         }

         var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
         var str =  '&from=' + from_bitcoin_id +  '&to=' + convert_to_coint_id +  '&amount=' + toamount + '&action=okxbitcoinconvert';
         
         jQuery.ajax({
                           type: "POST",
                           url: ajaxUrl,
                           data: str,
                           beforeSend: function() {
                            jQuery('#imgloading').addClass('showim');
                           },
                           success: function(data){
                               var data = jQuery.parseJSON(data);
                               jQuery("#converterfrom_amount").val(toamount);
                               jQuery("#converterto_amount").val(data);
                           },
                           error : function(jqXHR, textStatus, errorThrown) {
                           },
                           complete: function() {
                            jQuery('#imgloading').removeClass('showim');
                           }
                       });
             
      },500));

       

      jQuery('#converterto_amount').keyup(debounce(function(){

      
          var toamountc=  jQuery("#converterto_amount").val();
          var convert_to_coint_id = jQuery('#coinhiddento').val();
          var from_bitcoin_id = jQuery('#coinhiddenfrom').val();
          if(toamountc == '') {
            var toamount = 1;
            
         }
         else{
            var toamount =toamountc;
         }

         

          var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
          var str =  '&from=' + convert_to_coint_id +  '&to=' + from_bitcoin_id +  '&amount=' + toamount + '&action=okxbitcoinconvert';

          jQuery.ajax({  type: "POST",
                            url: ajaxUrl,
                            data: str,
                            beforeSend: function() {
                                jQuery('#imgloading').addClass('showim');
                            },
                            success: function(data){
                                var data = jQuery.parseJSON(data);
                                jQuery("#converterfrom_amount").val(data);
                                jQuery("#converterto_amount").val(toamount);
                            },
                            error : function(jqXHR, textStatus, errorThrown) {
                            },
                            complete: function() {
                               
                                jQuery('#imgloading').removeClass('showim');
                            }
                            
          });

        },500));


        /*swip css*/

        jQuery("#swapconvertation").click(function(event){
            event.preventDefault();

           var coinhiddenfrom = jQuery('#coinhiddenfrom').val();
           var coinhiddento =   jQuery('#coinhiddento').val();
           var converterfrom_amount = jQuery('#converterfrom_amount').val();
           var html='<img  src="https://assets.coinlayer.com/icons/'+coinhiddenfrom+'.png">'+ coinhiddenfrom;

            if ( jQuery('#coinfromcrunnecy').css('display') == 'none' || jQuery('#coinfromcrunnecy').css("visibility") == "hidden"){

                jQuery('#coinfromcrunnecy').show();
                jQuery('#sik-select').hide();
                jQuery('#coinnew-select button.coinnewdropdown-toggle').html(coinhiddento);
               
               
                
            }
            else{
                jQuery('#sik-select').show();
                jQuery('#coinfromcrunnecy').hide();
                jQuery('#sik-select button.coinbtndrop').html(html);
            }


            if ( jQuery('#swapcoincoint').css('display') == 'none' || jQuery('#swapcoincoint').css("visibility") == "hidden"){
                var str =  '&from=' + coinhiddento +  '&to=' + coinhiddenfrom +  '&amount=' + converterfrom_amount + '&action=okxbitcoinconvert';
                jQuery('#swapcoincoint').show();
                jQuery('#coin-select').hide();
                jQuery('#swapcoincointdiv button.swapcoincointdrop ').html(html);
            }
            else{
                jQuery('#swapcoincoint').hide();
                jQuery('#coin-select').show();
                jQuery('#coin-select button.btn.cointodropdown-toggle').html(coinhiddento);
                var str =  '&from=' + coinhiddenfrom +  '&to=' + coinhiddento +  '&amount=' + converterfrom_amount + '&action=okxbitcoinconvert';
            }

            var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";


            setTimeout(function() {

                jQuery.ajax({  type: "POST",
                            url: ajaxUrl,
                            data: str,
                            beforeSend: function() {
                                jQuery('#imgloading').addClass('showim');
                            },
                            success: function(data){
                                var data = jQuery.parseJSON(data);
                                jQuery("#converterfrom_amount").val(converterfrom_amount);
                                jQuery("#converterto_amount").val(data);


                            },
                            error : function(jqXHR, textStatus, errorThrown) {
                            },
                            complete: function() {
                              jQuery('#imgloading').removeClass('showim');
                            }
                            
                });
           }, 1000);
           
          


        });

          
    });

  </script>
  

<style type="text/css">
    .crypto-icon,.coinbtndrop img ,.swapcoincointdrop  img{
    height: 1em;
    vertical-align: baseline;
    margin-bottom: -0.1em;
}
.dropdown-item {
    cursor: pointer;
}
div#imgloading {
    text-align: center;
  
    width: 100%;
    display: block;
    visibility: hidden;
    opacity: 0;
    max-width:970px;
}
div#imgloading.showim{
    visibility: visible;
    opacity: 1;
}
span#refershicon img {
    width: 25px;
    height: 25px;
}
 button.dropdown-toggle {
    position: relative;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 2ch;
    text-align: left;
}
button.dropdown-toggle::after {
    position: absolute;
    right: 1ch;
    top: calc(50% - 0.2ch);
}
.menuItems {
    height: 250px;
    overflow: scroll;
    overflow-x: hidden;
    width: 100%;
}
ul#menuItems,#menuItemscointo,#menuItemscoinnewto,#swapcoincointmenuItems {
    padding-left: 0px;
}
input#converterto_amount::-webkit-outer-spin-button, input#converterto_amount::-webkit-inner-spin-button ,input#converterfrom_amount::-webkit-outer-spin-button, input#converterfrom_amount::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}

  .qrcode-left ul li span {
    color: white;
    padding-left: 20px;
}
  .qrcode-left li.elementor-icon-list-item {
position: relative;
  }
  .qrcode-left li.elementor-icon-list-item span:after {
    content: "";
    background: url(https://okxprod.wpengine.com/wp-content/themes/hello-theme-child-master/assets/images/right.svg);
    width: 100%;
    height: 10px;
    position: absolute;
    background-repeat: no-repeat;
    top: 8px;
    left: 0;
}
.feature-box .featuredesc {
    color: #fff;
}
.my-button:hover{
    color: gray !important;
}
.price-history .main-table .table>:not(caption)>*>*{
    box-shadow: none !important;
}
.price-history .table th, table td{
border: 0 !important;
}
.main-wrapper .price-history .main-table table tbody tr:nth-child(odd){
    border-top: 1px solid #DEE2E6 !important;
    border-bottom: 1px solid #DEE2E6 !important;
}
.convert .convert-left table thead th{
border: 0 !important;
}
.convert table tbody>tr:nth-child(odd)>td, table tbody>tr:nth-child(odd)>th {
    background-color: transparent !important;
}

.faq .accordion .accordion-item .accordion-header .accordion-button {
    background-color: transparent !important;
    color: inherit !important;
}
.accordion-button::after{
   background-image: url(/wp-content/themes/hello-theme-child-master/assets/images/faq-arrow.svg) !important;
}
.main-wrapper .faq .accordion .accordion-item .accordion-button:not(.collapsed)::after{
    filter: inherit !important;
}
.faq .heading h3{
    margin-bottom: 43px;
}
 @media(max-width:991px) {
    .faq .heading h3{
    margin-bottom: 25px;
    }
}
.learn-more ul li a{
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    transition: 0.3s all;
}
.main-wrapper .learn-more ul li{
transition: 0.3s all;
}
.main-wrapper .learn-more ul li:hover {
    background: black;
}
.main-wrapper .learn-more ul li:hover a {
    color: white;
}
.main-wrapper .banner{
margin-top: 0 !important;
 }
 .main-wrapper .banner .banner-img{
    top: 40px;
}
.bitcoin-box {
     margin-bottom: 42px;
}
 .bitcoin-box .user-input {
     border: 0;
     margin-right: 5px;
}
 .bitcoin-box .user-input:focus {
     border: 0;
     box-shadow: none;
}
 .bitcoin-box .user-input:focus-visible {
     outline: none;
}
 .bitcoin-box .box1 {
     border: 1.09348px solid #d8d8d8;
     border-radius: 13.1217px;
     padding: 12px 14px;
}
 .bitcoin-box .swiper-arrow {
     margin: 0 20px;
}
 .btn.btn-secondary {
     background: #f7f7f7;
     border-radius: 4.37391px;
     color: #000;
     border: transparent;
     width: 150px;
     height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.btn.btn-secondary img{
        width: 25px;
    height: 25px;
    min-width: 25px;
}
.show>.btn-secondary.dropdown-toggle {
    color: #000 !important;
    background-color: #f7f7f7 !important;
    border-color: #f7f7f7 !important;
}
.btn-secondary:not(:disabled):not(.disabled):active:focus, .show>.btn-secondary.dropdown-toggle:focus {
    box-shadow: none !important;
}
.btn-secondary:not(:disabled):not(.disabled):active, .show>.btn-secondary.dropdown-toggle {
    color: #000 !important;
    background-color: #f7f7f7 !important;
    border-color: #f7f7f7 !important;
}
 .btn.btn-secondary:focus {
     box-shadow: none;
     outline: none;
}
}
 .crypto-icon {
     height: 1em;
     vertical-align: baseline;
     margin-bottom: -0.1em;
}
 .sik-dropdown &gt;
 button.dropdown-toggle {
     position: relative;
     width: 150px !important;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
     padding: 15px 25px;
     text-align: left;
}
 .sik-dropdown &gt;
 button.dropdown-toggle::after {
     position: absolute;
     right: 1ch;
     top: calc(50% - 0.2ch);
}
 .sik-dropdown .dropdown-item {
     cursor: pointer;
}
.line-box{
    width: 60%;
    background-image: url(https://okxprod.wpengine.com/wp-content/uploads/2022/06/Bgpattern.svg);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    height: 100%;
}
@media (max-width: 767px) {
    .line-box{
        display: none;
    }
    .qacode-right{
        display: none;
    }
}

section.top-cryptofiatrates.section-gap {
    padding-top: 0px !important;
}

/* PRELOADER CSS */
.page-loader{
	width: 100%;
	height: 100vh;
	position: fixed;
	background: #272727;
	z-index: 1000;
	
}
@media (max-width:991px) {
  .line-box{
   width: 50% !important;
  }
}
/* SPINNER ANIMATION */
.spinner {
	position: relative;
	top: 35%;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background-color: #fff;

  border-radius: 100%;  
  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
  animation: sk-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}

#tradingview_8c46f > div {
    height: 658px !important;
}
#chartmarteckprivce .tradingview-widget-container {
    height: 315px !important;
}
#minicharwidgetcont .tradingview-widget-container {
    height: 265px !important;
}
.cryptoiconurl img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    margin-right: 10px;
    display: block;
}
.infocrypto {
    display: flex;
    align-items: center;
}
span.topcryname {
    font-family: 'HarmonyOS Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    flex-direction: column;
}
span.topcryptosymbol {
    font-family: 'HarmonyOS Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 14px;
}
.crttd{
    font-family: 'HarmonyOS Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
}
#trdling td{font-family: 'HarmonyOS Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 19px;}
#trdling{ border-bottom:1px solid #ccc;}
#marketpricelisys {
    height: 310px;
}
iframe#chartdd {
    height: 260px;
}
</style>


<script>

jQuery(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
        jQuery('.page-loader').fadeOut('slow');
	},2500);
});
</script>