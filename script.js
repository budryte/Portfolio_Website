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

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
