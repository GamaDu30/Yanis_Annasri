function scrollToPanel(panelId) {
    const panelElement = document.querySelector(`.${panelId}`);
    panelElement.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    const animateOnScrollElements = document.querySelectorAll('.slideIn');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.5
    });

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });
});