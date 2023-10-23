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

//***BURGER***
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const html = document.querySelector('html');
menuBtn.addEventListener('click', () => {
    html.classList.toggle('unscroll');
    menu.classList.toggle('menu__list--active');
    menuBtn.classList.toggle('menu__btn--open');
})

//***POPUP***
// open modal
document.getElementById('open-modal-btn').addEventListener( "click", () => {
    document.getElementById("modal-buyback").classList.add("modal-open");
});
// close modal
document.getElementById("close-my-modal-btn").addEventListener("click", () => {
    document.getElementById("modal-buyback").classList.remove("modal-open");
});

// close modal with ESC
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal-buyback").classList.remove("modal-open")
    }
});
// закрытие окна при клике вне его
document.querySelector("#modal-buyback .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal-buyback").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('modal-open');
});


//***FORM***
let tel = document.querySelector("#tel");
let im = new Inputmask("+7(999) 999-99-99");
im.mask(tel);
let validation = new JustValidate("form");
validation.addField('#name', [
    {
        rule: "required",
        errorMessage: "Введите имя!"
    },
    {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимум 3 символа!"
    },
]).addField("#tel", [
    {
        validator: (value) => {
            const phone = tel.inputmask.unmaskedvalue()
            return Boolean(Number(phone) && phone.length > 0)
        },
        errorMessage: 'Введите телефон'
    },
    {
        validator: (value) => {
            const phone = tel.inputmask.unmaskedvalue()
            return Boolean(Number(phone) && phone.length === 10)
        },
        errorMessage: 'Введите телефон полностью'
    }
])