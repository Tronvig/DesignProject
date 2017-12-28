(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    // On page load remove preload class from body
    $(window).on('load', function() {
      $('body').removeClass('preload');
    });

    // Fix question controls on scroll
    var controls = $('.controls');
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
       if (scroll >= 136) {
          controls.addClass('fixed');
        } else {
          controls.removeClass('fixed');
        }
    });

  });

})(jQuery, window, document);
