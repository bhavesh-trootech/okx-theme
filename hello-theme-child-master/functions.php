<?php
ini_set('memory_limit', '-1');
include('custom.php');
/**
 * Theme functions and definitions
 *
 * @package HelloElementorChild
 */

/**
 * Load child theme css and optional scripts
 *
 * @return void
 */
function hello_elementor_child_enqueue_scripts() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
	wp_enqueue_style(
		'hello-elementor-child-style',
		get_stylesheet_directory_uri() . '/style.css',
		[
			'hello-elementor-theme-style',
		],
		'1.0.0'
	);
//enqueue stylesheet
wp_enqueue_style( 'icofont3css', get_stylesheet_directory_uri() . '/icofont-3.css' ); 

  
}
add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 20 );

// ********** Allow SVG **************
add_filter( 'wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {

//   global $wp_version;
//   if ( $wp_version !== '4.7.1' ) {
//      return $data;
//   }

  $filetype = wp_check_filetype( $filename, $mimes );

  return [
      'ext'             => $filetype['ext'],
      'type'            => $filetype['type'],
      'proper_filename' => $data['proper_filename']
  ];

}, 10, 4 );

function cc_mime_types( $mimes ){
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );

function fix_svg() {
  echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}
add_action( 'admin_head', 'fix_svg' );

// ********** End Allow SVG **************

add_action('wp_footer','footerc');
function footerc(){
 ?>
<style>
#sm-16541647443304756-6 span.dashicons {
    font-family: "iconfont" !important;
    font-size: 24px;
    color: #91b1ff;
    line-height: 24px;
    -o-transition: all ease .3s;
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
}
span.dashicons.fas.fa-headset:before {
    content: "\ecaf";
}
div#subscriptiondivtext {
    margin-bottom: 0px !important;
    max-width: 350px !important;
    text-align: center;
    margin: 0 auto;
}
@media (max-width:1024px){
            #subcol {
            width: 100% !important;
            display: block !important;
        }
        #socilacol {
            width: 100% !important;
        display: none;
        }
}

@media (max-width:414px){
        .subscribedatafooter .elementor-image-box-content {
            width: 90%;
        display: inline-block;
            padding-left: 15px;
        }
}
 </style>

<script>
        jQuery(document).ready(function(){
            setTimeout(function() {

                jQuery("#hs-form-iframe-0").contents().find("#hsForm_9675a94f-6fe2-49ba-b7f2-7f03b4df2862").addClass('footer-newsletter');
                jQuery("#hs-form-iframe-0").contents().find("#hsForm_9675a94f-6fe2-49ba-b7f2-7f03b4df2862 .hs_email").addClass('emailblock');
                jQuery("#hs-form-iframe-0").contents().find("#hsForm_9675a94f-6fe2-49ba-b7f2-7f03b4df2862 [type=submit]").addClass('ctabtnid');

                jQuery("#hs-form-iframe-1").contents().find("#hsForm_9675a94f-6fe2-49ba-b7f2-7f03b4df2862").addClass('footer-newsletter');
                jQuery("#hs-form-iframe-1").contents().find("#hsForm_9675a94f-6fe2-49ba-b7f2-7f03b4df2862 .hs_email").addClass('emailblock');
                jQuery("#hs-form-iframe-1").contents().find("#hsForm_9675a94f-6fe2-49ba-b7f2-7f03b4df2862 [type=submit]").addClass('ctabtnid');


                jQuery("#hs-form-iframe-2").contents().find("#hsForm_9675a94f-6fe2-49ba-b7f2-7f03b4df2862").addClass('footer-newsletter');
                jQuery("#hs-form-iframe-2").contents().find("#hsForm_9675a94f-6fe2-49ba-b7f2-7f03b4df2862 .hs_email").addClass('emailblock');
                jQuery("#hs-form-iframe-2").contents().find("#hsForm_9675a94f-6fe2-49ba-b7f2-7f03b4df2862 [type=submit]").addClass('ctabtnid');
      
                 jQuery('#hs-form-iframe-0').contents().find("head")
      .append(jQuery('<style type="text/css"> .hs-input[type=checkbox], .hs-input[type=radio]{background: transparent !important;border: 1px solid #fff !important;appearance: none;width: 18px;height: 18px;position: relative;}.hs-input[type=checkbox]:checked:before {color: #fff;z-index: 999;font-size: 6px; content: ""; display: block;position: absolute;top: 2px; left: 5px;width: 4px;height: 8px; border: solid #fff;border-width: 0 2px 2px 0;transform: rotate(45deg);}.legal-consent-container .hs-form-booleancheckbox-display>span {display: block; margin-left: 30px;} li.hs-form-booleancheckbox a { color: #737373 !important; text-decoration: none;} .hs-form-booleancheckbox span.hs-form-required {display: none;}.actions {margin-top: 0px !important; margin-bottom: 0px !important; padding: 0px 0px !important;} .footer-newsletter {max-width: 350px !important;margin: 0 auto !important;position: relative !important;} .hs-button {font-size:13px !important;background-color:#fff !important;border-color: #fff;padding: 8px 11px;font-weight: 400;color: #000; }.hs_email { max-width: 251px !important;} .hs_submit {position: absolute;top: 0;right: 0;} .legal-consent-container{margin: 0 -23%;} input.hs-button.primary.large {font-size: 13px !important;background-color: #fff !important;border-color: #fff !important;padding: 8px 11px !important;font-weight: 400 !important;color: #000 !important; line-height: 20px;} input.hs-button.primary.large:hover{line-height: 20px;} input#email-9675a94f-6fe2-49ba-b7f2-7f03b4df2862 {line-height: normal !important; border: 1px solid hsla(0,0%,59.2%,.2) !important;background-color: transparent !important;color: #fff !important;padding: 8px 15px !important;font-size: 13px !important;border-radius: 4px !important; }.legal-consent-container .hs-form-booleancheckbox-display p {margin: 0;color: hsla(0,0%,100%,.45) !important;font-size: 11px !important;line-height: 1.7 !important;display: inline-block!important;}label.hs-error-msg {font-size: 12px !important;line-height: normal !important;display: block !important;color: red !important;}input#email-9675a94f-6fe2-49ba-b7f2-7f03b4df2862{ line-height: normal !important; }@media (max-width: 767px) {.footer-newsletter .legal-consent-container { margin: 0 !important;} }}</style>'));

      jQuery('#hs-form-iframe-1').contents().find("head")
      .append(jQuery('<style type="text/css"> .hs-input[type=checkbox], .hs-input[type=radio]{background: transparent !important;border: 1px solid #fff !important;appearance: none;width: 18px;height: 18px;position: relative;}.hs-input[type=checkbox]:checked:before {color: #fff;z-index: 999;font-size: 6px; content: ""; display: block;position: absolute;top: 2px; left: 5px;width: 4px;height: 8px; border: solid #fff;border-width: 0 2px 2px 0;transform: rotate(45deg);}.legal-consent-container .hs-form-booleancheckbox-display>span {display: block; margin-left: 30px;} li.hs-form-booleancheckbox a { color: #737373 !important; text-decoration: none;} .hs-form-booleancheckbox span.hs-form-required {display: none;}.actions {margin-top: 0px !important; margin-bottom: 0px !important; padding: 0px 0px !important;}.footer-newsletter {max-width: 350px !important;margin: 0 auto !important;position: relative !important;} .hs-button {font-size:13px !important;background-color:#fff !important;border-color: #fff;padding: 8px 11px;font-weight: 400;color: #000;}.hs_email { max-width: 251px !important;} .hs_submit {position: absolute;top: 0;right: 0;} .legal-consent-container{margin: 0 -23%;} input.hs-button.primary.large {font-size: 13px !important;background-color: #fff !important;border-color: #fff !important;padding: 8px 11px !important;font-weight: 400 !important;color: #000 !important; line-height: 20px;} input.hs-button.primary.large:hover{line-height: 20px;} input#email-9675a94f-6fe2-49ba-b7f2-7f03b4df2862 {line-height: normal !important; border: 1px solid hsla(0,0%,59.2%,.2) !important;background-color: transparent !important;color: #fff !important;padding: 8px 15px !important;font-size: 13px !important;border-radius: 4px !important;}.legal-consent-container .hs-form-booleancheckbox-display p {margin: 0;color: hsla(0,0%,100%,.45) !important;font-size: 11px !important;line-height: 1.7 !important;display: inline-block!important;}label.hs-error-msg {font-size: 12px !important;line-height: normal !important;display: block !important;color: red !important;}input#email-9675a94f-6fe2-49ba-b7f2-7f03b4df2862{ line-height: normal !important; }@media (max-width: 767px) {.footer-newsletter .legal-consent-container { margin: 0 !important;} }}</style>'));

      jQuery('#hs-form-iframe-2').contents().find("head")
      .append(jQuery('<style type="text/css"> .hs-input[type=checkbox], .hs-input[type=radio]{background: transparent !important;border: 1px solid #fff !important;appearance: none;width: 18px;height: 18px;position: relative;}.hs-input[type=checkbox]:checked:before {color: #fff;z-index: 999;font-size: 6px; content: ""; display: block;position: absolute;top: 2px; left: 5px;width: 4px;height: 8px; border: solid #fff;border-width: 0 2px 2px 0;transform: rotate(45deg);}.legal-consent-container .hs-form-booleancheckbox-display>span {display: block; margin-left: 30px;} li.hs-form-booleancheckbox a { color: #737373 !important; text-decoration: none;}  .hs-form-booleancheckbox span.hs-form-required {display: none;}.actions {margin-top: 0px !important; margin-bottom: 0px !important; padding: 0px 0px !important;}.footer-newsletter {max-width: 350px !important;margin: 0 auto !important;position: relative !important;} .hs-button {font-size:13px !important;background-color:#fff !important;border-color: #fff;padding: 8px 11px;font-weight: 400;color: #000; }.hs_email { max-width: 251px !important;} .hs_submit {position: absolute;top: 0;right: 0;} .legal-consent-container{margin: 0 -23%;} input.hs-button.primary.large {font-size: 13px !important;background-color: #fff !important;border-color: #fff !important;padding: 12px 11px !important;font-weight: 400 !important;color: #000 !important; line-height: 20px;} input.hs-button.primary.large:hover{line-height: 20px;} input#email-9675a94f-6fe2-49ba-b7f2-7f03b4df2862 {line-height: normal !important; border: 1px solid hsla(0,0%,59.2%,.2) !important;background-color: transparent !important;color: #fff !important;padding: 8px 15px !important;font-size: 13px !important;border-radius: 4px !important;}.legal-consent-container .hs-form-booleancheckbox-display p {margin: 0;color: hsla(0,0%,100%,.45) !important;font-size: 11px !important;line-height: 1.7 !important;display: inline-block!important;}label.hs-error-msg {font-size: 12px !important;line-height: normal !important;display: block !important;color: red !important;}input#email-9675a94f-6fe2-49ba-b7f2-7f03b4df2862{ line-height: normal !important; }@media (max-width: 767px) {.footer-newsletter .legal-consent-container { margin: 0 !important;} }}</style>'));



    var iframe2=  jQuery('#hs-form-iframe-2').contents().height();
    jQuery('#hs-form-iframe-2').css('min-height', '280px');
    jQuery('#hs-form-iframe-0').css('min-height', '280px');
    var iframe1=   jQuery('#hs-form-iframe-1').css('min-height', '210px');


            }, 2000);
           
        });
    </script>   
<?php
}



