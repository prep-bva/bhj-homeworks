const navigation = document.querySelector(".tab__navigation");
const contents = document.querySelectorAll(".tab__content");
navigation.addEventListener("click", function(e) {
    if (e.target.classList.contains("tab")) {
        const selectedTab = e.target;
        navigation.querySelector(".tab_active").classList.remove("tab_active");
        selectedTab.classList.add("tab_active");
        contents.forEach((content, idx) => {
            if (selectedTab.textContent.trim() === navigation.children[idx].textContent.trim()) {
                contents.forEach(c => c.classList.remove("tab__content_active"));
                content.classList.add("tab__content_active");
            }
        });
    }
});