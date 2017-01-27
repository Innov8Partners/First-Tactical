function turnOnDesktopNavHover() {
    $("#nav > ul > li").hover(function () {
        $(this).find("ul").stop().slideDown(200);
        $(this).addClass("active")
    }, function () {
        $(this).find("ul").stop().slideUp(200);
        $(this).removeClass("active")
    })
}
function closeSearchBox() {
    var $searchbox = $(".search_box .anchor-popup");
    $searchbox.animate({"border-width": 0, "padding-left": 0, width: 0}, 200).removeClass("is-open");
    $searchbox.parents(".search_box").find(".anchor-btn").removeClass("searching")
}
jQuery(document).ready(function () {
    $(".dropdown").click(function () {
        $(".dropdown-menu").slideToggle()
    });
    $(".dropdown-menu").mouseleave(function () {
        setTimeout(function () {
            $(".dropdown").removeClass("active");
            $(".dropdown-menu").slideUp()
        }, 100)
    });
    $(".tcon-menu--xbutterfly").click(function (e) {
        e.preventDefault();
        $("#nav").toggleClass("is-open")
    });
    $(".login_box .anchor-btn, .cart_box .anchor-btn").click(function () {
        var $this = $(this);
        if ($this.hasClass("active")) {
            $this.removeClass("active").parent().find(".anchor-popup").slideUp();
            return
        }
        var $searching = $(".anchor-btn.searching");
        if ($searching) {
            closeSearchBox()
        }
        var $activePopup = $(".anchor-btn.active");
        if ($activePopup) {
            $activePopup.removeClass("active").parent().find(".anchor-popup").slideUp()
        }
        $this.addClass("active").parent().find(".anchor-popup").slideDown()
    });
    $(".search_box .anchor-btn").mousedown(function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        var $activePopup = $(".anchor-btn.active");
        if ($activePopup) {
            $activePopup.removeClass("active").parent().find(".anchor-popup").slideUp()
        }
        var $searchbox = $(".search_box .anchor-popup");
        if ($searchbox.hasClass("is-open")) {
            closeSearchBox()
        } else {
            $searchbox.animate({"border-width": "1px", "padding-left": "5px", width: "180px"}, 200).addClass("is-open");
            $searchbox.parents(".search_box").find(".anchor-btn").addClass("searching")
        }
    });
    $(".search_box .anchor-popup").blur(function () {
        closeSearchBox()
    });
    $(".login input").focus(function () {
        $(this).addClass("input_act")
    });
    $(".login input").blur(function () {
        $(this).removeClass("input_act")
    });
    var popuploginInputEmail = $(".login ul li input.email");
    var popuploginInputPassword = $(".login ul li input.pass");
    popuploginInputEmail.on("change keyup paste", function () {
        if (popuploginInputEmail.val() != "" && popuploginInputPassword.val() != "") {
            $(".login ul li >.button_box > input.login_btn").addClass("btn_active")
        } else {
            $(".login ul li >.button_box > input.login_btn").removeClass("btn_active")
        }
    });
    popuploginInputPassword.on("change keyup paste", function () {
        if (popuploginInputEmail.val() != "" && popuploginInputPassword.val() != "") {
            $(".login ul li >.button_box > input.login_btn").addClass("btn_active")
        } else {
            $(".login ul li >.button_box > input.login_btn").removeClass("btn_active")
        }
    });
    turnOnDesktopNavHover()
});
var setUpMobileNav = function () {
    $("#nav > ul > li").unbind("mouseenter mouseleave");
    $("#nav > ul > li > ul").removeAttr("style");
    $("#country-switcher").appendTo("#mobile-nav-top-bar");
    $(".top-right .login_box").appendTo("#mobile-nav-top-bar");
    $(".top-right .search_box").appendTo("#mobile-nav-top-bar");
    var $level1anchor = $("#nav > ul > li > a");
    $level1anchor.append('<button type="button" class="tcon tcon-plus tcon-plus--minus" aria-label="add item"><span class="tcon-visuallyhidden">add item</span></button>');
    transformicons.add(".tcon");
    $("#nav > ul > li > ul > li > a").append("<span>&rsaquo;</span>");
    $level1anchor.on("click.top-nav", function (e) {
        e.preventDefault();
        var $this = $(this), $li = $this.parent();
        transformicons.revert("li.active .tcon-plus");
        if ($li.hasClass("active")) {
            $li.removeClass("active").find("ul").slideUp()
        } else {
            $("#nav > ul > li.active").removeClass("active").find("ul").slideUp();
            $li.addClass("active").find("ul").slideDown();
            transformicons.transform("li.active .tcon-plus")
        }
    })
};
var setUpDesktopNav = function () {
    $("#country-switcher").appendTo(".top-left");
    $(".login_box").prependTo(".top-right");
    $(".search_box").prependTo(".top-right");
    var activatedL1s = "#nav > ul > li";
    $(activatedL1s + ".active").removeClass("active").find("ul").slideUp();
    $(activatedL1s + " > ul").removeAttr("style");
    $(activatedL1s + " > a").off("click.top-nav");
    $(activatedL1s + " > a > button").remove();
    $(activatedL1s + " > ul > li > a > span").remove();
    turnOnDesktopNavHover()
};
enquire.register("screen and (max-width: 699px)", {
    match: function () {
        $(document).ready(function () {
            setUpMobileNav()
        })
    }, unmatch: function () {
        $(document).ready(function () {
            setUpDesktopNav()
        })
    }, setup: function () {
    }, deferSetup: true, destroy: function () {
    }
});
enquire.register("screen and (max-width: 999px)", {
    match: function () {
        $(document).ready(function () {
            $("#nav > ul > li").removeClass("is-reversed");
            var compressed = $("#nav > ul > li:visible");
            var len = compressed.length;
            console.log(len);
            compressed = compressed.filter(":gt(" + (len / 2 - 1) + ")");
            compressed.addClass("is-reversed")
        })
    }, unmatch: function () {
        $(document).ready(function () {
            var uncompressed = $("#nav > ul > li");
            uncompressed.removeClass("is-reversed");
            var len = uncompressed.length;
            console.log(len);
            uncompressed = uncompressed.filter(":gt(" + (len / 2 - 1) + ")");
            uncompressed.addClass("is-reversed")
        })
    }, setup: function () {
        $(document).ready(function () {
            var uncompressed = $("#nav > ul > li");
            uncompressed.removeClass("is-reversed");
            var len = uncompressed.length;
            console.log(len);
            uncompressed = uncompressed.filter(":gt(" + (len / 2 - 1) + ")");
            uncompressed.addClass("is-reversed")
        })
    }
});