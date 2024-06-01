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

        // 3d card//
        document.querySelectorAll('.box1, .box2, .box3, .box4').forEach(card => {
          card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardWidth = cardRect.width;
            const cardHeight = cardRect.height;
            const centerX = cardRect.left + cardWidth / 2;
            const centerY = cardRect.top + cardHeight / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            const rotateX = (mouseY / cardHeight) * -15; // Adjust rotation angle for X axis
            const rotateY = (mouseX / cardWidth) * 15;  // Adjust rotation angle for Y axis
        
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          });
        
          card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
          });
        });
        // 3d card//

        // swiper //
        var swiper = new Swiper(".mySwiper", {
          effect: "cube",
          grabCursor: true,
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
          pagination: {
            el: ".swiper-pagination",
          },
        });
        // swiper //

        // book //
        // function name(){
        //   var name= document.getElementById("name").value;
        // }
        // function email(){
        //   var email= document.getElementById("email").value;
        // }
        // function number(){
        //   var number= document.getElementById("number").value;
        // }
        // function date(){
        //   var date= document.getElementById("date").value;
        // }
        // function time(){
        //   var time= document.getElementById("time").value;
        // }
        // function guest(){
        //   var guest= document.getElementById("guest").value;
        // }
        // function book(){

        //   if(!name() || !email() || !number() || !date() || !time() || !guest()){
        //     alert("please fill all input fields");
        //   }
        // }
        // function book(){
        //   let lname=document.querySelector("#name").value;
        //   let lemail=document.querySelector("#email").value;
        //   let lnumber=document.querySelector("#number").value;
        //   let ldate=document.querySelector("#date").value;
        //   let ltime=document.querySelector("#time").value;
        //   let lguest=document.querySelector("#guest").value;
    
        //   localStorage.setItem("name",lname);
        //   localStorage.setItem("email",lemail);
        //   localStorage.setItem("number",lnumber);
        //   localStorage.setItem("date",ldate);
        //   localStorage.setItem("time",ltime);
        //   localStorage.setItem("guest",lguest);

        //   alert("Booking successful");
        // }
        // book //