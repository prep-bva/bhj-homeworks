function isVisible(element) {
    var rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= window.innerHeight + rect.height * 0.75);
}

function handleScroll() {
    let reveals = document.querySelectorAll(".reveal");
    for (let block of reveals) {
        if (isVisible(block)) {
            block.classList.add("reveal_active");
        }
    }
}
window.addEventListener("scroll", handleScroll);
handleScroll();