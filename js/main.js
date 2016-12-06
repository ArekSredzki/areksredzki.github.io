$(document).ready(function() {
  /* Scroll hire me button to contact page */
  $('.hire-me').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });


  /* Sticky menu */
  $(".navbar").sticky({
    topSpacing: 0
  });


  /* Scroll spy and scroll filter */
  $('#main-menu').onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollThreshold: 0.5,
    scrollSpeed: 750,
    filter: "",
    easing: "swing"
  });


  /* VEGAS Home Slider */
  $.vegas('slideshow', {
    backgrounds: [
      {
        src: 'img/slider/01.jpg',
        fade: 1000
      }, {
        src: 'img/slider/02.jpg',
        fade: 1000
      }, {
        src: 'img/slider/03.jpg',
        fade: 1000
      }, {
        src: 'img/slider/04.jpg',
        fade: 1000
      }
    ]
  });
  $("#vegas-next").click(function() {
    $.vegas('next');
  });
  $("#vegas-prev").click(function() {
    $.vegas('previous');
  });

});
