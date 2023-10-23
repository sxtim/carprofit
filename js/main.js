// CAROUSEL
$(function () {
    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });
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
const html = document.querySelector('html');
menuBtn.addEventListener('click', () => {
    html.classList.toggle('unscroll');
    menu.classList.toggle('menu__list--active');
    menuBtn.classList.toggle('menu__btn--open');
})

// MODAL
document.getElementById('open-modal-btn').addEventListener( "click", () => {
    document.getElementById("modal-buyback").classList.add("modal-open");
});

document.getElementById("close-my-modal-btn").addEventListener("click", () => {
    document.getElementById("modal-buyback").classList.remove("modal-open");
});





// FORM
let validation = new JustValidate("#form");
validation.addField('#name', [
    {
        
    }
]);