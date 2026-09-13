document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".menu-item");

    items.forEach((item, index) => {
        // Initial hidden state
        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";
        
        // Animate each item with staggered delay
        setTimeout(() => {
            item.style.transition = "all 0.8s ease";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 200);
    });
});
