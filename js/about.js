// popup //
$(document).ready(function() {
    var popup_btn = $('.popup-btn');
    popup_btn.magnificPopup({
    type : 'image',
    gallery : {
        enabled : true
    }
    });
    });
// popup //

// scroll //
// Show scroll-to-top button when user scrolls down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show button when user scrolls down 20px from the top of the document
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Scroll to the top of the document when button is clicked
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// scroll //