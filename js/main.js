const header = document.querySelector('header');
const hamburger = header.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    header.classList.toggle('menu-visible');
});

let right = document.querySelector(".right");
right.addEventListener("mouseover", changeColorRight);
right.addEventListener("mouseout", returnColor);
let left = document.querySelector(".left");
left.addEventListener("mouseover", changeColorLeft);
left.addEventListener("mouseout", returnColor);

function changeColorRight(event) {
    right.style.backgroundColor = "#e95dc6";
}
function changeColorLeft(event) {
    left.style.backgroundColor = "#e95dc6";
}
function returnColor(event) {
    right.style.backgroundColor = "#ff5e61";
    left.style.backgroundColor = "#ff5e61";
}