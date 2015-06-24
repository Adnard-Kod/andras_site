$(function () {
  var topoffset = 45;
  // Animated Scrolling
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-topoffset
          }, 1000);
          return false;
        } // target.length
      } //location hostname
    }); //on click

  var controller = new ScrollMagic({
     globalSceneOptions: {
       triggerHook: "onLeave"
     }
  });
  var pinNavbar = new ScrollScene({
    triggerElement: "#nav",
  }).setPin("#nav").addTo(controller)
})