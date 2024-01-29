"use client";

console.log("Hola mundo");

const $button = document.getElementsByClassName("toggleButton")[0];
let navbar = document.getElementById("navbar-aux");
let width = document.getElementsByClassName("navbar-container")[0].clientWidth;

if (!navbar) {
    navbar = document.createElement("style");
    navbar.id = "navbar-aux";
    document.head.appendChild(navbar);
}

navbar.innerHTML = `#content {margin-left: calc(5rem + ${width}px)}`;

document.addEventListener("click", (e) => {
    if (e.target == $button) {
        let width = document.getElementsByClassName("navbar-container")[0].clientWidth;
        console.log("Hola click");

        if (document.getElementsByClassName("navbar")[0].classList.contains("expanded")) {
            navbar.innerHTML = `#content {margin-left: calc(5rem + ${width}px)}`;
        }

        if (document.getElementsByClassName("navbar")[0].classList.contains("collapsed")) {
            navbar.innerHTML = `#content {margin-left: calc(5rem + ${width}px)}`;
        }
    }
});

