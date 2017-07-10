$(document).ready(function() {
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
  });

  // Offset for Main Navigation
  $('#topbar').affix({
    offset: {
      top: 100
    }
  });

  $('.background-image-holder').each(function() {
    var imgSrc = $(this).children('img').attr('src');
    $(this).css('background', 'url("' + imgSrc + '")');
    $(this).children('img').hide();
    $(this).css('background-position', 'initial');
  });

  // fade in backgrund images
  setTimeout(function() {
    $('.background-image-holder').each(function() {
      $(this).addClass('fadeIn');
    });
  }, 200);
});
