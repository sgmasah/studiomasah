$(document).ready(function() {
    // Check if the current page should have a fade-in effect
    if ($('body').hasClass('fade-in-page')) {
        // Fade in the whole page on load
        $('body').css('display', 'none').fadeIn(1000);
    }

    // Handle link clicks with fade out
    $('a').on('click', function(event) {
        var newLocation = this.href;
        event.preventDefault();
        $('body').fadeOut(1000, function() {
            window.location = newLocation;
        });
    });

    // Fade in the initial logo after 0.5 second
    setTimeout(function() {
        $('.logo').css({ opacity: 1 });
    }, 500);

    // Automatically transition to the second logo after a delay
    setTimeout(function() {
        // Simultaneously fade out the first logo and fade in the second logo
        $('.logo').fadeTo(1000, 0);
        $('.logo-m').css({ display: 'block' }).fadeTo(1000, 1);

        // After the transition, fade out the overlay to reveal the home page
        setTimeout(function() {
            $('.overlay').fadeOut(1000);
            $('.home-page').fadeIn(1000);
        }, 2500);
    }, 3500); // Time before transitioning to the second logo (1s fade in + 2s display)

    // Function to navigate to home.html with a fade out effect
    function navigateToHome() {
        $('.home-page').fadeOut(1500, function() {
            window.location.href = 'home.html';
        });
    }

    // Scroll to home page on arrow click
    $('.arrow').click(function() {
        navigateToHome();
    });

    // Also handle scroll events to navigate to the home page
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 0) {
            navigateToHome();
        }
    });

    // Fade out the header on scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $('.header').fadeOut();
        } else {
            $('.header').fadeIn();
        }
    });
});
