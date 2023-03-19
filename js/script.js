
$(document).ready(function () {
    $('.slider-companies').slick({
        slidesToShow: 5,
        autoplay: true,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '70px'
                }
            }

        ]
    });
});

let popUp = document.querySelector(".header__pop-up");
let burgerMenu = document.querySelector(".header__burger");
let cross = document.querySelector(".header__cros");
burgerMenu.addEventListener("click", () => {
    popUp.classList.remove("display-none");
    burgerMenu.classList.add("display-none");
    cross.style.height = "30px";
    cross.style.width = "30px";
    cross.style.background = "orange";
    cross.textContent = "X";
    cross.style.fontSize = "30px";
    cross.style.textAlign = "center";
    cross.style.fontWeight = "900";
    cross.classList.remove("display-none");
});

cross.addEventListener('click', () => {
    cross.classList.add("display-none");
    popUp.classList.add("display-none");
    burgerMenu.classList.remove("display-none");
})