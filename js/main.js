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
});

//***BURGER***
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const html = document.querySelector('html');
const menuLinks = document.querySelectorAll(".menu__list-link");

menuBtn.addEventListener('click', () => {
    html.classList.toggle('unscroll');
    menu.classList.toggle('menu__list--active');
    menuBtn.classList.toggle('menu__btn--open');
})

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove('menu__list--active');
        html.classList.remove("unscroll");
        menuBtn.classList.remove('menu__btn--open');
    });
});



//***POPUP***
const btnsBuyback = document.querySelectorAll(".btn-open-modal-buyback");
const modalBuyback = document.getElementById("modal-buyback");
// open modal

btnsBuyback.forEach((btns) => {
   btns.addEventListener("click", () => {
       modalBuyback.classList.add("modal-open");
   });
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

//     .onSuccess(async function () {
//     let data = {
//         name: document.getElementById("name").value,
//         tel: tel.inputmask.unmaskedvalue(),
//         msg: document.getElementById("msg").value
//     }
//
//     let response = await fetch("mail.php", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json; charset=UTF-8"
//         }
//     })
//
//     let result = await response.text()
//
//     alert(result)
// })