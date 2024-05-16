var nav = document.querySelector(".nav");
function NavViewer() {
    if (window.innerWidth < 1000) {
        if (nav.style.display === "none" || nav.style.display === "") {
            nav.style.display = "block";
        } else {
            nav.style.display = "none";
        }
    }
}
window.addEventListener('resize', function () {
    if (window.innerWidth >= 1000) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
});


function RightScroll() {
    var box = document.querySelector(".Scrolling-box");
    if (box) {
        box.scrollLeft += 100; // Kaydırma miktarı
    }
}