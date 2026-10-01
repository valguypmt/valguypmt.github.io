document.addEventListener("DOMContentLoaded", () => {
    // Reveal all sections smoothly when scrolling into view
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});