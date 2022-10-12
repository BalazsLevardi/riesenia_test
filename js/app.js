AOS.init({
    offset: 20,
    once: true,
});

const cocont = document.querySelector(".cookie");
const cookie = document.querySelector(".cookie_btn");

cookie.addEventListener("click", () => {
    cocont.classList.remove("active");
    localStorage.setItem("cookie-stored", "1");
});

setTimeout(() => {
    if (!localStorage.getItem("cookie-stored")) {
        cocont.classList.add("active");
    }
}, 350);

const formVal = document.querySelector(".needs-validation");
const sendbtn = document.querySelector(".sendbtn");

formVal.addEventListener("submit", event => {
    if (!formVal.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    formVal.classList.add("was-validated");
}, false);

$("#contactModal").on("hidden.bs.modal", function (e) {
    formVal.classList.remove("was-validated");
    $(this).find("input,textarea,select")
        .val("")
        .end()
        .find("input[type=checkbox], input[type=radio]")
        .prop("checked", "")
        .end();
});

sendbtn.addEventListener("click", function handleClick() {
    $("contactForm").find(".form-control:invalid").focus();
});

//is in viewport set animation
function isInViewportPink(item) {
    const rect = item.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        for (let i = 0; i < item.children.length; i++) {
            console.log(item.children[i].nodeName.toLowerCase());
            if (item.children[i].nodeName.toLowerCase() == "span") {
                item.children[i].classList.add("underpink");
            }
        }
    }
}

function isInViewportSvg(item) {
    const rect2 = item.getBoundingClientRect();

    if (rect2.top >= 0 && rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        for (let i = 0; i < item.children.length; i++) {
            item.children[i].style.animation = "svganim 2s ease forwards";
        }
    }
}

const mtopti = document.querySelector(".mtop_title");
const resti = document.querySelector(".res_title");
const majti = document.querySelector(".maj_title");
const svg1 = document.querySelector("#svg1");
const svg2 = document.querySelector("#svg2");
const svg3 = document.querySelector("#svg3");
const svg4 = document.querySelector("#svg4");

window.addEventListener("scroll", function () {
    isInViewportPink(mtopti);
    isInViewportPink(resti);
    isInViewportPink(majti);
    isInViewportSvg(svg1);
    isInViewportSvg(svg2);
    isInViewportSvg(svg3);
    isInViewportSvg(svg4);
});

window.addEventListener("load", function () {
    isInViewportPink(mtopti);
    isInViewportPink(resti);
    isInViewportPink(majti);
    isInViewportSvg(svg1);
    isInViewportSvg(svg2);
    isInViewportSvg(svg3);
    isInViewportSvg(svg4);
});





