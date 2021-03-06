// Take the image in each right block and make it a background image.
$(document).ready(function() {
    $('#profession .hotspots img').rwdImageMaps();

    $(".fancybox_pdp").fancybox({
        padding: 0,
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
});

var $hotspot, coords, arrayCoords, x1,y1,x2, y2, xCenter, yCenter;
$hotspot = $('.float-hotspot');
$('map area').on('mouseenter', function(){
    coords = $(this).attr('coords');
    arrayCoords = coords.split(',');
    x1 = Number(arrayCoords[0]);
    y1 = Number(arrayCoords[1]);
    x2 = Number(arrayCoords[2]);
    y2 = Number(arrayCoords[3]);
    $hotspot.html($(this).attr('alt') + '<span>Click to view product');
    xCenter = ((x1+x2)/2) - $hotspot.width()*.6;
    yCenter = ((y1+y2)/2) - 100;
    $hotspot.css('display','block').css('left',xCenter).css('top',yCenter).stop().animate({
        opacity: 1
    },200);
}).on('mouseleave', function(){
    $hotspot.stop().animate({
        opacity: 0
    },200, function(){
        $hotspot.css('display','none');
    });
});