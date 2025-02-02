$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});

$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});

$(document).ready(function(){
	// App carousel
	$('.app-carousel').owlCarousel({
		items: 5,               // Number of items to show on large devices
		loop: true,
		margin: 20,
		autoplay: true,
		autoplayTimeout: 3000,  // Autoplay time in milliseconds
		responsive: {
			0: {
				items: 1       // Number of items to show on small devices
			},
			768: {
				items: 2       // Number of items to show on medium devices
			},
			1024: {
				items: 3       // Number of items to show on large devices
			}
		},
		dots: true,
        dotsEach: false,    // Disable dots for each item
        dotsData: false,    // Disable data dots
        touchDrag: true,
        mouseDrag: true,
        // Ensure only 3 dots are shown
        onInitialized: function() {
            if(this.$element.find('.owl-dot').length > 3) {
                this.$element.find('.owl-dot').slice(3).hide();
            }
		         }         // Enable dots for each item
	});

	// Testimonials carousel (same configuration)
	$('.testimonial-carousel').owlCarousel({
		items: 5,               // Number of items to show on large devices
		loop: true,
		margin: 20,
		autoplay: true,
		autoplayTimeout: 3000,  // Autoplay time in milliseconds
		responsive: {
			0: {
				items: 1       // Number of items to show on small devices
			},
			768: {
				items: 2       // Number of items to show on medium devices
			},
			1024: {
				items: 3       // Number of items to show on large devices
			}
		},
		dots: true,
		dotsEach: true         // Enable dots for each item
	});

	// Handle tech item clicks
	$('.tech-item').click(function(e) {
		e.preventDefault();
		$('.tech-item').removeClass('active');
		$(this).addClass('active');
	});
});


// For The Clients Logo Area
const waveContent = document.getElementById("waveContent");

const clone = waveContent.cloneNode(true);
waveContent.parentNode.appendChild(clone);
// For The Clients Logo Area

// waveContentLeft-scrolling effect
const waveContentLeft = document.getElementById("waveContentLeft");

const cloneLeft = waveContentLeft.cloneNode(true);
waveContentLeft.parentNode.appendChild(cloneLeft);

// waveContentLeft-scrolling effect
const waveContentRight = document.getElementById("waveContentRight");

const cloneRight = waveContentRight.cloneNode(true);
waveContentRight.parentNode.appendChild(cloneRight);