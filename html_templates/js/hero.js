$(document).ready(function(){

    activateProductTab();

    $('.slider-wrapper .controls li').on('click',function() {
        var $img = $(this).find('img');
        $('.slider-wrapper .controls li img').each(function() {
            $(this).attr('src', $(this).attr('src').replace('_active.gif','.gif'));
        });
        $img.attr('src', $img.attr('src').replace('.gif','_active.gif'));
        var $index = $('.slider-wrapper .controls li').index(this);
        var $slideWidth = $('.slider li').width()
        $('.slider').stop().animate({
            marginLeft: '-' + $index * $slideWidth + 'px'
        });
    });

    $('#hero .tabs li').on('click',function(){
        $('#hero .tabs li').each(function() {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        $('#hero .hero-product article').css('opacity',0).html('');
        activateProductTab();
    });

    if($('#hero .slider-wrapper').length) {
        resetHeroSlider();
        $(window).resize(function(){
            resetHeroSlider();
        })
    }
});

function resetHeroSlider(){
    $('.slider li').css('width',$('.slider-wrapper').width())
    $('.slider').stop().animate({
        marginLeft: '0'
    });
}


function activateProductTab(){
    $productHandle = $('.tabs li.active').attr('data-product-handle');
    $.get('/collections/quickview/products/' + $productHandle, function(data){
        $('#hero .hero-product article').append(data).animate({opacity:1});
    });
}

