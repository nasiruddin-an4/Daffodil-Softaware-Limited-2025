$(function () {
    var siteSticky = function () {
        $(".js-sticky-header").sticky({ topSpacing: 0 });
    };
    siteSticky();

    var siteMenuClone = function () {
        $('.js-clone-nav').each(function () {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });

        setTimeout(function () {
            var counter = 0;
            $('.site-mobile-menu .has-children').each(function () {
                var $this = $(this);

                // Add arrow-collapse span
                $this.prepend('<span class="arrow-collapse collapsed">');

                // Set up the collapse attributes
                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;
            });
        }, 1000);

        // Handle clicks on both arrow-collapse AND nav links
        $('body').on('click', '.site-mobile-menu .has-children > a, .site-mobile-menu .arrow-collapse', function (e) {
            e.preventDefault();
            var $this = $(this);
            var $parent = $this.closest('.has-children');
            var $collapse = $parent.find('> .collapse');
            var $arrow = $parent.find('> .arrow-collapse');

            if ($collapse.hasClass('show')) {
                $collapse.collapse('hide');
                $arrow.removeClass('active');
            } else {
                $collapse.collapse('show');
                $arrow.addClass('active');
            }
        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        });

        // Click outside offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    };
    siteMenuClone();
});

 // Counter Animation
 $('.counter-value').each(function () {
	$(this).prop('Counter', 0).animate({
		Counter: $(this).text()
	}, {
		duration: 3500,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now));
		}
	});
});

// Carousel Settings
const carouselSettings = {
	items: 3,
	loop: true,
	margin: 20,
	autoplay: true,
	autoplayTimeout: 3000,
	responsive: {
		0: { items: 1 },
		768: { items: 2 },
		1024: { items: 3 }
	},
	dots: true,
	dotsEach: true,
	onInitialized: function () {
		if (this.$element.find('.owl-dot').length > 3) {
			this.$element.find('.owl-dot').slice(3).hide();
		}
	} 
};

$('.app-carousel, .testimonial-carousel').owlCarousel(carouselSettings);

$(".tech-pill").click(function (e) {
    e.preventDefault();
    $(".tech-pill").removeClass("active");
    $(this).addClass("active");
});


// Clients Logo Scrolling Effect
["waveContent", "waveContentLeft", "waveContentRight"].forEach(id => {
	const element = document.getElementById(id);
	if (element) element.parentNode.appendChild(element.cloneNode(true));
});



document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.getElementById('searchToggle');
    const searchBox = document.getElementById('searchBox');
    const searchInput = document.getElementById('searchInput');

    // Toggle search box
    searchToggle.addEventListener('click', function(e) {
        e.preventDefault();
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // Close search box when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchBox.contains(e.target) && !searchToggle.contains(e.target)) {
            searchBox.classList.remove('active');
        }
    });

    // Handle search form submission
    window.handleSearch = function(e) {
        e.preventDefault();
        const query = searchInput.value;
        console.log('Searching for:', query);
        // Add your search logic here
    };
});
  

$(document).ready(function() {
    // Initialize all owl carousels
    const carouselOptions = {
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    };
    
    // Initialize all carousels
    $('.mobile-carousel').owlCarousel(carouselOptions);
    $('.frontend-carousel').owlCarousel(carouselOptions);
    $('.backend-carousel').owlCarousel(carouselOptions);
    $('.database-carousel').owlCarousel(carouselOptions);
    $('.cms-carousel').owlCarousel(carouselOptions);
    $('.tools-carousel').owlCarousel(carouselOptions);
    $('.integrations-carousel').owlCarousel(carouselOptions);
    $('.cloud-carousel').owlCarousel(carouselOptions);
    $('.devops-carousel').owlCarousel(carouselOptions);
    
    // Tab switching functionality
    $('.tech-pill').on('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all pills
      $('.tech-pill').removeClass('active');
      
      // Add active class to clicked pill
      $(this).addClass('active');
      
      // Get the tab ID
      const tabId = $(this).data('tab');
      $('.tab-content').removeClass('active').hide();
      
      // Show the selected tab content
      $(`#${tabId}-tab`).addClass('active').fadeIn(300);
      
      // Refresh the carousel for the active tab to fix any display issues
      $(`.${tabId}-carousel`).trigger('refresh.owl.carousel');
    });
  });