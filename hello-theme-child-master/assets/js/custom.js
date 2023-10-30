//menu fixed on scroll
$(document).ready(function () {
    headerFixed();
});
$(document).on('scroll', function () {
    headerFixed();
});

//menu fixed on scroll
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height >= 20) {
        $('header').addClass('fixed-menu');
    } else {
        $('header').removeClass('fixed-menu');
    }
});
// close hamburger menu after click a
$('.navbar-nav li a').on("click", function () {
    $('#mobile-button').click();
});
$(window).bind("resize", function () {
    // console.log($(this).width())
    if ($(this).width() >= 1200) {
        $(".navbar-toggler").removeAttr("id");
    } else {
        $('.navbar-toggler').attr('id', 'mobile-button');
    }
}).trigger('resize');