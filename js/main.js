const header = document.querySelector('header');
const hamburger = header.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    header.classList.toggle('menu-visible');
});

let main = document.querySelector("main");
main.addEventListener('wheel', isKeyPressed);

function isKeyPressed(event) {
    let x = document.getElementById("demo");
    if (event.ctrlKey) {
        x.innerHTML = "Jūs ne CTRL spauskit, o rinkitės!!";
    } else {
        x.innerHTML = "Dar neišsirinkote?";
    }
}
isKeyPressed;