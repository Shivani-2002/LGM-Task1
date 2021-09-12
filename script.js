 var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        loop: true,
        autoplay:{
            delay:2000,
            disableOnInteraction:false
        }

      });


      function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }


function display(source)
{
  document.getElementById('zippyMain-img').src
  =source

}