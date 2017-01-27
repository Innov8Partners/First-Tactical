// (c) Copyright 2011 Caroline Schnapp. All Rights Reserved. Contact: mllegeorgesand@gmail.com
// See http://wiki.shopify.com/Linked_Options

var Shopify = Shopify || {};

Shopify.optionsMap = {};

Shopify.updateOptionsInSelector = function(selectorIndex) {

    switch (selectorIndex) {
        case 0:
            var key = 'root';
            var selector = $('.single-option-selector:eq(0)');
            break;
        case 1:
            var key = $('.single-option-selector:eq(0)').val();
            var selector = $('.single-option-selector:eq(1)');
            break;
        case 2:
            var key = $('.single-option-selector:eq(0)').val();
            key += ' / ' + $('.single-option-selector:eq(1)').val();
            var selector = $('.single-option-selector:eq(2)');
    }

    var initialValue = selector.val();
    selector.empty();
    var availableOptions = Shopify.optionsMap[key];
    for (var i=0; i<availableOptions.length; i++) {
        var option = availableOptions[i];
        var newOption = $('<option></option>').val(option).html(option);
        selector.append(newOption);
    }
    if ($.inArray(initialValue, availableOptions) !== -1) {
        selector.val(initialValue);
    }
    selector.trigger('change');

};

Shopify.linkOptionSelectors = function(product) {
    // Building our mapping object.
    for (var i=0; i<product.variants.length; i++) {
        var variant = product.variants[i];
        if (variant.available) {
            // Gathering values for the 1st drop-down.
            Shopify.optionsMap['root'] = Shopify.optionsMap['root'] || [];
            Shopify.optionsMap['root'].push(variant.option1);
            Shopify.optionsMap['root'] = Shopify.uniq(Shopify.optionsMap['root']);
            // Gathering values for the 2nd drop-down.
            if (product.options.length > 1) {
                var key = variant.option1;
                Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
                Shopify.optionsMap[key].push(variant.option2);
                Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
            }
            // Gathering values for the 3rd drop-down.
            if (product.options.length === 3) {
                var key = variant.option1 + ' / ' + variant.option2;
                Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
                Shopify.optionsMap[key].push(variant.option3);
                Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
            }
        }
    }
    // Update options right away.
    Shopify.updateOptionsInSelector(0);
    if (product.options.length > 1) Shopify.updateOptionsInSelector(1);
    if (product.options.length === 3) Shopify.updateOptionsInSelector(2);
    // When there is an update in the first dropdown.
    $(".single-option-selector:eq(0)").change(function() {
        Shopify.updateOptionsInSelector(1);
        if (product.options.length === 3) Shopify.updateOptionsInSelector(2);
        return true;
    });
    // When there is an update in the second dropdown.
    $(".single-option-selector:eq(1)").change(function() {
        if (product.options.length === 3) Shopify.updateOptionsInSelector(2);
        return true;
    });

};


$(document).ready(function() {

    /* --------------------------------------------------------------------------------
     START HEADER
     -------------------------------------------------------------------------------- */

    // start country switcher
    $('#country-switcher').click(function() {
        //$(this).toggleClass('active');
        $('.dropdown-menu').slideToggle();
    });

    $('.dropdown-menu').mouseleave(function() {
        setTimeout(function() {
            $('.dropdown').removeClass('active');
            $('.dropdown-menu').slideUp();
        }, 100);
    });
    // end country switcher

    // open and close the mobile nav
    $('.tcon-menu--xbutterfly').click(function(e) {
        e.preventDefault();
        $('#nav').toggleClass('is-open');
    });


    // login and minicart dropdowns but not the search box
    $('.login_box .anchor-btn, .cart_box .anchor-btn').click(function() {
        var $this = $(this);

        if ( $this.hasClass('active') ) {
            // close it
            $this.removeClass('active')
                .parent().find('.anchor-popup').slideUp();
            return;
        }

        var $searching = $('.anchor-btn.searching');

        if ( $searching ) {
            closeSearchBox();
        }

        // close active popups
        var $activePopup = $('.anchor-btn.active');

        if ( $activePopup ) {
            $activePopup.removeClass('active')
                .parent().find('.anchor-popup').slideUp();
        }


        $this.addClass('active')
            .parent().find('.anchor-popup').slideDown();

    });



    // search button dropdown
    $('.search_box .anchor-btn').mousedown(function(e) {
        e.stopImmediatePropagation(); // cancel the blur event
        e.preventDefault();

        // close other popups
        var $activePopup = $('.anchor-btn.active');

        if ( $activePopup ) {
            $activePopup.removeClass('active')
                .parent().find('.anchor-popup').slideUp();
        }


        // open and close the search box if not searching
        var $searchbox = $('.search_box .anchor-popup');

        if ( $searchbox.hasClass('is-open') ) {

            closeSearchBox();

        } else {

            $searchbox.animate({
                'border-width': '1px',
                'padding-left': '5px',
                width: '180px'
            }, 200).addClass('is-open');

            $searchbox.parents('.search_box').find('.anchor-btn').addClass('searching');
        }
    });


    $('.search_box .anchor-popup').blur(function() {
        closeSearchBox();
    });


    /****** Popup Login button effects *********/
    $(".login input").focus(function(){
        $(this).addClass('input_act');
    });

    $('.login input').blur( function() {
        $(this).removeClass('input_act');
    });

    var popuploginInputEmail = $(".login ul li input.email");
    var popuploginInputPassword = $(".login ul li input.pass");

    popuploginInputEmail.on("change keyup paste", function(){
        if(popuploginInputEmail.val() != "" && popuploginInputPassword.val() != "") {
            $(".login ul li >.button_box > input.login_btn").addClass("btn_active");
        }
        else{
            $(".login ul li >.button_box > input.login_btn").removeClass("btn_active");
        }
    });

    popuploginInputPassword.on("change keyup paste", function(){
        if(popuploginInputEmail.val() != "" && popuploginInputPassword.val() != "") {
            $(".login ul li >.button_box > input.login_btn").addClass("btn_active");
        }
        else{
            $(".login ul li >.button_box > input.login_btn").removeClass("btn_active");
        }
    });
    /****** End Popup Login button effects *********/

        // main nav desktop
    turnOnDesktopNavHover();

    /* --------------------------------------------------------------------------------
     END HEADER
     -------------------------------------------------------------------------------- */










    /* --------------------------------------------------------------------------------
     START HOME PAGE
     -------------------------------------------------------------------------------- */
    //Homepage and product page sliders
    var $slider = $(".product-slider ul");
    var $slide = $(".product-slider li");

    var resetSlider = function () {
        var $sWidth = $(".product-slider").width();
        var $wWidth = $(window).width();
        var $slider = $(".product-slider ul");
        var $slide = $(".product-slider li");
        $slider.stop().animate({marginLeft: "0"}, 0);
        scrolltimes = $slide.not(".clone").size();
        scrollcount = 0;
        if ($wWidth > 999) {
            $slide.css("width", $sWidth / 5)
        } else if ($wWidth > 700 && $wWidth < 999) {
            $slide.css("width", $sWidth / 4)
        } else if ($wWidth > 550 && $wWidth < 699) {
            $slide.css("width", $sWidth / 3)
        } else {
            $slide.css("width", $sWidth / 2)
        }
        $slider.css("width", (scrolltimes * 2 + 1) * $slide.width())
    };

    if($slider.length) {
        $(window).resize(resetSlider);
        $slider.append($slider.html().replace(/<li>/g, '<li class="clone">'));
        resetSlider();
    }

    $(".product-slider .arrow-left").on("click", function () {
        scrollwidth = $slide.width() + 18;
        scrolltimes = $slide.not(".clone").size();
        if (scrollcount == 0) {
            $slider.animate({marginLeft: scrollwidth * scrolltimes * -1 + "px"}, 0);
            scrollcount = scrolltimes
        }
        $slider.animate({marginLeft: "+=" + scrollwidth + "px"}, 200);
        scrollcount--
    });

    $(".product-slider .arrow-right").on("click", function () {
        scrollwidth = $slide.width() + 18;
        scrolltimes = $slide.not(".clone").size();
        if (scrollcount == scrolltimes) {
            $slider.animate({marginLeft: "0px"}, 0);
            scrollcount = 0
        }
        $slider.animate({marginLeft: "-=" + scrollwidth + "px"}, 200);
        scrollcount++
    })

    /* --------------------------------------------------------------------------------
     END HOME PAGE
     -------------------------------------------------------------------------------- */



    /* --------------------------------------------------------------------------------
     START COLLECTION PAGE
     -------------------------------------------------------------------------------- */
    // Product Image Swap on rollover
    $("#collection .products li .swap").on('mouseover',function(){
        var $img = $(this).parent().find('.product_img');
        $img.attr('src',$img.attr('data-swap'));
    }).on('mouseout',function(){
        var $img = $(this).parent().find('.product_img');
        $img.attr('src',$img.attr('data-original'));
    });


    //Swap image to correct color image on swatch click
    $('#collection .products .swatch > li').on('click',function(){
        var optionValue = $(this).attr('data-option-title');
        $(this).parents('.swatch').find('li').removeClass('active');
        $(this).addClass('active');

        var $swatchThumb = $(this).closest('.swatch').find('.product-photo-thumbs img[alt="' + optionValue + '"]')
        var newSrc1 = $swatchThumb.attr('data-large');

        var newSrc2 = $swatchThumb.parent().next().find("img").attr('data-large');

        var $mainImage = $(this).parent().parent().find('.product_img');

        $mainImage.attr('src',newSrc1).attr('data-original',newSrc1);
        $mainImage.parent().attr('data-image-alt',optionValue);

        var thumbCount = $(this).closest('.swatch').find('.product-photo-thumbs img[alt^="' + optionValue + ' "]').size();

        if(thumbCount > 0) {
            $mainImage.attr('data-swap',newSrc2);
        }

        var price = $(this).attr("data-option-price");

        len = price.length;
        price = '$' + price.substring(0, len-2) + '.' + price.substring(len-2);
        $(this).closest('.product').find(".normal_price").html(price);

        var compare_price = $(this).attr("data-option-compare-price");
        len = compare_price.length;
        compare_price = '$' + compare_price.substring(0, len-2) + '.' + compare_price.substring(len-2);
        $(this).closest('.product').find(".price").html(compare_price);

        return false;
    });


    // START FILTERS

    // Toggle Filters
    $('#sizes li, #colors li, #lengths li, #sleeves li').on('click', function(){
        applyFilters(this);
    });


    // Apply all of the selected filters
    function applyFilters(t) {
        $('.products .grid > li').removeClass('hide');
        $(t).toggleClass('active');
        hideProducts();
        checkForNoResults();
        $('.products .grid > li.hide').fadeOut('slow');
        $('.products .grid > li:not(.hide)').fadeIn('slow');
    }

    // Hide products that dont match the selected filters
    function hideProducts(){
        $('.products .grid > li').each(function(){
            var hideProduct = true;
            if($('#sleeves li.active').size() > 0 || $('#lengths li.active').size() > 0 || $('#sizes li.active').size() > 0 || $('#colors li.active').size() > 0 )  {
                $(this).find('.product-photo-thumb img').each(function(){
                    if($('#colors li.active').size() > 0) {
                        var $swatchAlt = $(this).attr('alt');
                        $('#colors li.active').each(function(){
                            var $filterAlt = $(this).attr('data-color');
                            console.log('Filter:' + $filterAlt)
                            if($swatchAlt.indexOf($filterAlt) > -1) {
                                hideProduct = false;
                                return false;
                            }
                        });
                    }
                });

                $(this).find('.product-photo-thumbs').each(function(){
                    if($('#sizes li.active').size() > 0) {
                        var $sizes = $(this).attr('data-available-sizes');
                        $('#sizes li.active').each(function(){
                            var $filterAlt = $(this).html();
                            if($sizes.indexOf(',' + $filterAlt + ',') > -1) {
                                hideProduct = false;
                                return false;
                            }
                        });
                    }

                    if($('#lengths li.active').size() > 0) {
                        var $lengths = $(this).attr('data-available-lengths');
                        $('#lengths li.active').each(function(){
                            var $filterAlt = $(this).html();
                            if($lengths.indexOf(',' + $filterAlt + ',') > -1) {
                                hideProduct = false;
                                return false;
                            }
                        });
                    }

                    if($('#sleeves li.active').size() > 0) {
                        var $sleeves = $(this).attr('data-available-tags');
                        $('#sleeves li.active').each(function(){
                            var $filterAlt = $(this).html();
                            if($sleeves.indexOf(',' + $filterAlt + ',') > -1) {
                                hideProduct = false;
                                return false;
                            }
                        });
                    }
                });
            } else {
                hideProduct = false;
            }
            if(hideProduct) { $(this).addClass('hide'); }
        })
    }

    // Display the no results message when no products are displayed from the selected filters
    function checkForNoResults(){
        var $count = $('.products li:not(.hide)').size();
        if($count > 0) { $('.products .none').hide(); } else { $('.products .none').fadeIn(); }
    }





    // Float the filters if window width is less than 700px
    if($('#collection nav').length) {
        $(window).on('resize',function(){
            if($(window).width() >= 700) {
                $('#collection nav').removeClass('open').removeClass('float');
            }
            if($(window).width() <= 700) {
                $('#collection nav').removeClass('hide');
                $('#collection .products').removeClass('full');
                $('#collection .filter-flyout').removeClass('show');
            }
        });
    }

    // Fly out the filter when button is clicked
    $('#collection .filter-flyout').on('click',function(e) {
        e.preventDefault();
        if($(window).width() <= 700) {
            $('#collection nav').addClass('open');
        } else {
            $('#collection nav').removeClass('open');
            $('#collection nav').removeClass('hide');
            $('#collection .products').removeClass('full');
            $('#collection .filter-flyout').removeClass('show');
        }
        $(this).removeClass('show');
    });


    $('#collection article .close').on('click',function(){
        $('#collection nav').removeClass('open');
        if($(window).width() > 700) {
            $('#collection nav').addClass('hide');
            $('#collection .products').addClass('full');
            $('#collection .filter-flyout').addClass('show');
        }
    });

    // Rollover to show a bigger version of the color swatch in the filter menu
    $('nav .swatch li').on('mouseenter',function(){
        $('.swatch .detail p').html($(this).attr('data-color'));
        $('.swatch .detail img').attr('src',$(this).css('background-image').replace('url("','').replace('")',''));
        $('.swatch .detail').stop().fadeIn(200);
    }).on('mouseout',function(){
        $('.swatch .detail').stop().fadeOut(200);
    })

    $(".fancybox_pdp").fancybox({
        'transitionIn' : 'elastic',
        'transitionOut' : 'elastic',
        'speedIn'  : 600,
        'speedOut'  : 200
    });

    $(".fancybox_form").fancybox({
        padding: 0,
        'transitionIn' : 'elastic',
        'transitionOut' : 'elastic',
        'speedIn'  : 600,
        'speedOut'  : 200
    });

    // END FILTERS

    /* --------------------------------------------------------------------------------
     END COLLECTION PAGE
     -------------------------------------------------------------------------------- */





    /* --------------------------------------------------------------------------------
     START PRODUCT PAGE
     -------------------------------------------------------------------------------- */

    // Auto-select color based on hashtag in the url
    $('.MagicZoomBigImageCont img').ready(function(){
        setTimeout( function(){
            var hashtag = window.location.hash;
            hashtag = hashtag.replace('#','');
            $('.swatch li[data-option-title*="' + hashtag + '"]').trigger('click');
        }, 1000);
    });

    // Highlight the selected thumbnail.
    $('.alternate_images a').on('click',function(){
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
    });


    // Product Color Swatch Form Swap
    $('.swatch li.group-reveal').on('click',function() {
        if(!$(this).hasClass('disabled') && !$(this).hasClass('active')){

            var $thisProduct = $(this).closest('.product');
            $thisProduct.removeClass('active');

            $('#picker_contents .product:eq(' + $(this).index() + ')').addClass('active');

            var $swatches = $('.swatch.option1').find('li:not(.group-reveal)');

            $swatches.eq($(this).index()).trigger('click');
        }
    });


    // Product Group Size Sync click
    $('.product_group.swatch li').on('click',function(){
        if($(this).closest('.product').hasClass('active')) {
            if(!$(this).closest('.swatch').hasClass('option1')) {
                if($(this).closest('.swatch').hasClass('option2')) {
                    var $swatches = $('.product .swatch.option2 li[data-option-title="' + $(this).attr('data-option-title') + '"]');
                }
                if($(this).closest('.swatch').hasClass('option3')) {
                    var $swatches = $('.product .swatch.option3 li[data-option-title="' + $(this).attr('data-option-title') + '"]');
                }

                $swatches.each(function(){
                    if(!$(this).closest('.product').hasClass('active')){
                        $(this).trigger('click');
                    }
                });
            }
        }
    });

    // Sync quantity
    $('.product_group #quantity').change(function(){
        console.log($(this));
        if($(this).closest('.product').hasClass('active')) {

            var qtyVal = $(this).val();
            var $qtyField = $('#quantity');

            $qtyField.each(function(){
                if(!$(this).closest('.product').hasClass('active')) {
                    $(this).val(qtyVal);
                }
            });
        }
    })


    // Product Page Color Swatches
    $('.pdp .swatch li').on('click', function() {
        if(!$(this).hasClass('disabled') && !$(this).hasClass('active')){
            var $thisProduct = $(this).closest('.product');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            var optionValue = $(this).attr('data-option-title');
            $('.single-option-selector:eq('+ $(this).closest('.swatch').index() + '):contains(' + optionValue + ')',$thisProduct).val(optionValue).trigger('change');

            $('.price_tooltip_block').css('display','none');
            var prices = $('.swatch li.active').attr('data-option-price');

            $('.swatch li.active').each(function(){
                var priceValue = $(this).attr('data-option-price');
                var comparePriceValue = $(this).attr('data-option-compare-price');

                // Update Our Price
                var len = priceValue.length;
                var price = '$' + priceValue.substring(0, len-2) + '.' + priceValue.substring(len-2);
                $('.our_price span').text(price);

                // Update Compare Price
                var len = comparePriceValue.length;
                var price = '$' + comparePriceValue.substring(0, len-2) + '.' + comparePriceValue.substring(len-2);
                $('.comparable_price span').text(price);

                if($(this).attr('data-option-price') > $('.product').attr('data-base-price')) {
                    $('.price_tooltip_block').css('display','block')
                    return false;
                }
            });

            if($(this).closest('.swatch').hasClass('product_color')) {
                $('.alternate_images img').css('display','none');
                $('.alternate_images img[alt*="' + optionValue + '"]').css('display','block');
                $('.alternate_images img[alt="' + optionValue + '"]:eq(0)').trigger('click');
            }
        }
    });
    // END PRODUCT PAGE SWATCHES


    /* --------------------------------------------------------------------------------
     END PRODUCT PAGE
     -------------------------------------------------------------------------------- */
});
/* --------------------------------------------------------------------------------
 END DOCUMENT READY
 -------------------------------------------------------------------------------- */








/* --------------------------------------------------------------------------------
 START FUNCTIONS
 -------------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------------
 START HEADER FUNCTIONS
 -------------------------------------------------------------------------------- */
function turnOnDesktopNavHover() {
    $('#nav > ul > li').hover(function () {
            $(this).find('ul').stop().slideDown(200);
            $(this).addClass('active');
        },
        function () {
            $(this).find('ul').stop().slideUp(200);
            $(this).removeClass('active');
        });
}


function closeSearchBox() {
    var $searchbox = $('.search_box .anchor-popup');

    $searchbox.animate({
        'border-width': 0,
        'padding-left': 0,
        width: 0
    }, 200).removeClass('is-open');

    $searchbox.parents('.search_box').find('.anchor-btn').removeClass('searching');

}


var setUpMobileNav = function() {
    // remove hover from main nav
    $('#nav > ul > li').unbind('mouseenter mouseleave');
    // remove any left over styles from desktop js
    $('#nav > ul > li > ul').removeAttr('style');

    // build the mobile-nav-top-bar
    $('#country-switcher').appendTo('#mobile-nav-top-bar');
    $('.top-right .login_box').appendTo('#mobile-nav-top-bar');
    $('.top-right .search_box').appendTo('#mobile-nav-top-bar');

    var $level1anchor = $('#nav > ul > li > a');
    // add the transformicons here
    // mobile-navigation add tcon-plus--minus transformicons
    $level1anchor.append('<button type="button" class="tcon tcon-plus tcon-plus--minus" aria-label="add item"><span class="tcon-visuallyhidden">add item</span></button>');

    transformicons.add('.tcon');

    // add the right single angle quote to the level two sub navigation items
    $('#nav > ul > li > ul > li > a').append('<span>&rsaquo;</span>');


    // the click event for the Level 1 menu item
    // must be over-ridden for mobile
    // and converted into an accordion
    $level1anchor.on('click.top-nav', function(e) {
        e.preventDefault();

        var $this = $(this),
            $li = $this.parent();

        transformicons.revert('li.active .tcon-plus');

        if ( $li.hasClass('active') ) {
            $li.removeClass('active').find('ul').slideUp();
        } else {
            $('#nav > ul > li.active').removeClass('active').find('ul').slideUp();
            $li.addClass('active').find('ul').slideDown();
            transformicons.transform('li.active .tcon-plus');
        }
    });
};

var setUpDesktopNav = function() {

    // un-build the mobile-nav-top-bar
    $('#country-switcher').appendTo('.top-left');
    $('.login_box').prependTo('.top-right');
    $('.search_box').prependTo('.top-right');

    var activatedL1s = '#nav > ul > li';
    // any open nav units will have class active
    // and a style attribute
    // they both must be removed
    $(activatedL1s + '.active')
        .removeClass('active').find('ul')
        .slideUp();

    // remove any left over styles from mobile js
    $(activatedL1s + ' > ul').removeAttr('style');

    // remove the click event from L1 menu items
    $(activatedL1s + ' > a').off('click.top-nav');

    // remove tcon-plus--minus transformicons
    $(activatedL1s + ' > a > button').remove();

    // remove the right single angle quote to the level two sub navigation items
    $(activatedL1s + ' > ul > li > a > span').remove();


    turnOnDesktopNavHover();

};


enquire.register("screen and (max-width: 699px)", {
    match : function() {
        //setUpMobileNav();

        $(document).ready(function() {
            setUpMobileNav();
        });
    },
    unmatch : function() {
        $(document).ready(function() {
            setUpDesktopNav();
        });
    },
    setup : function() {},
    deferSetup : true,
    destroy : function() {}
});



// max width is 999 if min width is 1000
enquire.register("screen and (max-width: 999px)", {
    match : function() { // this is the compressed menu
        $(document).ready(function() {
            // count visible nav items and add class is-reversed to the last half
            $('#nav > ul > li').removeClass('is-reversed');
            var compressed = $("#nav > ul > li:visible");
            var len = compressed.length;
            console.log(len);
            compressed = compressed.filter(':gt('+ ((len/2) - 1) +')');
            compressed.addClass('is-reversed');
        });
    },
    unmatch : function() { // this is the uncompressed menu
        $(document).ready(function() {
            // count visible nav items and add class is-reversed to the last half
            var uncompressed = $("#nav > ul > li");
            uncompressed.removeClass('is-reversed');
            var len = uncompressed.length;
            console.log(len);
            uncompressed = uncompressed.filter(':gt('+ ((len/2) - 1) +')');
            uncompressed.addClass('is-reversed');
        });
    },
    setup : function() {
        $(document).ready(function() {
            // count visible nav items and add class is-reversed to the last half
            var uncompressed = $("#nav > ul > li");
            uncompressed.removeClass('is-reversed');
            var len = uncompressed.length;
            console.log(len);
            uncompressed = uncompressed.filter(':gt('+ ((len/2) - 1) +')');
            uncompressed.addClass('is-reversed');
        });

    }
});

/* --------------------------------------------------------------------------------
 END HEADER FUNCTIONS
 -------------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------------
 START PRODUCT PAGE FUNCTIONS
 -------------------------------------------------------------------------------- */

// Callback function for when SKU options are selected
var selectCallback = function(variant, selector) {
    var $product = $('#product-form-' + selector.product.id);

    var option1Selected = $('.option1.swatch li.active',$product).attr('data-option-title');
    var option2Selected = $('.option2.swatch li.active',$product).attr('data-option-title');
    var option3Selected = $('.option3.swatch li.active',$product).attr('data-option-title');

    $('.swatch li:not(.active)',$product).addClass('disabled');

    var dontDisable = ($('.option1.swatch li.active',$product).hasClass('group-reveal'))
    var hasOption2 = false;
    var hasOption3 = false;

    $('#add',$product).removeClass('disable').prop("disabled",false);

    //Loop through each inactive swatch
    $('.swatch li:not(.active)',$product).each(function(){
        var optionTitle = $(this).attr('data-option-title');

        if($(this).closest('.swatch').hasClass('option1')){
            for(var i = 0; i < selector.product.variants.length; i++) {
                var option1 = selector.product.variants[i].option1;
                var option2 = selector.product.variants[i].option2;
                var option3 = selector.product.variants[i].option3;
                var hasInventory = (selector.product.variants[i].inventory_quantity > 0)

                if(option1 == optionTitle) {
                    if(!option2Selected && !option3Selected) {
                        if(hasInventory) { $(this).removeClass("disabled"); }
                    }
                    if(option2Selected && !option3Selected) {
                        if(option2Selected == option2){
                            if(hasInventory) { $(this).removeClass("disabled"); }
                        }
                    }
                    if(!option2Selected && option3Selected) {
                        if(hasInventory) { $(this).removeClass("disabled"); }
                    }
                    if(option2Selected && option3Selected) {
                        if(option2Selected == option2 && option3Selected == option3){
                            if(hasInventory) { $(this).removeClass("disabled"); }
                        }
                    }
                }
            }
        }

        if($(this).closest('.swatch').hasClass('option2')){
            hasOption2 = true;
            for(var i = 0; i < selector.product.variants.length; i++) {
                var option1 = selector.product.variants[i].option1;
                var option2 = selector.product.variants[i].option2;
                var option3 = selector.product.variants[i].option3;
                var hasInventory = (selector.product.variants[i].inventory_quantity > 0)

                if(dontDisable) { $(this).removeClass("disabled"); }

                if(option2 == optionTitle) {
                    if(!option1Selected && !option3Selected) {
                        if(hasInventory) { $(this).removeClass("disabled"); }
                    }

                    if(!option1Selected && option3Selected) {
                        if(hasInventory) { $(this).removeClass("disabled"); }
                    }

                    if(option1Selected && !option3Selected) {
                        if(option1Selected == option1){
                            if(hasInventory) { $(this).removeClass("disabled"); }
                        }
                    }
                    if(option1Selected && option3Selected) {
                        if(option1Selected == option1 && option3Selected == option3){
                            if(hasInventory) { $(this).removeClass("disabled"); }
                        }
                    }
                }
            }
        }

        if($(this).closest('.swatch').hasClass('option3')){
            hasOption3 = true;
            for(var i = 0; i < selector.product.variants.length; i++) {
                var option1 = selector.product.variants[i].option1;
                var option2 = selector.product.variants[i].option2;
                var option3 = selector.product.variants[i].option3;
                var hasInventory = (selector.product.variants[i].inventory_quantity > 0)

                if(dontDisable) { $(this).removeClass("disabled"); }

                if(option3 == optionTitle) {

                    if(!option1Selected && !option2Selected) {
                        if(hasInventory) { $(this).removeClass("disabled"); }
                    }

                    if(!option1Selected && option2Selected) {
                        if(hasInventory) { $(this).removeClass("disabled"); }
                    }

                    if(option1Selected && !option2Selected) {
                        if(option1Selected == option1){
                            if(hasInventory) { $(this).removeClass("disabled"); }
                        }
                    }
                    if(option1Selected && option2Selected) {
                        if(option1Selected == option1 && option2Selected == option2){
                            if(hasInventory) { $(this).removeClass("disabled"); }
                        }
                    }
                }
            }
        }
    });

    $('.swatch.option1 li.group-reveal').removeClass('disabled');
    $('.swatch.option1 li').each(function(){
        if(!$(this).hasClass('.group-reveal')){
            if($(this).hasClass('disabled')){
                $('.swatch.option1 li.group-reveal[data-option-title="' + $(this).attr('data-option-title') + '"]').addClass('disabled');
            }
        }
    })


    if(hasOption2 && !option2Selected || hasOption3 && !option3Selected){
        $('#add',$product).addClass('disable').prop("disabled",true);
    }
};

/* --------------------------------------------------------------------------------
 END PRODUCT PAGE FUNCTIONS
 -------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------
 START CART FUNCTIONS
 -------------------------------------------------------------------------------- */

function updateCart() {
    document.getElementById('cartform').submit();
}

function remove_item(id,skuId,dName,price,variant) {
    document.getElementById('updates_'+id).value = 0;
    document.getElementById('cartform').submit();

    ga('ec:addProduct',{
        'id': skuId,
        'name': dName,
        'category': '',
        'variant' : variant,
        'price' : price,
        'quantity' : 1,
        'dimension2' : '',
    });

    ga('ec:setAction', 'remove');
    ga('send','event','remove','click','removeFromCart');
}


function add(id,skuId,dName,price,variant) {
    var qty = Number(document.getElementById('updates_'+id).value);
    document.getElementById('updates_'+id).value = qty + 1;
    document.getElementById('cartform').submit();

    //analytics script starts
    ga('ec:addProduct',{
        'id': skuId,
        'name': dName,
        'category': '',
        'price': price,
        'variant' : variant,
        'quantity' : 1,
        'dimension2':'',
    });

    ga('ec:setAction', 'add');
    ga('send', 'event', 'addToCart','click','addToCart');
    //analytics script ends

}

function subtract(id,skuId,dName,price,variant) {
    var qty = Number(document.getElementById('updates_'+id).value);
    document.getElementById('updates_'+id).value = qty - 1;
    document.getElementById('cartform').submit();

    //analytics script start
    ga('ec:addProduct',{
        'id': skuId,
        'name': dName,
        'category': '',
        'variant' : variant,
        'price' : price,
        'quantity' : 1,
        'dimension2' : ''
    });

    ga('ec:setAction', 'remove');
    ga('send','event','remove','click','removeFromCart');
    //analytics script ends
}

/* --------------------------------------------------------------------------------
 END CART FUNCTIONS
 -------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------
 START MISCELLANEOUS FUNCTIONS
 -------------------------------------------------------------------------------- */
function GetQueryStringParams(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function scrollTo(hash) {
    location.hash =  hash;
}

/* --------------------------------------------------------------------------------
 START MISCELLANEOUS FUNCTIONS
 -------------------------------------------------------------------------------- */



