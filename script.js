var mn = $(".main-nav");

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $(window).scroll(function(){
      if ( $(this).scrollTop() > 1440 ) {
        mn.addClass("nav-scrolled")
      }
      else {
        mn.removeClass("nav-scrolled")
      }
    });
  });
