$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(window).scrollTop() > 300)
          {
              $('header').addClass('transparent');
          }
          else
          {
              $('header').removeClass('transparent');
          }
        });
});
