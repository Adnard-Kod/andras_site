$(function () {
  var topoffset = 45;
  if($("#aboutMe")) {

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

    //scroll navbar active
    $(window).scroll(function() {
      var windowPosition = $(window).scrollTop() + topoffset;
      $('nav li a').removeClass('active');
      if (windowPosition > $("#aboutMe").offset().top) {
        $('nav li a').removeClass('active');
        $("a[href$=#aboutMe]").addClass("active")
      }

      if (windowPosition > $("#contacts").offset().top) {
        $('nav li a').removeClass('active');
        $("a[href$=#about]").addClass("active")
      }

      if (windowPosition > $("#projects").offset().top) {
        $('nav li a').removeClass('active');
        $("a[href$=#about]").addClass("active")
      }
    });

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
  }
})
