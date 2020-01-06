window.onscroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (!scrollTop == 0) {
        document.getElementById("header").classList.add("fixed");
    } else {
        document.getElementById("header").classList.remove("fixed");
    }
};
const menu = document.getElementById("menu");
menu.onchange = () => {
    if (menu.checked) {
        document.getElementsByTagName("nav")[0].classList.add("open");
        document.getElementById("navLabel").classList.add("clickBtn");
    } else {
        document.getElementsByTagName("nav")[0].classList.remove("open");
        document.getElementById("navLabel").classList.remove("clickBtn");
    }
};
for (let element of document.querySelectorAll("ul.primaryNav li")) {
    element.onclick = () => {
        document.getElementsByTagName("nav")[0].classList.remove("open");
        document.getElementById("navLabel").classList.remove("clickBtn");
        menu.checked = false;

    }
}

