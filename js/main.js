let navbar = document.querySelector('.navbar'),
    scrollToTopBtn = document.querySelector('#scroll-to-top-btn')

window.addEventListener('scroll', function () {
    // Set a threshold value for the vertical scroll position
    const threshold = 490,
        // Get the current vertical scroll position of the window
        scrollPosition = window.scrollY || window.pageYOffset;
    // If the scroll position is greater than the threshold, add a CSS class to the navbar
    if (scrollPosition > threshold) {
        navbar.classList.add('scrolled');
    } else {
        // If the scroll position is less than or equal to the threshold, remove the CSS class from the navbar
        navbar.classList.remove('scrolled');
    }
});


// Add an event listener to the window object that listens for the 'scroll' event
window.addEventListener('scroll', function () {

    // Set a threshold value for the vertical scroll position
    const threshold = 500,
        // Get the current vertical scroll position of the window
        scrollPosition = window.scrollY || window.pageYOffset;

    // If the scroll position is greater than the threshold, show the button
    if (scrollPosition > threshold) {
        scrollToTopBtn.classList.add('show');
    }
    // If the scroll position is less than or equal to the threshold, hide the button
    else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Add an event listener to the button that triggers the scroll
scrollToTopBtn.addEventListener('click', function () {
    // Scroll to the top of the page using the scrollTo() method
    window.scrollTo({
        top: 0, // Set the vertical scroll position to 0 (i.e. the top of the page)
        behavior: 'smooth' // Add smooth scrolling animation
    });

});