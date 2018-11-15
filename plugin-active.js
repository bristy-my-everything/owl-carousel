/* class="owl-carousel owl-theme" */


//////////////////////////////////////////////////////
// OwlCarousel for home page
$(function () {
  var slider = $('.home');
  slider.owlCarousel({
    loop: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplay: false,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  /* animation-delay and animation-duration (owl carousel slider 06. must be needed.) */
  slider.on('translate.owl.carousel', function () {
    var layer = $("[data-animation]");
    layer.each(function () {
      var slider_animation = $(this).data('animation');
      $(this).removeClass('animated ' + slider_animation).css('opacity', '0');
    });
  });
  $("[data-delay]").each(function () {
    var animation_delay = $(this).data('delay');
    $(this).css('animation-delay', animation_delay);
  });
  $("[data-duration]").each(function () {
    var animation_dutation = $(this).data('duration');
    $(this).css('animation-duration', animation_dutation);
  });
  slider.on('translated.owl.carousel', function () {
    var layer = slider.find('.owl-item.active').find("[data-animation]");
    layer.each(function () {
      var slider_animation = $(this).data('animation');
      $(this).addClass('animated ' + slider_animation).css('opacity', '1');
    });
  });

});





////////////////////////////////////////////////////
// OwlCarousel for team, service, testimonials
$(function () {
  $('.selector-class-or-id').owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });
});





////////////////////////////////////////////////////
// OwlCarousel for team, service, testimonials
$(function () {
  $('.testimonial__carousel').owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});





////////////////////////////////////////////////////
// Owl Carousel Slider For Hero area (খুব একটা ভাল নয়)
$(function () {
  var slider = $('.home');
  slider.owlCarousel({
    loop: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplay: true,
    smartSpeed: 3000,
    nav: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  slider.on('translate.owl.carousel', function(event){
    $(".home__slide-text h2").removeClass("animated fadeInDown");
    $(".home__slide-text p").removeClass("animated zoomIn");
    $(".home__slide-text a").removeClass("animated fadeInUp");
  });

  slider.on('translated.owl.carousel', function(event){
    $(".home__slide-text h2").addClass("animated fadeInDown");
    $(".home__slide-text p").addClass("animated zoomIn");
    $(".home__slide-text a").addClass("animated fadeInUp");
  });
});





//////////////////////////////////////////////////////
// 100% Ok for home page
$(function () {
  var slider = $('.slider__carousel');
  slider.owlCarousel({
    loop: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplay: true,
    nav: true,
    dots: true,
    autoplayTimeout: 10000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });


  slider.on('translate.owl.carousel', function (event) {
    $(".slider__first h2").removeClass("animated flipInX");
    $(".slider__first p").removeClass("animated zoomIn");
    $(".slider__first a").removeClass("animated fadeInUp");
  });
  slider.on('translated.owl.carousel', function (event) {
    $(".slider__first h2").addClass("animated flipInX");
    $(".slider__first p").addClass("animated zoomIn");
    $(".slider__first a").addClass("animated fadeInUp");
  });


  slider.on('translate.owl.carousel', function () {
    var layer = $("[data-animation]");
    layer.each(function () {
      var slider_animation = $(this).data('animation');
      $(this).removeClass('animated ' + slider_animation).css('opacity', '0');
    });
  });
  $("[data-delay]").each(function () {
    var animation_delay = $(this).data('delay');
    $(this).css('animation-delay', animation_delay);
  });
  $("[data-duration]").each(function () {
    var animation_dutation = $(this).data('duration');
    $(this).css('animation-duration', animation_dutation);
  });
  slider.on('translated.owl.carousel', function () {
    var layer = slider.find('.owl-item.active').find("[data-animation]");
    layer.each(function () {
      var slider_animation = $(this).data('animation');
      $(this).addClass('animated ' + slider_animation).css('opacity', '1');
    });
  });
});
