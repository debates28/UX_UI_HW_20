var loader = document.querySelector(".preLoader")

// window.addEventListener("click", vanish);

function vanish() {
    loader.classList.add("disappear")
}

setTimeout(() => {
    vanish();
    var webpage = document.querySelector(".webpage")
    webpage.classList.remove("webpage")
}, 3);

// 3500