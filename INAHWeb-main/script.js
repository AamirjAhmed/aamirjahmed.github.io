let left = document.getElementById("left");
let right = document.getElementById("right");
let container = document.getElementById("container");

left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left")
}); 

left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left")
});

right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right")
});

right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right")
});