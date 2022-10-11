$(document).ready(function() {
    /* Scroll event handler */
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
});

/* Scroll the background layers */
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.boy').css('top',(0-(scrolled*0.15))+'px');
}
