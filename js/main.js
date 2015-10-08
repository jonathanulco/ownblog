// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-scroll").addClass("scrolling-nav");
    } else {
        $(".navbar-scroll").removeClass("scrolling-nav");
    }
// Scroll
  smoothScroll.init({
    updateURL: false
  })    
});
