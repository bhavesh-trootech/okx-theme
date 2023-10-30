<?php
    get_header();
?>
 
<div class="body-container-wrapper">
  <div class="body-container container-fluid">
    <main id="content" class="site-main" role="main">
   
               <?php 

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

               $thirteedays=date('Y-m-d', strtotime('-30 days'));
               $n = date('Y-m-d', strtotime( $thirteedays . " -1 days"));



              




               while ( have_posts() ) : the_post(); 
               $pid=get_the_ID();
               $title=get_the_title();
               $post_coinfroms = get_the_terms( $pid, 'coinfroms' );
               $post_cointos = get_the_terms( $pid, 'cointos' );
               $coinfrom= $post_coinfroms[0]->slug;
               $cointo= $post_cointos[0]->slug;

               $coinfromname= $post_coinfroms[0]->name;
               $cointoname= $post_cointos[0]->name;

               

               $curl = curl_init();
               $vs_currency=$post_cointos[0]->slug;
               $ids=$post_coinfroms[0]->slug;
               $bitcoind='';
               if($ids == 'BTC'){
                   $bitcoind='bitcoin';
               }else{
                 $bitcoind= $coinfrom;
               }




               foreach($lostofallnew['crypto'] as $valusymbol){ 
            
                if($valusymbol['symbol'] == strtoupper($coinfrom)){

                 
                 

                  $nameofid= strtolower($valusymbol['name']);
                  $string = str_replace(' ', '', $nameofid);
                  $vs_currency=strtolower($cointo);
                //  echo 'https://api.coingecko.com/api/v3/coins/markets?vs_currency='.$vs_currency.'&symbol='.$string;
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

             
               /*new */
              
               $url='https://api.coinlayer.com/live?access_key=d7a66e6f754617ac557f7fcb9958a2e4&expand=1&target='.$cointo.'&symbols='.$coinfrom;
           //  echo $url='https://api.coinlayer.com/'.date('Y-m-d').'?access_key=d7a66e6f754617ac557f7fcb9958a2e4&expand=1&target='.strtoupper($coinfrom).'&symbols='.strtoupper($coinfrom);
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
 

               ?>

               <input type="hidden" id="from_bitcoin_id" name="from_bitcoin_id" value="<?php echo $coinfrom; ?>">
               <input type="hidden" id="convert_to_coint_id" name="convert_to_coint_id" value="<?php echo $cointo; ?>">
              <div class="firstsectionapi pm-50" id="firstsectionapi">
                <div class="container">
                  <div class="row-fluid ">
                      <div class="col-sm-12 col-md-12 " id="titlefirstdiv">
                          <div class="titlesection">
                              <h1 class="titleh1"><?php //echo get_field( "first_block_title", $pid ); ?></h1>
                              <p class="descriptiontitle"><?php //echo get_field( "first_descriptionblock", $pid ); ?></p>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-sm-12 col-md-12 " id="convertercoinh">

                      <div id="conversion-calculator" data-controller="converter">
                          <div class="cds-column-c1lezl4s">
                              <input type="number" name="converterfrom_amount" id="converterfrom_amount" value="" class="form-control fullwithinput"  />
                               <div class="selectfox fullwithcoin" id="coinfromdroup1">
                                      <select name="fromsymbolicon" class="form-select" id="fromsymbolicon">
                                              <option value="">Select </option>
                                              <?php  foreach($lostofallnew['crypto'] as $valusymbol){ ?>
                                                                      <option value="<?php echo $valusymbol['symbol']; ?>"  <?php if(strtoupper($coinfrom) == $valusymbol['symbol']){ echo 'selected=selected'; } ?> data-value="<?php echo  $valusymbol['name_full']; ?>">
                                                                      <span class="symbolname"><?php echo $valusymbol['symbol']; ?></span>
                                                                      <span class="namecoin"><?php echo  $valusymbol['name_full']; ?></span></option>
                                              <?php  } foreach($lostofallnew['fiat'] as $symb=>$valusymbol){
                                                                    ?>
                                                                      <option value="<?php echo $symb; ?>"  data-value="<?php echo  $valusymbol; ?>">
                                                                      <span class="symbolname"><?php echo $symb; ?></span>
                                                                      <span class="namecoin"><?php echo  $valusymbol; ?></span></option>
                                                <?php } ?>
                                      </select>               
                               </div>

                               <!-- <div class="selectfox fullwithcoin" id="cointofromdroup">
                                      <select name="cointofromicon" class="form-select" id="cointofromicon">
                                              <option value="">Select </option>
                                            <?php  foreach($lostofallnew['fiat'] as $symb=>$valusymbol){
                                                                    ?>
                                                                      <option value="<?php echo $symb; ?>"  data-value="<?php echo  $valusymbol; ?>">
                                                                      <span class="symbolname"><?php echo $symb; ?></span>
                                                                      <span class="namecoin"><?php echo  $valusymbol; ?></span></option>
                                                                    <?php
                                               } foreach($lostofallnew['crypto'] as $valusymbol){ ?>
                                                <option value="<?php echo $valusymbol['symbol']; ?>"   data-value="<?php echo  $valusymbol['name_full']; ?>">
                                                <span class="symbolname"><?php echo $valusymbol['symbol']; ?></span>
                                                <span class="namecoin"><?php echo  $valusymbol['name_full']; ?></span></option>
                                             <?php  } ?>
                                      </select>               
                               </div> -->

                          </div>
                          <div class="cxbBsu">
                                <button class="currency-swap" id="swapconvertation" >
                                    <span class="iconblockc">
                                          <i class="fas fa-exchange-alt currency-swap"></i>
                                    </span>
                              </button>
                          </div>
                          <div class="cds-column-c1lezl4s">
                          <input type="number" name="converterto_amount" id="converterto_amount" value="" class="form-control fullwithinput"  />
                               <div class="selectfox fullwithcoin" id="cointodroupdiv">
                               <select name="tosymbolicon" class="form-select" id="tosymbolicon">
                                              <option value="">Select </option>
                                            <?php
                                                             
                                                                  foreach($lostofallnew['fiat'] as $symb=>$valusymbol){
                                                                    ?>
                                                                      <option value="<?php echo $symb; ?>"  <?php if(strtoupper($cointo) == $symb){ echo 'selected=selected';  } ?>  data-value="<?php echo  $valusymbol; ?>">
                                                                      <span class="symbolname"><?php echo $symb; ?></span>
                                                                      <span class="namecoin"><?php echo  $valusymbol; ?></span></option>
                                                                    <?php
                                                                  } foreach($lostofallnew['crypto'] as $valusymbol){ ?>
                                                                    <option value="<?php echo $valusymbol['symbol']; ?>"   data-value="<?php echo  $valusymbol['name_full']; ?>">
                                                                    <span class="symbolname"><?php echo $valusymbol['symbol']; ?></span>
                                                                    <span class="namecoin"><?php echo  $valusymbol['name_full']; ?></span></option>
                                                                 <?php  } ?>
                                              
                                                ?>
                                            
                                      </select>               
                               </div>       
                               
                              <!-- <div class="selectfox fullwithcoin" id="coinfromtodroupdiv">
                                      <select name="coinrevertfrom" class="form-select" id="coinrevertfrom">
                                              <option value="">Select </option>
                                            <?php  foreach($lostofallnew['crypto'] as $valusymbol){ ?>
                                                                      <option value="<?php echo $valusymbol['symbol']; ?>"  <?php if(strtoupper($coinfrom) == $valusymbol['symbol']){ echo 'selected=selected'; } ?> data-value="<?php echo  $valusymbol['name_full']; ?>">
                                                                      <span class="symbolname"><?php echo $valusymbol['symbol']; ?></span>
                                                                      <span class="namecoin"><?php echo  $valusymbol['name_full']; ?></span></option>
                                                                    <?php
                                                                  } foreach($lostofallnew['fiat'] as $symb=>$valusymbol){
                                                                    ?>
                                                                      <option value="<?php echo $symb; ?>"  <?php if(strtoupper($cointo) == $symb){ echo 'selected=selected';  } ?>  data-value="<?php echo  $valusymbol; ?>">
                                                                      <span class="symbolname"><?php echo $symb; ?></span>
                                                                      <span class="namecoin"><?php echo  $valusymbol; ?></span></option>
                                                                    <?php
                                                                  }
                                                ?>
                                      </select>               
                               </div>  -->



                          </div>
                      </div>  
                </div>
                    </div>
                </div>
                <div id="imgloading"> <img src="<?php echo  get_stylesheet_directory_uri(); ?>/loading.gif"></div>   
              </div>
              </main>
               <?php 
                                                                  
                   // set API Endpoint, access key, required parameters
                    $yesertday=date('Y-m-d', strtotime('-1 days'));
                    $endpoint = $yesertday;
                    $access_key = 'd7a66e6f754617ac557f7fcb9958a2e4';

            
                  
                    // initialize CURL:
                    $ch = curl_init('https://api.coinlayer.com/api/'.$endpoint.'?access_key='.$access_key.'&target='.$cointo.'&symbols='.$coinfrom.'');   
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

                    // get the JSON data:
                    $json = curl_exec($ch);
                    curl_close($ch);

                    // Decode JSON response:
                    $conversionResult = json_decode($json, true);

                   
                                               
                ?>

              <div class="secondsectiondiv ptm-50" id="secondsectiondiv">
              <main id="content" class="site-main" role="main">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-12 fullwithcol">
                              <h1 class="titleh1">Convert  <?php echo  strtoupper($coinfrom);?> to <?php echo  strtoupper($cointo);?> ( <?php echo  strtoupper($coinfrom);?> to <?php echo  strtoupper($cointoname);?> )</h1>
                              <p class="descriptiontitle">
                              <?php  echo  strtoupper($coinfrom); ?> to <?php echo  strtoupper($cointo);  ?> rate today is $<?php echo $finalratedata['rate'] ?> and has 
                              decreased <?php echo $finalratedata['change_pct'] ?>% from $<?php echo $conversionResult['rates'][strtoupper($coinfrom)]; ?> since yesterday.
                                   
                              </p>
                              <p class="descriptiontitle"> <?php echo  strtoupper($coinfrom);?> is on a downward monthly trajectory as it has 
                              change <?php echo $chnagedataall['rates'][strtoupper($coinfrom)]['change_pct'] ;?>% from $<?php echo $chnagedataall['rates'][strtoupper($coinfrom)]['end_rate'] ;?> since 1 month (30 days) ago.</p>
                        </div>
                    </div>
                </div>
              </main>
              </div>


              <div class="thirdsectiondiv ptm-50" id="thirdsectiondiv">
              <main id="content" class="site-main" role="main">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-7 ">
                             <div class="graph" id="coingraph">
                             <?php
                                                                    $string = str_replace(' ', '', $nameofid);
                                                                    ?>
                             <!-- <script src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"></script> -->
                              <coingecko-coin-compare-chart-widget  coin-ids="<?php echo $string; ?>" currency="<?php  echo strtolower($cointo);?>" locale="en">
                               </coingecko-coin-compare-chart-widget>

                             </div>   
                                                                  
                         </div>
                         <div class="col-sm-12 col-3 ">
                            <div class="assertpricedetails">
                            <?php    //foreach($assertprice as $priced){  ?>
                                  <div class="tw-col-span-3 md:tw-col-span-2">

                                  <?php  foreach($lostofallnew['crypto'] as $valusymbol){ 

                                          if($valusymbol['symbol'] == strtoupper($coinfrom)){   ?>
                                        <div class="tw-grid tw-grid-cols-2">
                                        <div class="tw-col-span-2 md:tw-col-span-2">
                                        <div class="tw-inline-flex tw-items-center tw-px-2 tw-py-0.5 tw-rounded-md
                                         tw-text-xs tw-font-medium tw-bg-gray-800 tw-text-gray-100 tw-mb-1 md:tw-mb-0 md:tw-mt-0 dark:tw-bg-gray-600 dark:tw-bg-opacity-40">
                                        Rank #<?php echo $assertprice[0]['market_cap_rank']; ?>
                                        </div>
                                        <div class="tw-flex tw-text-gray-900 dark:tw-text-white tw-mt-2 tw-items-center">
                                        <img class="tw-rounded-full" alt="<?php echo $valusymbol['name']; ?>" src="<?php echo $valusymbol['icon_url']; ?>" width="28" height="28">
                                        <div class="mr-md-3 tw-pl-2 md:tw-mb-0 tw-text-xl tw-font-bold tw-mb-0">
                                        <?php echo $valusymbol['name_full']; ?>
                                        </div> 
                                      </div> <span class="tw-text-gray-900 dark:tw-text-white tw-text-3xl">
                                          <span class="no-wrap" data-price-btc="1.0" data-coin-id="1" data-coin-symbol="btc" data-target="price.price" data-price-previous="19425.854">
                                            $<?php echo $finalratedata['rate']; ?></span><span class="valueofd"><?php echo  $finalratedata['change_pct'];?></span>
                                        </span>
                                      </div>
                                        </div>
                                
                                        </div>
                                        <?php   

                                            $testmax_supply=$valusymbol['max_supply'];
                                         
                                            }



                                        }
                                        
                                        ?>


                                        <div class="infoullistcoin">
                                  <ul class="listdetailinfo">
                                
  
                                      <li><span class="titleoflist">Market Cap</span><span class="listdescoin"><?php echo $finalratedata['cap']; ?></span></li>
                                      <li><span class="titleoflist">Circulating Supply</span><span class="listdescoin"><?php echo $finalratedata['sup']; ?></span></li>
                                      <li><span class="titleoflist">24 Hour Trading Vol</span><span class="listdescoin"><?php echo $finalratedata['vol']; ?></span></li>
                                      <li><span class="titleoflist">Total Supply </span><span class="listdescoin"><?php echo $assertprice[0]['total_supply']; ?></span></li>
                                      <li><span class="titleoflist">Fully Diluted Valuation</span><span class="listdescoin"><?php echo $assertprice[0]['fully_diluted_valuation']; ?></span></li>
                                      <li><span class="titleoflist">Max Supply</span><span class="listdescoin"><?php echo  $testmax_supply; ?></span></li>
                                
                                  </ul>
                              </div>


                                <?php 
                                 
                          //  }   ?>

                        
                          </div>
                          </div>


                          </div>
                          </div>
                          </main>
                          </div>

                      <div class="fourthsectiondiv ptm-50" id="fourthsectiondiv">
                        <main id="content" class="site-main" role="main">
                          <div class="container">
                            <h1 class="titleh1">7-day price history of <?php echo  strtoupper($coinfrom);?> to <?php echo  strtoupper($cointo);?> </h1>
                            <p> Compare the price & changes of <?php echo  strtoupper($coinfrom);?> in <?php echo  strtoupper($cointo);?> for the week.</p>
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
                              <div class="table-responsive">
                                 <table class="table table-striped text-sm text-lg-normal tw-mt-6">
                                   <thead>
                                                  <tr>
                                                  <th class="text-center">Date</th>
                                                  <th class="text-center">Day of the week</th>
                                                  <th class="text-center">1 <?php echo  strtoupper($coinfrom);?> to <?php echo  strtoupper($cointo);?></th>
                                                  <th class="text-center">24hr Changes</th>
                                                  <th class="text-center">Change %</th>
                                                  </tr>
                                  </thead>
                                  <tbody>
                                    <?php 
                                      foreach($convertbtc['rates'] as $datekey=>$histdata){

                                        $endpoint = 'change';
                                        $access_key = 'd7a66e6f754617ac557f7fcb9958a2e4';
                                         $endate=$datekey;
                                         $endn = date('Y-m-d', strtotime( $endate . " -1 days"));

                                       
                                        // initialize CURL:
                                        $ch = curl_init('https://api.coinlayer.com/api/'.$endpoint.'?access_key='.$access_key.'&start_date='.$endn.'&end_date='.$endate.'&target='.$cointo.'&symbols='.$coinfrom.'');   
                                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                    
                                        // get the JSON data:
                                        $json = curl_exec($ch);
                                        curl_close($ch);
                    
                                        // Decode JSON response:
                                        $conversionResult = json_decode($json, true);
                                       


                                    ?>
                                                  <tr>
                                                  <td scope="row" class="font-semibold text-center" style="min-width: 120px;">
                                                  <?php  echo date('M ,d Y', strtotime($datekey)); ?>
                                                  </td>
                                                  <td class="text-center tw-font-bold">
                                                  <?php echo date('l', strtotime($datekey));;  ?>
                                                  </td>
                                                  <td class="text-center">
                                                  $<?php echo $histdata[strtoupper($coinfrom)];  ?>
                                                  </td>
                                                  <td class="text-center text-danger">
                                                  <?php echo  $conversionResult['rates'][strtoupper($coinfrom)]['change']; ?>
                                                  </td>
                                                  <td class="text-center">
                                                  <span class="text-danger">  <?php echo  $conversionResult['rates'][strtoupper($coinfrom)]['change_pct']; ?>%</span>
                                                  </td>
                                                  </tr>
                                      <?php } ?>   
                                    </tbody>
                                </table>
                            </div>
                          </div>
                        </main>
                      </div>  


                      <div class="sixsectionbitcoindiv ptm-50" id="sixconvertdis">
                      <main id="content" class="site-main" role="main">
                          <div class="container">
                                                            <div class="tw-flex tw-flex-col md:tw-flex-row tw-pt-10">
                                      <div class="tw-flex-1 md:tw-mr-4">
                                      <h2 class="tw-text-lg md:tw-text-2xl tw-font-bold tw-text-gray-900 dark:tw-text-white dark:tw-text-opacity-87 text-center">Convert <?php echo  strtoupper($coinfrom);?> to <?php echo  strtoupper($cointo);?></h2>
                                      <div class="coingecko-table">
                                      <?php 
                                         $btc=$coinfrom;
                                         $tobtc=$cointo;
                                         $array_coverv=array();
                                         $array_coverv=array('0.01','0.1','1','2','5','10','20','50','100','1000');
                                         $currentdate=date('Y-m-d');
                                      ?>
                                      <table class="table tw-mb-0 text-sm">
                                      <thead>
                                      <tr>
                                      <th class="text-center"><?php echo $coinfromname; ?></th>
                                      <th class="text-center"><?php echo $cointoname; ?></th>
                                      </tr>
                                      </thead>
                                      <tbody>

                                      <?php 
                                     
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
                                            <tr style="height: 45px">
                                              <td class="text-center"><?php echo $cvt; ?></td>
                                              <?php 
                                                    $word = "E-";
                                                    $mystring = $convertbtc['result'];
                                                    if(strpos($mystring, $word) !== false){

                                                      $de=explode('E-',$mystring);
                                                      $dss=explode('.',$de[0]);
                                                      $ded='%.'.$de[1].'f';
                                                      $test= sprintf($ded, floatval($mystring));
                                                      echo ' <td class="text-center">'.$test.$dss[1].'</td>';
                                                     
                                                    }else{
                                                  ?>
                                                  <td class="text-center"><?php echo $convertbtc['result']; ?> </td>
                                                  <?php } ?>
                                             </tr>
                                                  <?php
                                      }
                                    
                                      ?>
                                    
                                   
                                      </tbody>
                                      </table>
                                      </div>
                                      </div>
                                      <div class="tw-flex-1 md:tw-ml-4">
                                      <h2 class="tw-text-lg md:tw-text-2xl tw-font-bold tw-text-gray-900 dark:tw-text-white dark:tw-text-opacity-87 text-center">Convert <?php echo  strtoupper($cointo);?> to <?php echo  strtoupper($coinfrom);?></h2>
                                      <div class="coingecko-table">
                                      <table class="table tw-mb-0 text-sm">
                                      <thead>
                                      <tr>
                                      <th class="text-center"><?php echo $cointoname; ?></th>
                                      <th class="text-center"><?php echo $coinfromname; ?></th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                        <?php 
                                      foreach($array_coverv as $cvt){


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
                                                <tr style="height: 45px">
                                                  <td class="text-center"><?php echo $cvt; ?></td>
                                                  <?php 
                                                    $word = "E-";
                                                    $mystring = $convertbtc['result'];
                                                    if(strpos($mystring, $word) !== false){

                                                      $de=explode('E-',$mystring);
                                                      $dss=explode('.',$de[0]);
                                                      $ded='%.'.$de[1].'f';
                                                      $test= sprintf($ded, floatval($mystring));
                                                      echo ' <td class="text-center">'.$test.$dss[1].'</td>';
                                                     
                                                    }else{
                                                  ?>
                                                  <td class="text-center"><?php echo $convertbtc['result']; ?> </td>
                                                  <?php } ?>
                                                </tr>
                                                      <?php
                                            } ?>
                                      </tbody>
                                      </table>
                                      </div>
                                      </div>
                                      </div>
                           </div>     
                        </main>         
                      </div>

              <?php endwhile; ?>
    
     
  </div>
</div>  

<style>
@media (min-width: 993px){
  .dropdown-menu.dropdown-popup {
    width: 680px!important;
}
}
ul.listdetailinfo {
    padding: 0;
}
.infoullistcoin .listdetailinfo li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid;
}
.row-fluid {
    display: flex;
    align-items: center;
}
span.no-wrap {
    font-size: 30px;
    FONT-WEIGHT: 700;
    font-weight: 700;
    line-height: 36px;
    display: inline-block;
}
span.valueofd {
    display: inline-block;
    color: #e15241!important;
    font-size: 20px;
    font-weight: bold !important;
}
.mr-md-3.tw-pl-2.md\:tw-mb-0.tw-text-xl.tw-font-bold.tw-mb-0 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    padding-left: 0;
}
div#titlefirstdiv {
    width: 50%;
}
.body-container.container-fluid {
    padding: 50px 0px;
    position: relative;
    display: block;
}
.ptm-50{
  padding: 50px 0px;
}
div#secondsectiondiv {
  
    background: #f4f4f4;
}
div#convertercoin {
    width: 50%;
}
.col-sm-12.col-7 {
    margin-right: 10px;
    width: 70%;
}
.col-3 {
    flex: 0 0 30%;
    max-width: 30%;
}

.row {
    display: flex;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 0.25rem;
}
@media (min-width: 768px){
.converter-field .input-group.calc {
    height: 66px;
}
.converter-field .currency-swap {
    transform: rotate(0deg);
}
}
@media (min-width: 1024px){
.lg\:tw-inline-block {
  display: inline-block !important;
    padding: 10px 20px;
}
.lg\:tw-border-t-0 {
    border-top-width: 0;
}
.lg\:tw-col-span-1 {
    grid-column: span 1/span 1;
}
}
.tw-grid-cols-2 {
    grid-template-columns: repeat(2,minmax(0,1fr));
}
.tw-w-full {
    width: 100%;
}
.tw-pl-0 {
    padding-left: 0;
}

.tw-py-2\.5 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
}
.tw-h-10 {
    height: 2.5rem;
}
.tw-justify-between {
    justify-content: space-between;
}
.tw-grid {
    display: grid;
}
.filter {
    color: #4a4a4a;
    font-size: .875rem;
    font-weight: 500;
}
.converter-field .input-group.calc {
    width: 300px;
    height: 55px;
}
.tw-flex {
    display: flex;
}
.converter-field .input-group.calc input {
    flex: 1 1;
}
.input-group>.custom-select:not(:first-child), .input-group>.form-control:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.input-group>.custom-select, .input-group>.form-control {
    position: relative;
    flex: 1 1;
    min-width: 0;
    margin-bottom: 0;
}
.tw-h-12 {
    height: 3rem;
}
.tw-border-none {
    border-style: none;
}
.tw-rounded-r-lg {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
}
.form-control {
    color: #4a4a4a;
    border: 1px solid #e7e7e7;
}
.selectfox.fullwithcoin {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
}
.cds-column-c1lezl4s {
    width: 100% !important;
    display: block;
}
.cxbBsu {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.converter-field .input-group.calc .calc-symbol-box {
    color: #374151;
    text-transform: uppercase;
    font-size: .875rem;
    background: #fff;
    padding: 10px 15px;
    border-right: 1px solid #e5e7eb;
    width: 74px;
    font-weight: 500;
}
.tw-h-12 {
    height: 3rem;
}
.tw-hidden {
    display: none;
}
.p-0 {
    padding: 0!important;
}
.m-0 {
    margin: 0!important;
}
.flex-wrap {
    flex-wrap: wrap!important;
}
#ropcoinlostpop{
  z-index: 9999;
    position: absolute;
    transform: translate3d(0px, 48px, 0px);
    top: 0px;
    left: 0px;
    will-change: transform;
}
#ropcoinlostpop li {
    display: block;
    padding: 0;
    clear: both;
    font-weight: 400;
    white-space: nowrap;
}
.dropdown-menu li a, .dropdown-menu li div.dropdown-option {
    font-size: .8rem;
    color: #4a4a4a;
    line-height: 22px;
    display: block;
    padding: 10px 20px;
    text-decoration: none;
}

.text-center {
    text-align: center!important;
}
div#conversion-calculator {
    position: relative;
}
div#imgloading img {
    width: 100px;
    height: 100px;
}
input#converterto_amount::-webkit-outer-spin-button, input#converterto_amount::-webkit-inner-spin-button ,input#converterfrom_amount::-webkit-outer-spin-button, input#converterfrom_amount::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
  <?php get_footer(); ?>
  <link href="<?=get_stylesheet_directory_uri()?>/library/bootstrap-5/bootstrap.min.css" rel="stylesheet" />
        <script src="<?=get_stylesheet_directory_uri()?>/library/bootstrap-5/bootstrap.bundle.min.js"></script>
        <script src="<?=get_stylesheet_directory_uri()?>/library/dselect.js"></script>
        <script src="<?=get_stylesheet_directory_uri()?>/converter_chart.js"></script>
       
        <script>

    // var select_box_element = document.querySelector('#fromsymbolicon');
    // dselect(select_box_element, { search: true });

    // var tosymbolicon = document.querySelector('#tosymbolicon');
    // dselect(tosymbolicon, { search: true });

    // var cointofromicon = document.querySelector('#cointofromicon');
    // dselect(cointofromicon, { search: true });

    // var coinrevertfrom = document.querySelector('#coinrevertfrom');
    // dselect(coinrevertfrom, { search: true });

    

</script>
  <script>
    jQuery(document).ready(function(){
       

      jQuery('#imgloading').hide();
      jQuery('div#cointofromdroup').hide();
      jQuery('div#coinfromtodroupdiv').hide();
      var from_bitcoin_id = jQuery('#from_bitcoin_id').val();
      var convert_to_coint_id = jQuery('#convert_to_coint_id').val();
      var toamount=1;

    
      jQuery('#fromsymbolicon').val( jQuery('#from_bitcoin_id').val().toUpperCase());
      jQuery('#tosymbolicon').val(jQuery('#convert_to_coint_id').val().toUpperCase());
      var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
      var str =  '&from=' + from_bitcoin_id +  '&to=' + convert_to_coint_id +  '&amount=' + toamount + '&action=okxbitcoinconvert';
      jQuery.ajax({
                            type: "POST",
                            url: ajaxUrl,
                            data: str,
                            beforeSend: function() {
                              jQuery('#imgloading').show();
                            },
                            success: function(data){
                                var data = jQuery.parseJSON(data);
                                jQuery("#converterfrom_amount").val(1);
                                jQuery("#converterto_amount").val(data);
                                jQuery('#imgloading').hide();
                              
                            },
                            error : function(jqXHR, textStatus, errorThrown) {
                            },
                            complete: function() {
                              jQuery('#imgloading').hide();
                            }
       });

       jQuery("#fromsymbolicon").change(function(){
         
          var convert_to_coint_id = jQuery('#tosymbolicon').val();
          var from_bitcoin_id = jQuery('#fromsymbolicon').val();
          var toamount=  jQuery("#converterfrom_amount").val();

          var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
          var str =  '&from=' + from_bitcoin_id +  '&to=' + convert_to_coint_id +  '&amount=' + toamount + '&action=okxbitcoinconvert';
          
          jQuery.ajax({
                            type: "POST",
                            url: ajaxUrl,
                            data: str,
                            beforeSend: function() {
                              jQuery('#imgloading').show();
                            },
                            success: function(data){
                                var data = jQuery.parseJSON(data);
                                jQuery("#converterfrom_amount").val(toamount);
                                jQuery("#converterto_amount").val(data);
                            },
                            error : function(jqXHR, textStatus, errorThrown) {
                            },
                            complete: function() {
                              jQuery('#imgloading').hide();
                            }
                        });
         });
        jQuery("#tosymbolicon").change(function(){
          var toamount=  jQuery("#converterfrom_amount").val();
          var convert_to_coint_id = jQuery('#tosymbolicon').val();
          var from_bitcoin_id = jQuery('#fromsymbolicon').val();

          var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
          var str =  '&from=' + from_bitcoin_id +  '&to=' + convert_to_coint_id +  '&amount=' + toamount + '&action=okxbitcoinconvert';

          jQuery.ajax({
                            type: "POST",
                            url: ajaxUrl,
                            data: str,
                            beforeSend: function() {
                              jQuery('#imgloading').show();
                            },
                            success: function(data){
                                var data = jQuery.parseJSON(data);
                                jQuery("#converterfrom_amount").val(toamount);
                                jQuery("#converterto_amount").val(data);
                            },
                            error : function(jqXHR, textStatus, errorThrown) {
                            },
                            complete: function() {
                              jQuery('#imgloading').hide();
                            }
                            
          });

        });


        jQuery("#converterfrom_amount").keyup(function(){
         
         var convert_to_coint_id = jQuery('#tosymbolicon').val();
         var from_bitcoin_id = jQuery('#fromsymbolicon').val();
         var toamount=  jQuery("#converterfrom_amount").val();

         var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
         var str =  '&from=' + from_bitcoin_id +  '&to=' + convert_to_coint_id +  '&amount=' + toamount + '&action=okxbitcoinconvert';
         
         jQuery.ajax({
                           type: "POST",
                           url: ajaxUrl,
                           data: str,
                           beforeSend: function() {
                             jQuery('#imgloading').show();
                           },
                           success: function(data){
                               var data = jQuery.parseJSON(data);
                               jQuery("#converterfrom_amount").val(toamount);
                               jQuery("#converterto_amount").val(data);
                           },
                           error : function(jqXHR, textStatus, errorThrown) {
                           },
                           complete: function() {
                             jQuery('#imgloading').hide();
                           }
                       });
        });

        jQuery("#converterto_amount").keyup(function(){
          var toamount=  jQuery("#converterto_amount").val();
          var convert_to_coint_id = jQuery('#tosymbolicon').val();
          var from_bitcoin_id = jQuery('#fromsymbolicon').val();

          var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
          var str =  '&from=' + from_bitcoin_id +  '&to=' + convert_to_coint_id +  '&amount=' + toamount + '&action=okxbitcoinconvert';

          jQuery.ajax({  type: "POST",
                            url: ajaxUrl,
                            data: str,
                            beforeSend: function() {
                              jQuery('#imgloading').show();
                            },
                            success: function(data){
                                var data = jQuery.parseJSON(data);
                                jQuery("#converterfrom_amount").val(data);
                                jQuery("#converterto_amount").val(toamount);
                            },
                            error : function(jqXHR, textStatus, errorThrown) {
                            },
                            complete: function() {
                              jQuery('#imgloading').hide();
                            }
                            
          });

        });

        jQuery("#swapconvertation").click(function(){
          var convert_to_coint_id = jQuery('#tosymbolicon').val();
          var from_bitcoin_id = jQuery('#fromsymbolicon').val();

          var converterto_amount = jQuery('#converterto_amount').val();
          var converterfrom_amount = jQuery('#converterfrom_amount').val();


         // jQuery('#converterto_amount').val(jQuery('#converterfrom_amount').val());
        //  jQuery('#converterfrom_amount').val(jQuery('#converterto_amount').val());


          jQuery('#fromsymbolicon').val(convert_to_coint_id);
          jQuery('#tosymbolicon').val(from_bitcoin_id);


          // if ( jQuery('#cointofromdroup').css('display') == 'none' || jQuery('#cointofromdroup').css("visibility") == "hidden"){

          //   jQuery('div#cointofromdroup').show();  
          //   jQuery('div#coinfromdroup1').hide();  
           
          //   jQuery('#cointofromicon').val(jQuery('#tosymbolicon').val());
           
          // }
          // else {
          //   jQuery('div#cointofromdroup').hide();
          //   jQuery('div#coinfromdroup1').show();  

          //   jQuery('#fromsymbolicon').val(jQuery('#coinrevertfrom').val());
          
          
           
          // }

          // if ( jQuery('#coinfromtodroupdiv').css('display') == 'none' || jQuery('#coinfromtodroupdiv').css("visibility") == "hidden"){
          //     jQuery('div#coinfromtodroupdiv').show();  
          //     jQuery('div#cointodroupdiv').hide();  

          //   jQuery('#coinrevertfrom').val( jQuery('#fromsymbolicon').val());
           
             
          // }
          // else {
          //   jQuery('div#coinfromtodroupdiv').hide();
          //   jQuery('div#cointodroupdiv').show();  

          //   jQuery('#tosymbolicon').val( jQuery('#cointofromicon').val());

          // }

         
          var ajaxUrl = "<?php echo admin_url('admin-ajax.php')?>";
          var str =  '&from=' + convert_to_coint_id +  '&to=' + from_bitcoin_id +  '&amount=' + converterfrom_amount + '&action=okxbitcoinconvert';

          jQuery.ajax({  type: "POST",
                            url: ajaxUrl,
                            data: str,
                            beforeSend: function() {
                              jQuery('#imgloading').show();
                            },
                            success: function(data){
                                var data = jQuery.parseJSON(data);
                                jQuery("#converterfrom_amount").val(converterfrom_amount);
                                jQuery("#converterto_amount").val(data);


                              

                            },
                            error : function(jqXHR, textStatus, errorThrown) {
                            },
                            complete: function() {
                              jQuery('#imgloading').hide();
                            }
                            
          });

          



         

           
        });

   



        
    });

  </script>