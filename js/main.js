// CAROUSEL
$(function(){
  $('.carousel__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
  });
  //
  // $('.carousel__inner').slick({
  //   arrows: false,
  //   dots: true,
  //   slidesToShow: 3,
  //   responsive: [
  //     {
  //       breakpoint: 841,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     },
  //     {
  //       breakpoint: 601,
  //       settings: {
  //         slidesToShow: 1
  //       }
  //     },
  //   ]
  // });
  //
  // wow = new WOW(
  //   {
  //     boxClass: 'wow',      // default
  //     animateClass: 'animate__animated', // default
  //     offset: 0,          // default
  //     mobile: true,       // default
  //     live: true        // default
  //   }
  // )
  // wow.init();
  //
});

// BURGER
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
})
