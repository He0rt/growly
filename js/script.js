
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
//pop up menu
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


//comment grade

const reviewsBody = document.querySelector('.reviews__body').children;
const columnsNumbers = []
for (let i = 0; i < reviewsBody.length; i++) {
    let numberOfColumn = 'reviews__column' + i // в эту переменную записыва ID для каждой колнки
    reviewsBody[i].id = numberOfColumn; // добавляю ID из переменной numberOfColumn в HTML
    let grades = reviewsBody[i].lastElementChild.children; //получаю коллекцию прямых потомков каждой колонки и записываю эту КОЛЛЕКЦИЮ в переменную для дальнейшего использования 
    let gradeModifier = 0;
    const itemNumbers = []
    columnsNumbers.push(itemNumbers)
    for (let j = 0; j < grades.length; j++) {
        let classForGradeItems = numberOfColumn + '-item_' + (++gradeModifier) //создаю имя класса для  каждого отдельного grade__item, который находится в reviews__column с конкретным ID(этот конкретный ID я добавляю в строке  reviewsBgrade__itemody[i].id = numberOfColumn; )
        itemNumbers.push('.' + classForGradeItems); //добавляю точку(что бы потом я мог обратится к этому элементу через querySelector) и пушу в массив модифицированные имена для каждого grade__item
        grades[j].classList.add(classForGradeItems)// добавляю к каждому grade__item модифицированные имена из переменной classForGradeItems
        console.log(`${document.querySelector(classForGradeItems)}`)
    }
}


//теперь мне нужно вместо gradeItem обращаться к массиву

//это функция для первой звезды


function item1(gradeItem1, gradeItem2, gradeItem3, gradeItem4, gradeItem5) {
    gradeItem1.addEventListener('click', () => {
        if (gradeItem2.classList.contains('grade__item_active')) {
            gradeItem5.classList.remove('grade__item_active');
            gradeItem4.classList.remove('grade__item_active');
            gradeItem3.classList.remove('grade__item_active');
            gradeItem2.classList.remove('grade__item_active');
            gradeItem1.classList.add('grade__item_active');
        } else if (gradeItem1.classList.contains('grade__item_active')) {
            gradeItem1.classList.remove('grade__item_active');
        } else {
            gradeItem1.classList.add('grade__item_active');
        }
    })
}


function item2(gradeItem1, gradeItem2, gradeItem3, gradeItem4, gradeItem5) {
    gradeItem2.addEventListener('click', () => {
        if (gradeItem3.classList.contains('grade__item_active')) {
            gradeItem5.classList.remove('grade__item_active');
            gradeItem4.classList.remove('grade__item_active');
            gradeItem3.classList.remove('grade__item_active');
            gradeItem1.classList.add('grade__item_active');
            gradeItem2.classList.add('grade__item_active');
        } else if (gradeItem2.classList.contains('grade__item_active')) {
            gradeItem1.classList.remove('grade__item_active');
            gradeItem2.classList.remove('grade__item_active');
        } else {
            gradeItem1.classList.add('grade__item_active');
            gradeItem2.classList.add('grade__item_active');
        }
    })
}


function item3(gradeItem1, gradeItem2, gradeItem3, gradeItem4, gradeItem5) {
    gradeItem3.addEventListener('click', () => {
        if (gradeItem4.classList.contains('grade__item_active')) {
            gradeItem5.classList.remove('grade__item_active');
            gradeItem4.classList.remove('grade__item_active');
            gradeItem1.classList.add('grade__item_active');
            gradeItem2.classList.add('grade__item_active');
            gradeItem3.classList.add('grade__item_active');
        } else if (gradeItem3.classList.contains('grade__item_active')) {
            gradeItem1.classList.remove('grade__item_active');
            gradeItem2.classList.remove('grade__item_active');
            gradeItem3.classList.remove('grade__item_active');
        } else {
            gradeItem1.classList.add('grade__item_active');
            gradeItem2.classList.add('grade__item_active');
            gradeItem3.classList.add('grade__item_active');
        }
    })
}

function item4(gradeItem1, gradeItem2, gradeItem3, gradeItem4, gradeItem5) {
    gradeItem4.addEventListener('click', () => {
        if (gradeItem5.classList.contains('grade__item_active')) {
            gradeItem5.classList.remove('grade__item_active');
            gradeItem1.classList.add('grade__item_active');
            gradeItem2.classList.add('grade__item_active');
            gradeItem3.classList.add('grade__item_active');
            gradeItem4.classList.add('grade__item_active');
        } else if (gradeItem4.classList.contains('grade__item_active')) {
            gradeItem1.classList.remove('grade__item_active');
            gradeItem2.classList.remove('grade__item_active');
            gradeItem3.classList.remove('grade__item_active');
            gradeItem4.classList.remove('grade__item_active');
        } else {
            gradeItem1.classList.add('grade__item_active');
            gradeItem2.classList.add('grade__item_active');
            gradeItem3.classList.add('grade__item_active');
            gradeItem4.classList.add('grade__item_active');
        }
    })
}


function item5(gradeItem1, gradeItem2, gradeItem3, gradeItem4, gradeItem5) {
    gradeItem5.addEventListener('click', () => {
        if (gradeItem5.classList.contains('grade__item_active')) {
            gradeItem1.classList.remove('grade__item_active');
            gradeItem2.classList.remove('grade__item_active');
            gradeItem3.classList.remove('grade__item_active');
            gradeItem4.classList.remove('grade__item_active');
            gradeItem5.classList.remove('grade__item_active');
        } else {
            gradeItem1.classList.add('grade__item_active');
            gradeItem2.classList.add('grade__item_active');
            gradeItem3.classList.add('grade__item_active');
            gradeItem4.classList.add('grade__item_active');
            gradeItem5.classList.add('grade__item_active');
        }
    })
}

for (let i = 0; i < columnsNumbers.length; i++) {
    item1(document.querySelector(columnsNumbers[i][0]), document.querySelector(columnsNumbers[i][1]), document.querySelector(columnsNumbers[i][2]), document.querySelector(columnsNumbers[i][3]), document.querySelector(columnsNumbers[i][4]));
    item2(document.querySelector(columnsNumbers[i][0]), document.querySelector(columnsNumbers[i][1]), document.querySelector(columnsNumbers[i][2]), document.querySelector(columnsNumbers[i][3]), document.querySelector(columnsNumbers[i][4]));
    item3(document.querySelector(columnsNumbers[i][0]), document.querySelector(columnsNumbers[i][1]), document.querySelector(columnsNumbers[i][2]), document.querySelector(columnsNumbers[i][3]), document.querySelector(columnsNumbers[i][4]));
    item4(document.querySelector(columnsNumbers[i][0]), document.querySelector(columnsNumbers[i][1]), document.querySelector(columnsNumbers[i][2]), document.querySelector(columnsNumbers[i][3]), document.querySelector(columnsNumbers[i][4]));
    item5(document.querySelector(columnsNumbers[i][0]), document.querySelector(columnsNumbers[i][1]), document.querySelector(columnsNumbers[i][2]), document.querySelector(columnsNumbers[i][3]), document.querySelector(columnsNumbers[i][4]));
}