<?php

/**
* Template Name:Convert Html Page
*
* @package WordPress
* @subpackage Twenty_Fourteen
* @since Twenty Fourteen 1.0
*/

    get_header();
?>

<style type="text/css">
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
    width: 15px !important;
    min-width: 15px !important;
    height: 15px !important;
    background-size: contain !important;
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
    font-family: "HarmonyOS Sans", Sans-serif;
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
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    }
    .btn.btn-secondary:focus {
    box-shadow: none;
    outline: none;
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

</style>

   <!-- Main-wrapper Start -->
   <div class="main-wrapper">
        <!-- Banner start -->
        <section class="banner section-gap">
            <div class="container">
                <img src="<?=get_stylesheet_directory_uri()?>/assets/images/banner-img.svg" class="banner-img" alt="">
               <div class="banner-inner">
                    <div class="row">
                        <div class="col-lg-12">
                        <div class="heading">
                            <h1>Convert Litecoin to Bitcoin</h1>
                        </div>
                        <div class="bitcoin-box d-flex align-items-center">
                            <div class="box1 d-flex ">
                                <input type="text" class="user-input">
                                <div class="dropdown sik-dropdown" id="sik-select">
                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                          <input type="search" id="gsearch" name="gsearch">
                                        <li>
                                            <span class="dropdown-item" data-value="btc">
                                                <img class="crypto-icon"
                                                    src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/btc.svg"
                                                    alt="btc" />
                                                Bitcoin
                                            </span>
                                        </li>
                                        <li>
                                            <span class="dropdown-item" data-value="eth">
                                                <img class="crypto-icon"
                                                    src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/eth.svg"
                                                    alt="eth" />
                                                Etherium
                                            </span>
                                        </li>
                                        <li>
                                            <span class="dropdown-item" data-value="trx">
                                                <img class="crypto-icon"
                                                    src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/trx.svg"
                                                    alt="trx" />
                                                Tron
                                            </span>
                                        </li>
                                        <li>
                                            <span class="dropdown-item" data-value="usdt">
                                                <img class="crypto-icon"
                                                    src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/usdt.svg"
                                                    alt="usdt" />
                                                Tether
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="swiper-arrow">
                                <a href="javascript:void(0)">
                                    <img src="<?=get_stylesheet_directory_uri()?>/assets/images/swipe-arrow.svg" alt="">
                                </a>
                            </div>
                            <div class="box1 box2 d-flex ">
                                <input type="text" class="user-input">
                                <div class="dropdown sik-dropdown" id="sik-select">
                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Select
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                          <input type="search" id="gsearch" name="gsearch">
                                        <li>
                                            <span class="dropdown-item" data-value="btc">
                                                <img class="crypto-icon"
                                                    src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/btc.svg"
                                                    alt="btc" />
                                                Bitcoin
                                            </span>
                                        </li>
                                        <li>
                                            <span class="dropdown-item" data-value="eth">
                                                <img class="crypto-icon"
                                                    src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/eth.svg"
                                                    alt="eth" />
                                                Etherium
                                            </span>
                                        </li>
                                        <li>
                                            <span class="dropdown-item" data-value="trx">
                                                <img class="crypto-icon"
                                                    src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/trx.svg"
                                                    alt="trx" />
                                                Tron
                                            </span>
                                        </li>
                                        <li>
                                            <span class="dropdown-item" data-value="usdt">
                                                <img class="crypto-icon"
                                                    src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/usdt.svg"
                                                    alt="usdt" />
                                                Tether
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="heading">
                            <h3>Convert LTC to BTC</h3>
                            <p>LTC to BTC rate today is $19993.4 and has decreased -1.67319% from $20,127.52 since
                                yesterday. LTC is on a downward monthly trajectory as it has decreased -38.2% from
                                $31,740.94 since 1 month (30 days) ago.</p>
                        </div>
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
                                <h2>Buy crypto in a few steps</h2>
                                <p>Habitant dolor rhoncus duis augue adipiscing quis ultricies aliquam. Feugiat
                                    vulputate etiam quam malesuada eget.</p>
                                <ul class="crypto-icon">
                                    <li><a href="javascript:void(0)"><img src="<?=get_stylesheet_directory_uri()?>/assets/images/visa-1.svg" alt=""></a>
                                    </li>
                                    <li><a href="javascript:void(0)"><img src="<?=get_stylesheet_directory_uri()?>/assets/images/visa-2.svg" alt=""></a>
                                    </li>
                                    <li><a href="javascript:void(0)"><img src="<?=get_stylesheet_directory_uri()?>/assets/images/visa-3.svg" alt=""></a>
                                    </li>
                                    <li><a href="javascript:void(0)"><img src="<?=get_stylesheet_directory_uri()?>/assets/images/visa-4.svg" alt=""></a>
                                    </li>
                                    <li><a href="javascript:void(0)">107+</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="buy-crypto-right">
                            <div class="button-box">
                                <a href="javascript:void(0)" class="my-button btn-1">Buy LTC</a>
                                <a href="javascript:void(0)" class="my-button btn-2">Buy BTC</a>
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
                                    <img src="<?=get_stylesheet_directory_uri()?>/assets/images/chart-1.png" alt="">
                                </div>
                            </div>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab">
                                    <div class="imgbox">
                                        <img src="<?=get_stylesheet_directory_uri()?>/assets/images/map.png" alt="">
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab">
                                    <div class="imgbox">
                                        <img src="<?=get_stylesheet_directory_uri()?>/assets/images/map.png" alt="">
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                                    aria-labelledby="pills-contact-tab">
                                    <div class="imgbox">
                                        <img src="<?=get_stylesheet_directory_uri()?>/assets/images/map.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-5 col-xxl-4">
                        <div class="chart-right">
                            <div class="row align-items-center p-0">
                                <div class="col-6">
                                    <div class="detail d-flex">
                                        <div class="icon">
                                            <img src="<?=get_stylesheet_directory_uri()?>/assets/images/bitcoin.svg" alt="">
                                        </div>
                                        <div class="text">
                                            <p>LTC</p>
                                            <h5>$ 19993.4 </h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="button-box d-flex justify-content-center align-items-center">
                                        <img src="<?=get_stylesheet_directory_uri()?>/assets/images/btn-arrow.svg" alt="">
                                        <p>2.28 %</p>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <ul>
                                        <h3>BTC Price Statistics</h3>
                                        <li>
                                            <div class="box1">
                                                <span>Bitcoin Price</span>
                                            </div>
                                            <div class="box2">
                                                <span>$20,482.20</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box1">
                                                <span>Price Change</span>
                                            </div>
                                            <div class="box2">
                                                <span>$246.55</span>
                                                <p class="green">1.22</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box1">
                                                <span>24h Low / 24h High</span>
                                            </div>
                                            <div class="box2">
                                                <span>$19,983.81 / <br> $20,595.53</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box1">
                                                <span>Trading Volume</span>
                                            </div>
                                            <div class="box2">
                                                <span>$22,084,242,047.87</span>
                                                <p class="red">23.45%</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box1">
                                                <span>Volume / Market Cap</span>
                                            </div>
                                            <div class="box2">
                                                <span>0.05649</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box1">
                                                <span>Market Dominance</span>
                                            </div>
                                            <div class="box2">
                                                <span>42.37%</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box1">
                                                <span>Market Rank</span>
                                            </div>
                                            <div class="box2">
                                                <span>#1</span>
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
                <div class="row">
                    <div class="col-lg-12">
                        <div class="heading">
                            <h3>Content block with dynamic content</h3>
                            <p>Vestibulum mauris lectus ornare auctor nunc, sit at eget. Sit consectetur amet et quis nibh nulla
                                imperdiet pharetra. Tortor dui ac eget odio. Massa et amet, viverra non convallis libero.
                                Pretium ut ornare etiam mollis adipiscing dui egestas id diam. Turpis id condimentum in velit
                                ante eros. Senectus lacus pellentesque in ultricies in. <br><br>

                                Vestibulum mauris lectus ornare auctor nunc, sit at eget. Sit consectetur amet et quis nibh
                                nulla imperdiet pharetra. Tortor dui ac eget odio. Massa et amet, viverra non convallis libero.
                                Pretium ut ornare etiam mollis adipiscing dui egestas id diam. Turpis id condimentum in velit
                                ante eros. Senectus lacus pellentesque in ultricies in.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Content-block End -->
        <!-- Price-history Strat -->
        <section class="price-history section-gap pt-0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="heading">
                                        <h3>7-day price history of Litecoin (BTC) to Litecoin (LTC)</h3>
                                        <p>Compare the price & changes of Bitcoin in USD for the week.</p>
                                    </div>
                                    <div class="main-table">
                                        <table class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Day of the week</th>
                                                    <th>1 BTC to USD</th>
                                                    <th>24hr Changes</th>
                                                    <th>Change %</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>July 07, 2022</td>
                                                    <td>Thursday</td>
                                                    <td>$20,544</td>
                                                    <td class="green">$388.39</td>
                                                    <td class="green">1.9%</td>
                                                </tr>
                                                <tr class="active-row">
                                                    <td>July 06, 2022</td>
                                                    <td>Wednesday</td>
                                                    <td>$20,189</td>
                                                    <td class="red">-$68.23</td>
                                                    <td class="red">-0.3%</td>
                                                </tr>
                                                <tr>
                                                    <td>July 05, 2022</td>
                                                    <td>Tuesday</td>
                                                    <td>$20,257</td>
                                                    <td class="green">$946.78</td>
                                                    <td class="green">4.9%</td>
                                                </tr>
                                                <tr>
                                                    <td>July 04, 2022</td>
                                                    <td>Monday</td>
                                                    <td>$19,310.23</td>
                                                    <td class="green">$42.01</td>
                                                    <td class="green">0.2%</td>
                                                </tr>
                                                <tr>
                                                    <td>July 03, 2022</td>
                                                    <td>Sunday</td>
                                                    <td>$19,268.23</td>
                                                    <td class="red">-$139.22</td>
                                                    <td class="red">-0.7%</td>
                                                </tr>
                                                <tr>
                                                    <td>July 02, 2022</td>
                                                    <td>Saturday</td>
                                                    <td>$19,407.45</td>
                                                    <td class="red">-$200.95</td>
                                                    <td class="red">-1.0%</td>
                                                </tr>
                                                <tr>
                                                    <td>July 01, 2022</td>
                                                    <td>Friday</td>
                                                    <td>$19,608.40</td>
                                                    <td class="red">-$500.13</td>
                                                    <td class="red">-2.5%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                    </div>
                </div>

            </div>
        </section>
        <!-- Price-history End -->
        <!-- Feature Start -->
        <section class="feature">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="heading text-center">
                        <h3>Why buy Litecoin with OKX?</h3>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="feature-box text-center">
                            <img src="<?=get_stylesheet_directory_uri()?>/assets/images/feature-1.svg" alt="">
                            <h5>Simple</h5>
                            <p>OKX makes it easy to buy Tether with a user-friendly interface</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="feature-box text-center">
                            <img src="<?=get_stylesheet_directory_uri()?>/assets/images/feature-2.svg" alt="">
                            <h5>Flexible</h5>
                            <p>OKX offers a variety of payment methods and supports numerous local currencies to help
                                users buy Tether</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="feature-box text-center mb-0">
                            <img src="<?=get_stylesheet_directory_uri()?>/assets/images/feature-3.svg" alt="">
                            <h5>Fast</h5>
                            <p>OKX users can instantly buy Tether with credit card and have it deposited in their
                                account in minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Feature End -->
        <!-- About-us Start -->
        <section class="about-us section-gap">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8">
                        <div class="about-left">
                            <div class="heading">
                                <h3>Content block with dynamic content</h3>
                                <p>Vestibulum mauris lectus ornare auctor nunc, sit at eget. Sit consectetur amet et
                                    quis nibh nulla imperdiet pharetra. Tortor dui ac eget odio. Massa et amet, viverra
                                    non convallis libero. Pretium ut ornare etiam mollis adipiscing dui egestas id diam.
                                    Turpis id condimentum in velit ante eros. Senectus lacus pellentesque in ultricies
                                    in.<br><br>

                                    Vestibulum mauris lectus ornare auctor nunc, sit at eget. Sit consectetur amet et
                                    quis nibh nulla imperdiet pharetra. Tortor dui ac eget odio. Massa et amet, viverra
                                    non convallis libero. Pretium ut ornare etiam mollis adipiscing dui egestas id diam.
                                    Turpis id condimentum in velit ante eros. Senectus lacus pellentesque in ultricies
                                    in.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-right text-center lh-0">
                            <img src="<?=get_stylesheet_directory_uri()?>/assets/images/about-right.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About-us End -->
        <!-- Convert Start -->
        <section class="convert">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="convert-left text-center">
                            <div class="heading">
                                <h3>Convert Bitcoin (LTC) to BTC</h3>
                            </div>
                            <table class="table text-center">
                                <thead>
                                    <tr>
                                        <th>BTC</th>
                                        <th>USD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0.01</td>
                                        <td>205.44</td>
                                    </tr>
                                    <tr>
                                        <td>0.1</td>
                                        <td>2054.36</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>20544</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>41087</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>102718</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>205436</td>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>410872</td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>1027181</td>
                                    </tr>
                                    <tr>
                                        <td>100</td>
                                        <td>2054361</td>
                                    </tr>
                                    <tr>
                                        <td>1000</td>
                                        <td>20543612</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="convert-left mb-0 text-center">
                            <div class="heading">
                                <h3>Convert Bitcoin (LTC) to BTC</h3>
                            </div>
                            <table class="table text-center">
                                <thead>
                                    <tr>
                                        <th>USD</th>
                                        <th>BTC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0.01</td>
                                        <td>0.000000486769</td>
                                    </tr>
                                    <tr>
                                        <td>0.1</td>
                                        <td>0.00000487</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>0.00004868</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>0.00009735</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>0.00024338</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>0.00048677</td>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>0.00097354</td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>0.00243385</td>
                                    </tr>
                                    <tr>
                                        <td>100</td>
                                        <td>0.00486769</td>
                                    </tr>
                                    <tr>
                                        <td>1000</td>
                                        <td>0.04867693</td>
                                    </tr>
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
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        What is Tether (USDT)?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Aperiam aliquid tenetur soluta, error libero exercitationem eius eos magnam,
                                        numquam sapiente quibusdam. Asperiores, cum. Eius sit reprehenderit nisi quia?
                                        Doloremque, praesentium.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        How does Tether work?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Illo, dolor quas eveniet voluptatibus ipsum suscipit similique repellendus
                                        asperiores quasi ea odit veniam, veritatis soluta placeat provident dolores
                                        doloribus laborum atque.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Where can I buy USDT?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit. Necessitatibus illum dolores totam, quo, dicta, voluptate alias amet
                                        pariatur culpa velit quasi deserunt quaerat porro. Pariatur temporibus impedit
                                        repudiandae. Magnam, incidunt!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Faq End -->
        <!-- Okx-details Start -->
        <section class="okx-details section-gap pt-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-4 col-sm-6 col-11">
                        <div class="okx-details-box">
                            <div class="imgbox">
                                <img src="<?=get_stylesheet_directory_uri()?>/assets/images/okx-1.png" alt="">
                            </div>
                            <div class="heading">
                                <h5>OKX Academy</h5>
                                <h3>How to create and manage your OKX Wallet</h3>
                                <p>Financial markets rally last week, giving crypto a rare positive week amidst the bear
                                    market. Meanwhile, crypto lending firms seek bailout to survive.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-11">
                        <div class="okx-details-box">
                            <div class="imgbox">
                                <img src="<?=get_stylesheet_directory_uri()?>/assets/images/okx-2.png" alt="">
                            </div>
                            <div class="heading">
                                <h5>News of the Week</h5>
                                <h3>TRX jumps with algo-stablecoin launch</h3>
                                <p>Collective Western fiscal tightening measures sent the crypto market into a downward
                                    spiral over the weekend, falling past previous cycle's ATHs.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-11">
                        <div class="okx-details-box okx-details-box-3 mb-0">
                            <div class="imgbox">
                                <img src="<?=get_stylesheet_directory_uri()?>/assets/images/okx-3.png" alt="">
                            </div>
                            <div class="heading">
                                <h5>OKX Insights</h5>
                                <h3>Institutional adoption sparks excitement as new launches DeFi</h3>
                                <p>Markets plunge on surging inflation, with ETH in particular badly hit. Due to extreme
                                    market conditions, Celsius pauses withdrawals sending stETH tumbling.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Okx-details End -->
        <!-- Qrcode Start -->
        <section class="qrcode">
            <div class="line-box">
            </div>
          <!--   <img src="<?=get_stylesheet_directory_uri()?>/assets/images/lines.svg" class="lines" alt=""> -->
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-1">
                    </div>
                    <div class="col-md-5 col-xl-4">
                        <div class="qrcode-left">
                            <div class="heading">
                                <h3>Trade or buy xxx on the go</h3>
                                <h5>Get the best mobile app to exchange or buy crypto on the go.</h5>
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <img src="<?=get_stylesheet_directory_uri()?>/assets/images/right.svg" alt="">
                                        </div>
                                        <p>Sell and but bitcoin, eth, xrp, okb and other crypto with </p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <img src="<?=get_stylesheet_directory_uri()?>/assets/images/right.svg" alt="">
                                        </div>
                                        <p>Sell and but bitcoin, eth, xrp, okb and other crypto with ease </p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <img src="<?=get_stylesheet_directory_uri()?>/assets/images/right.svg" alt="">
                                        </div>
                                        <p>Sell and but bitcoin, eth, xrp, okb and other </p>
                                    </li>
                                </ul>
                            </div>
                            <div class="btn-box">
                                <a href="javascript:void(0)" class="google-play"> <img
                                        src="<?=get_stylesheet_directory_uri()?>/assets/images/google-play.svg" alt=""> </a>
                                <a href="javascript:void(0)" class="app-store"> <img src="<?=get_stylesheet_directory_uri()?>/assets/images/app-store.svg"
                                        alt=""> </a>

                                <div class="scanner">

                                    <img src="<?=get_stylesheet_directory_uri()?>/assets/images/scanner.svg" class="code-img" alt="">
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
                                <a href="javascript:void(0)">
                                    <p>OKX API Documentation</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="qacode-right text-end lh-0">
                            <img src="<?=get_stylesheet_directory_uri()?>/assets/images/phone.svg" alt="">
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
    </div>
    <!-- Main-wrapper End -->
<?php 

get_footer();

?>
   <link rel="stylesheet" href="<?=get_stylesheet_directory_uri()?>/assets/vendor/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="<?=get_stylesheet_directory_uri()?>/assets/css/app.css" />
   <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Roboto&display=swap" rel="stylesheet">
<script src="<?=get_stylesheet_directory_uri()?>/assets/vendor/js/bootstrap.bundle.min.js"></script>
<script src="<?=get_stylesheet_directory_uri()?>/assets/vendor/js/jquery-3.6.0.js"></script>
<script src="<?=get_stylesheet_directory_uri()?>/assets/js/custom.js"></script>
<script type="text/javascript">
class SikDropdown {
    ele = null;
    dropdown = null;
    el = {
        input: null,
        toggle: null,
        list: null
    };

    items = {};
    count = 0;
    _cbs = [];
    defaults = {
        name: "sik-input",
        value: "",
        placeholder: "Select Item"
    };
    options = {};
    constructor(identifier, opt = {}) {
        this.ele = document.querySelector(identifier);
        if (this.ele) {
            //Set options:
            this.setOptions(opt);
            //Create hidden input:
            this.el.input = document.createElement("input");
            this.el.input.setAttribute("type", "hidden");
            this.el.input.setAttribute("name", this.options.name);
            this.el.input.setAttribute("value", "");
            this.ele.prepend(this.el.input);

            //Select list:
            this.el.list = this.ele.querySelector(".dropdown-menu");
            this._fillItems();
            //Set toggler:
            this.el.toggle = this.ele.querySelector(".dropdown-toggle");
            this.dropdown = new bootstrap.Dropdown(this.el.toggle);
            //Set initial value & placeholder:
            this.setValue(this.options.value);
            //Set core handlers:
            this._attachCoreHandlers();
            this.trigger("init");
        } else {
            console.warn("Cant create a Sik Dropdown - selector is invalid");
        }
    }
    setOptions(opt) {
        this._extend(this.options, this.defaults, opt);
    }
    addItem(value, label) {
        if (!this.items.hasOwnProperty(value)) {
            let itemContainer = document.createElement('li');
            itemContainer.innerHTML = `<span class="dropdown-item" data-value="${value}">${label}</span>`;
            this.el.list.appendChild(itemContainer);
            let item = itemContainer.querySelector(".dropdown-item");
            this.count++;
            this.items[value] = {
                el: item,
                value: value,
                label: item.innerHTML.trim()
            };
            item.addEventListener("click", this.trigger.bind(this, "select"));
        }
    }
    removeItem(value) {
        if (this.items.hasOwnProperty(value)) {
            this.items[value].el.closest("li").remove();
            this.count--;
            delete this.items[value];
            if (this.value() === value) {
                this.setValue(null);
            }
        }
    }
    setValue(value, close = true) {
        if (this.items.hasOwnProperty(value)) {
            this.el.input.setAttribute("value", value);
            this.el.toggle.innerHTML = this.items[value].label;
        } else {
            this.el.input.setAttribute("value", "");
            if (this.options.placeholder) {
                this.el.toggle.innerHTML = this.options.placeholder;
            }
        }
        if (close) this.dropdown.hide();
    }
    value() {
        return this.el.input ? this.el.input.value : null;
    }
    text() {
        let value = this.value();
        if (this.items.hasOwnProperty(value)) {
            return this.items[value].label.trim();
        }
        return "";
    }
    open() {
        if (this.dropdown) {
            this.dropdown.show();
        }
    }
    close() {
        if (this.dropdown) {
            this.dropdown.hide();
        }
    }
    toggle() {
        if (this.dropdown) {
            this.dropdown.toggle();
        }
    }
    attachHandler(ev, cb) {
        this._cbs.push({
            ev: ev,
            fn: cb
        });
    }
    detachHandler(ev) {
        for (let i = 0; i < this._cbs.length; i++) {
            if (this._cbs[i].ev === ev) {
                this._cbs.splice(i, 1);
            }
        }
    }
    trigger(ev) {
        //console.log(this, ev, el);
        for (let cb of this._cbs) {
            let event = cb.ev.split(".");
            if (event.length > 1 && event[1] === ev) {
                let [, ...args] = arguments;
                cb.fn.call(this, ...args);
            }
        }
    }
    _fillItems() {
        if (this.el.list) {
            let items = this.el.list.querySelectorAll(".dropdown-item");
            let i = items.length;
            this.count = items.length;
            while (i--) {
                const value = items[i].getAttribute("data-value");
                this.items[value] = {
                    el: items[i],
                    value: value,
                    label: items[i].innerHTML.trim()
                };
                items[i].addEventListener("click", this.trigger.bind(this, "select"));
            }
        }
        console.log(this.items);
    }
    _attachCoreHandlers() {
        this.attachHandler("core.select", function (item = null) {
            if (typeof item === 'object' && 'target' in item) {
                let selected = item.target.hasAttribute("data-value") ?
                    item.target :
                    item.target.closest("[data-value]");
                let value = selected ? selected.getAttribute("data-value") : null;
                this.setValue(value);
            }
        });
        this.attachHandler("core.open", function () {
            console.log("open", arguments);
        });
        this.attachHandler("core.close", function () {
            console.log("close", arguments);
        });
        this.attachHandler("core.init", function () {});
        //Bind to dropdown:
        this.el.toggle.addEventListener('show.bs.dropdown', this.trigger.bind(this, "open"));
        this.el.toggle.addEventListener('hide.bs.dropdown', this.trigger.bind(this, "close"));
    }
    _extend() {
        for (var i = 1; i < arguments.length; i++)
            for (var key in arguments[i])
                if (arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    }
}

//This how we intiate it and extend the bs funcionality:
var dropdown = new SikDropdown("#sik-select", {
    name: "select-example", // the input field name
    placeholder: "Select",
    value: null
});

//adding a callback just for demo:
dropdown.attachHandler("myhandler.select", function () {
    console.log("select", this);
    let tag = document.getElementById("selected-example");
    tag.innerText = this.value();
});
</script>

