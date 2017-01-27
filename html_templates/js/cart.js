/**
 * cart.js
 */


function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}

jQuery(document).ready(function($) {
    // attach this event to the window object
    // only if it is not a touch device
    if ( !isTouchDevice() ) {
        // header is 185px tall
        // #cart-top is 107px;
        // total is 292
        // var top =  185 + 107;
        var top = 292;
        top = $('#cart-top').height() +
            parseFloat( $('#cart-top').css('padding-top') ) +
            parseFloat( $('#cart-top').css('padding-bottom') ) +
            $('header').height();

        var aside = $('aside#summary');

        $(window).scroll(function () {

            if ($(this).scrollTop() > top) {
                aside.addClass('sticky');
            } else {
                aside.removeClass('sticky');
            }
        });
    }
});