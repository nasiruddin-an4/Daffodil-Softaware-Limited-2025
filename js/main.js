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



// document.addEventListener('DOMContentLoaded', function() {
//     const searchToggle = document.getElementById('searchToggle');
//     const searchBox = document.getElementById('searchBox');
//     const searchInput = document.getElementById('searchInput');
//
//     // Toggle search box
//     searchToggle.addEventListener('click', function(e) {
//         e.preventDefault();
//         searchBox.classList.toggle('active');
//         if (searchBox.classList.contains('active')) {
//             searchInput.focus();
//         }
//     });
//
//     // Close search box when clicking outside
//     document.addEventListener('click', function(e) {
//         if (!searchBox.contains(e.target) && !searchToggle.contains(e.target)) {
//             searchBox.classList.remove('active');
//         }
//     });
//
//     // Handle search form submission
//     window.handleSearch = function(e) {
//         e.preventDefault();
//         const query = searchInput.value;
//         console.log('Searching for:', query);
//         // Add your search logic here
//     };
// });


$(document).ready(function() {
    // Common carousel options
    const carouselOptions = {
        loop: true,
        margin: 20,
        nav: false,
        dots: true,           // Enable dots navigation
        dotsEach: false,      // Show dots for each item (optional, adjust as needed)
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

    // Dynamically initialize all carousels with class 'owl-carousel'
    $('.owl-carousel').each(function() {
        $(this).owlCarousel(carouselOptions);
    });

    // Tab switching functionality
    $('.tech-pill').on('click', function(e) {
        e.preventDefault();

        // Remove active class from all pills
        $('.tech-pill').removeClass('active');

        // Add active class to clicked pill
        $(this).addClass('active');

        // Get the tab ID
        const tabId = $(this).data('tab');

        // Hide all tab contents and remove active class
        $('.tab-content').removeClass('active').hide();

        // Show the selected tab content
        $(`#${tabId}-tab`).addClass('active').fadeIn(300);

        // Refresh all carousels in the active tab
        $(`#${tabId}-tab .owl-carousel`).trigger('refresh.owl.carousel');
    });

    // Ensure initial active tab's carousel is properly initialized
    const initialActiveTab = $('.tech-pill.active').data('tab');
    if (initialActiveTab) {
        $(`#${initialActiveTab}-tab .owl-carousel`).trigger('refresh.owl.carousel');
    }
});

//Sorting JS
document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown toggle button
    const dropdownToggle = document.getElementById('sortDropdown');
    const dropdownMenu = dropdownToggle.nextElementSibling;

    // Add click event listener to toggle dropdown
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    // Close the dropdown when clicking outside
    window.addEventListener('click', function(e) {
        if (!dropdownToggle.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Add click event listeners to dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // Here you can add logic for sorting

            // Update the button text to show selected sort option
            const selectedText = this.textContent;
            dropdownToggle.innerHTML = 'Sort by: ' + selectedText + ' <i class="fas fa-sort-alpha-down ms-2"></i>';

            // Hide dropdown after selection
            dropdownMenu.classList.remove('show');
        });
    });
});



const backToTopBtn = document.getElementById("backToTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });