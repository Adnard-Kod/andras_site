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

  //pinning navbar
  var pinNavbar = new ScrollScene({
    triggerElement: "#nav",
  }).setPin("#nav").addTo(controller)

  //tween about me
  var aboutMe = TweenMax.staggerFromTo("#about article", 1, { delay: 1, opacity: 1, scale: 1, ease: Back.eastOut}, { opacity: 0, scale: 0 });
  var screen = new ScrollScene({
    triggerElement: "#aboutMe"
  }).setTween(aboutMe).addTo(controller)
})