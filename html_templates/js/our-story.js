/**
 * Created by michaels on 5/23/2016.
 */

jQuery(document).ready(function($) {

    function isTouchDevice() {
        return 'ontouchstart' in document.documentElement;
    }
    if (isTouchDevice()) {
        // on Mobile
    }
    else {
        // on Desktop
        var s = skrollr.init({
            smoothScrolling: true
        });
    }

    // show popup and fade out text
    $('.stage').hover(
        function() {
            $(this).addClass('hover');
        }, function() {
            $(this).removeClass('hover');
        }
    );
});



$(document).ready(function(){
    var ua = navigator.userAgent||navigator.vendor||window.opera;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(ua)) {
        $('body').addClass("mobile");
    }

    $('button.submit_btn[type="submit"]').attr('disabled','disabled').addClass('disable');
    $('.email').on("change keyup paste",function() {
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test(this.value)){
            $("button.submit_btn").addClass("btn_active");
            $('button.submit_btn[type="submit"]').removeAttr('disabled');
        }else{
            $("button.submit_btn").removeClass("btn_active");
            $('button.submit_btn[type="submit"]').attr('disabled','disabled');
        };
    });

    $("button.submit_btn").click(function(){
        $("#mce-EMAIL").val($("#email_id").val());
        $('.form_block').ScrollTo({
            duration: 600,
            easing: 'linear'
        });
        $(".f_name").focus();
    });


    //popup
    $("#tempAnchor").fancybox({
        maxWidth    : 775,
        //maxHeight : 654,
        fitToView   : false,
        width       : '95%',
        height      : '90%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none',
        scrolling   : 'no',
        autoHeight: true,
        afterLoad:function(){
            $.fancybox.update();
        }
    });

    // error msg popup
    $("#errorAnchor").fancybox({
        maxWidth    : 505,
        //maxHeight : 654,
        fitToView   : false,
        width       : '80%',
        //height        : '90%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none',
        scrolling   : 'no',
        autoHeight: true,
        afterLoad:function(){
            $.fancybox.update();
        }
    });
    $("#video_popup_temp").fancybox({
        maxWidth    : 775,
        //maxHeight : 654,
        fitToView   : false,
        width       : '95%',
        //height        : '90%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none',
        scrolling   : 'no',
        autoHeight: true,
        afterShow : function () {
            setTimeout(function(){
                $.fancybox.update();
            }, 2000);
        },
        beforeClose: function(){
            if(s7_videoviewTestimonial != null) {
                try{
                    s7_videoviewTestimonial.videoplayer.cleanUp();
                    s7_videoviewTestimonial = null;
                }
                catch(err){}
            }
        }
    });


    $('input[type="radio"]').screwDefaultButtons({
        image: "url(images/our-story/first-tactical-radio-btn.png)",
        width:	 23,
        height:	 28
    });

    // enable and disable the PROFESSION > OTHER text-box
    $('.profession input[type="radio"]').click(function(){
        $('#mce-MMERGE4').attr('disabled',true);
    });

    $('.radio.other_radio').click(function(){
        $('#mce-MMERGE4').attr('disabled',false).focus();
    });
});


function submitForm() {
    var valid = true;
    var focusPoint = null;

    if($("#mce-FNAME").val() == "") {
        valid = false;
        $("#mce-FNAME").attr("placeholder","First Name");
        $("#first_name_div").addClass("error");
        focusPoint = "#mce-FNAME";
    } else {
        $("#mce-FNAME").attr("placeholder","");
        $("#first_name_div").removeClass("error");
    }

    if($("#mce-LNAME").val() == "") {
        valid = false;
        $("#mce-LNAME").attr("placeholder","Last Name");
        $("#last_name_div").addClass("error");
        if(focusPoint == null) focusPoint = "#mce-LNAME";
    } else {
        $("#mce-LNAME").attr("placeholder","");
        $("#last_name_div").removeClass("error");
    }

    if($("#mce-EMAIL").val() == "") {
        valid = false;
        $("#mce-EMAIL").attr("placeholder","Please enter a valid email");
        $("#email_div").addClass("error");
        if(focusPoint == null) focusPoint = "#mce-EMAIL";
    } else {
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test($("#mce-EMAIL").val())){
            $("#mce-EMAIL").attr("placeholder","");
            $("#email_div").removeClass("error");
        } else {
            valid = false;
            $("#mce-EMAIL").val("");
            $("#mce-EMAIL").attr("placeholder","Please enter a valid email");
            $("#email_div").addClass("error");
            if(focusPoint == null) focusPoint = "#mce-EMAIL";
        };
    }

    if($("input[name=MMERGE3]:checked", "#FTForm").val() === undefined || ($("input[name=MMERGE3]:checked", "#FTForm").val() == "Other" && $("#mce-MMERGE4").val() == "")) {
        valid = false;
        $("#mce-MMERGE4").attr("placeholder","Please check or enter your profession");
        $("#profession_div").addClass("error");
        if(focusPoint == null) focusPoint = "#mce-MMERGE4";
    } else {
        $("#mce-MMERGE4").attr("placeholder","");
        $("#profession_div").removeClass("error");
    }


    if($("#mce-MMERGE6").val()!= "" ) {
        var testNumeric = /^[0-9]+$/i;
        if (testNumeric.test($("#mce-MMERGE6").val())){
            $("#mce-MMERGE6").attr("placeholder","");
            $("#zip_code_div").removeClass("error");
        } else {
            valid = false;
            $("#mce-MMERGE6").val("");
            $("#mce-MMERGE6").attr("placeholder","Numeric Only");
            $("#zip_code_div").addClass("error");
            if(focusPoint == null) focusPoint = "#mce-MMERGE6";
        }
    } else {
        $("#mce-MMERGE6").attr("placeholder","");
        $("#zip_code_div").removeClass("error");
    }

    if(valid) {
        $(".submit_btn").closest(".input_block.submit").addClass("disable");
        $form = $("#FTForm");
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            cache       : false,
            dataType    : 'json',
            contentType: "application/json; charset=utf-8",
            error       : function(err) { $("#errorAnchor").trigger("click"); },
            success     : function(data) {
                if (data.result != "success") {
                    if(data.msg.indexOf("already subscribed") > 0) {
                        $("#mce-EMAIL").val("");
                        $("#mce-EMAIL").attr("placeholder","Email is already subscribed");
                        $("#email_div").addClass("error");
                        $("#mce-EMAIL").focus();
                        $(".submit_btn").closest(".input_block.submit").removeClass("disable");
                    } else {
                        alert(data.msg);
                    }
                } else {
                    $("#msgFirstName").html($("#mce-FNAME").val());
                    $("#tempAnchor").trigger("click");
                    $("#FTForm")[0].reset();
                    $('.submit_btn').closest('.input_block.submit').removeClass('disable');
                }
            }
        });
    } else  {
        if(focusPoint != null) {
            $(focusPoint).focus();
        }
    }
}