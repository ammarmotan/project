$(document).ready(function() {
var popup_btn = $('.popup-btn');
popup_btn.magnificPopup({
type : 'image',
gallery : {
    enabled : true
}
});
});
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
// pagination //
let currentpage = 1;
const totalpage = 3;

function showpage(page){
  for(let i = 1; i <= totalpage; i++){
    const pageElement = document.getElementById(`content-${i}`);
    const paginationItem = document.getElementById(`page-${i}`);
    if(i === page) {
      pageElement.style.display = 'block';
      paginationItem.classList.add('active');
    } else{
      pageElement.style.display = 'none';
      paginationItem.classList.remove('active');
    }
  }
}

// document.getElementById('next').addEventListener('click', () => {
  //   if(currentpage < totalpage) {
    //     currentpage++;
    //     showpage(currentpage);
    //   }
    // });
    
    // document.getElementById('previous').addEventListener('click', () => {
      //   if(currentpage > 1) {
        //     currentpage--;
        //     showpage(currentpage);
        //   }
        // });
        
        for(let i = 1; i <= totalpage; i++){
          const paginationItem = document.getElementById(`page-${i}`);
          paginationItem.addEventListener('click', () => {
            currentpage = i;
            showpage(currentpage);
          });
        }
        showpage(currentpage);
        // pagination //

        // formsender //
        // formsender //