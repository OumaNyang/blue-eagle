(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    document.querySelector('.scroll-down').addEventListener('click', function() {
        window.scrollBy({
         top: 600,
         behavior: 'smooth'
       });
     });
     function typeWriter(element, text, speed) {
        let i = 0;
        function type() {
          if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
          }
        }
        type();
      }
    
      const caption1 = document.querySelector("#carousel1");
      const caption2 = document.querySelector("#carousel2");
      const caption3 = document.querySelector("#carousel3");
      const caption4 = document.querySelector("#carousel4");

      const text1 = "Transforming Businesses with Innovative IT Solutions";
      const text2 = "Enhancing Healthcare with State-of-the-Art Medical Equipment";
      const text3 = "Solving Challenges through Customized and Simplified Solutions";
      const text4 =  "Creating Productive Workspaces with Exceptional Office Furniture";

    
      typeWriter(caption1, text1, 100);  
      typeWriter(caption2, text2, 100);  
      typeWriter(caption3, text3, 100);
      typeWriter(caption4, text4, 100);  
  
    
})(jQuery);

