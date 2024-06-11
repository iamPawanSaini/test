/**
 * Files
 * Global js file.
*/

// Menu toggler mobile
$(".navbar-toggle").click(function() {
    $(this).toggleClass("on");
    $(".navigation-menu__wrapper").slideToggle();
});

$(window).resize(function() {
    if ($(window).width() > 990 ) { // Adjust the breakpoint as needed
        $(".navigation-menu__wrapper").show();
    }
}).resize();

// search block
$(document).ready(function(){
	$('a[href="#search"]').on('click', function(event) {                    
		$('.search-popup').addClass('open');
		$('.search-popup > form > input[type="text"]').focus();
	});            
	$('.search-popup, .search-popup button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});            
});

// Scrollspy
$(document).ready(function() {
    window.addEventListener('scroll', function() {
        var header = $('.header');
        if (window.scrollY > 0) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    }, { passive: true });
});


// Destination Slider
function destinationSlider() {
    $('.destinations-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.custom-prev'),
        nextArrow: $('.custom-next'),
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
}

// Function to generate stars based on rating
function generateStars(container, rating) {
    container.innerHTML = ''; // Clear any existing stars
  
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      if (i <= rating) {
        star.classList.add('active');
      } else if (i - rating < 1) {
        star.classList.add('half');
      }
      star.innerHTML = '&#9733;'; // Unicode for star
      container.appendChild(star);
    }
  }
  
  // Get all elements with class 'user-rating' and generate stars for each
  document.querySelectorAll('.user-rating').forEach(ratingContainer => {
    const rating = parseFloat(ratingContainer.getAttribute('data-rating'));
    generateStars(ratingContainer, rating);
  });
  
  
// Testimonial Slider
function testimonialSlider() {
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.testimonial-prev'),
        nextArrow: $('.testimonial-next'),
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }]
    });
}


$(document).ready(function() {
    destinationSlider();
    testimonialSlider();
});