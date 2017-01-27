
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

// popup login button in login box
var enableLoginBtn = function() {
    var popuploginInputEmail = $('#customer_email');
    var popuploginInputPassword = $('#customer_password');
    var popupLoginBtn = $('#sign_in');

    if(popuploginInputEmail.val() != "" && popuploginInputPassword.val() != "") {
        popupLoginBtn.addClass("btn_active");
    }
    else{
        popupLoginBtn.removeClass("btn_active");
    }
};





var closeSearchBox = function() {
    $('.search_box .anchor-popup').stop().animate({
        'border-width': 0,
        'padding-left': 0,
        width: 0
    }, 200).removeClass('is-searching'); // remove class from popup
};
var openSearchBox = function() {
    $('.search_box .anchor-popup').stop().animate({
        'border-width': '1px',
        'padding-left': '5px',
        width: '180px'
    }, 200).addClass('is-searching'); // add class to popup
};


function openAnchorPopup($anchorBtn) {
    // add class to popup
    $anchorBtn.parent().find('.anchor-popup')
        .addClass('is-open').stop().slideDown(200);

}

var closeAnchorPopups = function() {
    // close any open popups
    if ( $('.anchor-popup').hasClass('is-searching') ) {
        closeSearchBox();
    } else {
        $('.anchor-popup.is-open').stop()
            .removeClass('is-open').slideUp(200);
    }
    // remove active classes from any active buttons
    $('.anchor-btn.active, .anchor-btn.searching').removeClass('active searching');
};

function anchorBtnClicked($anchorBtn) {
    // is this popup already open
    // if it is already open then we just need to close it and exit
    var popupIsOpen = false;
    if ( $anchorBtn.hasClass('active') || $anchorBtn.hasClass('searching') ) popupIsOpen = true;

    // closes any open popup
    closeAnchorPopups($anchorBtn);

    // if popup is not already open, then open it
    if (!popupIsOpen) {
        if ( $anchorBtn.parent().hasClass('search_box') ) {
            $anchorBtn.addClass('searching'); // add class to button
            openSearchBox();
        } else {
            $anchorBtn.addClass('active'); // add class to button
            openAnchorPopup($anchorBtn);
        }
    }
}




jQuery(document).ready(function() {

    // mobile nav - open and close
    $('.tcon-menu--xbutterfly').click(function(e) {
        e.preventDefault();
        $('#nav').toggleClass('is-open');
    });

    $('.menu-ctl').click(function(e) {
        e.preventDefault();
        $('#nav').toggleClass('is-open');
    });


    // country switcher mouseleave
    // on mouse out of dropdown, close it
    $('#country-switcher .dropdown-menu').mouseleave(function() {
        setTimeout(function() {
            $('#country-switcher .anchor-btn').removeClass('active');
            $('#country-switcher .dropdown-menu').slideUp(200);
        }, 100);
    });


    // anchor-btn assign mousedown rather than click
    // mousedown occurs before blur
    // click does not occur until after blur
    $('.anchor-btn').not('.our-mission .anchor-btn').mousedown(function(e) {
        e.stopImmediatePropagation(); // cancel the blur event for searchbox
        e.preventDefault();
        anchorBtnClicked( $(this) );
    });



    $('.search_box .anchor-popup').blur(function() {
        closeSearchBox();
        $('.search_box .anchor-btn').removeClass('searching');
    });





    /****** Popup Login button effects *********/
    $(".login input").focus(function(){
        $(this).addClass('input_act');
    });

    $('.login input').blur( function() {
        $(this).removeClass('input_act');
    });


    $("#customer_email").on("change keyup paste", function(){
        enableLoginBtn();
    });

    $("#customer_password").on("change keyup paste", function(){
        enableLoginBtn();
    });
    /****** End Popup Login button effects *********/

    // main nav desktop
    turnOnDesktopNavHover();

});







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
            $li.removeClass('active').find('ul').slideUp(200);
        } else {
            $('#nav > ul > li.active').removeClass('active').find('ul').slideUp(200);
            $li.addClass('active').find('ul').slideDown(200);
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
        .slideUp(200);

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
        $(document).ready(function() {
            setUpMobileNav();
        });
    },
    unmatch : function() {
        $(document).ready(function() {
            setUpDesktopNav();
        });
    }
});





/* START OF COMPRESSED MENU */

function compressMainNav() {
    $(document).ready(function() {
        // count visible nav items and add class is-reversed to the last half
        $('#nav > ul > li').removeClass('is-reversed');
        var compressed = $("#nav > ul > li:visible");
        var len = compressed.length;
        compressed = compressed.filter(':gt('+ ((len/2) - 1) +')');
        compressed.addClass('is-reversed');
    });
}

function decompressMainNav() {
    $(document).ready(function() {
        // count visible nav items and add class is-reversed to the last half
        var decompressed = $("#nav > ul > li");
        decompressed.removeClass('is-reversed');
        var len = decompressed.length;
        decompressed = decompressed.filter(':gt('+ ((len/2) - 1) +')');
        decompressed.addClass('is-reversed');
    });
}

// max width is 999 if min width is 1000
enquire.register("screen and (max-width: 999px)", {

    match : function() { // this is the compressed main nav
        compressMainNav()
    },
    unmatch : function() { // this is the decompressed main nav
        decompressMainNav();
    },
    setup : function() { // this is the decompressed main nav
        decompressMainNav();
    }
});

/* END OF COMPRESSED MENU */