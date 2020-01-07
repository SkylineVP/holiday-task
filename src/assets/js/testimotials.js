const radioButtons = document.getElementsByName('numSlide');
const slides = document.getElementsByClassName("slide");
let intersecred = false;
let startInterval;


radioButtons.forEach(value => {
    value.onclick = (event) => {
        radioButtons[event.currentTarget.value - 1].classList.add("active");// при нажати на кнопку заданее ей активного стиля и задание стиля слайдеру
        slides[event.currentTarget.value - 1].classList.add("activeSlide");
        if (event.currentTarget.value == 1) {                                   //Удаление стиля у предыдушего активного слайдера и кнопки
            radioButtons[1].classList.remove("active");
            slides[1].classList.remove("activeSlide");

        } else {
            radioButtons[0].classList.remove("active");
            slides[0].classList.remove("activeSlide");
        }
    };
    document.getElementById("testimonials").onmousemove = () => {
        clearInterval(startInterval)
    };// остановка прокрутки слайда при движении мышей над контейнером Testimonials
});

const observer = new IntersectionObserver(function (entries) {//когда слайдер польностью в видимости запустить переключение слайдера
    if (entries[0].isIntersecting === true) {
        if (intersecred === false) {
            intersecred = true;
            startInterval = setInterval(() => {
                const active = document.getElementsByClassName("active")[0];
                if (active.value >= radioButtons.length) {
                    radioButtons[0].click();
                } else {
                    radioButtons[active.value].click();
                }

            }, 10000);
        }

    }
}, {threshold: [1]});

observer.observe(document.getElementsByClassName("flexSlider")[0]);// присвоение наблюдателю елемента
