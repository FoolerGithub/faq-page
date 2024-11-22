const faqHeaders = document.querySelectorAll('article .header-container');

faqHeaders.forEach((header, i) => {
    header.addEventListener("click", function() {
        header.nextElementSibling.classList.toggle("active")

        const open = header.querySelector(".header-container .open");
        const close = header.querySelector(".header-container .close");

        if (header.nextElementSibling.classList.contains("active")) {
            open.classList.remove("active");
            close.classList.add("active");
        } else {
            open.classList.add("active");
            close.classList.remove("active");
        }
    });
});