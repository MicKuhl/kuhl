
// PRELOADER JS
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});

$("#frontScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#workspace").offset().top
    }, 1500);
});

// MAIN NAVIGATION
 $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        filter: ':not(.external)',
        changeHash: true
    });

    /* NAVIGATION VISIBLE ON SCROLL */
    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.sticky-navigation').stop().animate({
            "opacity": '0',
            "top": '-75'
        });
    }


// HIDE MOBILE MENU AFTER CLIKING ON A LINK
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

});

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause ||";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Play ►";
  }
})
