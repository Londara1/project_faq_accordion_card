let faqs = document.querySelectorAll(".faq");
let activeFaq = null;

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        if (activeFaq && activeFaq !== faq) {
            activeFaq.classList.remove("active");
        }
        faq.classList.toggle("active");
        activeFaq = faq.classList.contains("active") ? faq : null;
    });
});