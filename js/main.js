$(document).ready(function() {
  /* Scroll hire me button to contact page */
  $('.hire-me').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });

  /* Scroll spy and scroll filter */
  $('#main-menu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollThreshold: 0.5,
    scrollSpeed: 750,
    filter: '',
    easing: 'swing'
  });


  /* VEGAS Home Slider */
  $('body').vegas({
    delay: 5000,
    transition: 'fade',
    transitionDuration: 1000,
    color: '#555555',
    slides: [{
      src: '/img/slider/01.jpg'
    }, {
      src: '/img/slider/02.jpg'
    }, {
      src: '/img/slider/03.jpg'
    }, {
      src: '/img/slider/04.jpg'
    }]
  });
  $('#vegas-next').click(function() {
    $('body').vegas('next');
  });
  $('#vegas-prev').click(function() {
    $('body').vegas('previous');
  });

});
