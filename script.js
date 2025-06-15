function scrollToPanel(panelId) {
    const panelElement = document.querySelector(`.${panelId}`);
    panelElement.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
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

//Popup logic
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.popup .close');

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function () {
        const title = this.dataset.title;
        const img = this.dataset.img;
        const description = this.dataset.description;
        const url = this.dataset.url;

        document.getElementById('popup-title').innerText = title;
        document.getElementById('popup-img').src = img;
        document.getElementById('popup-description').innerText = description;
        document.getElementById('popup-url').href = url;

        popup.classList.remove('hide');
        popup.style.display = 'block';
        void popup.offsetWidth; // force reflow
        popup.classList.add('show');
    });
});

function closePopup() {
    popup.classList.remove('show');
    popup.classList.add('hide');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // same as transition duration
}

closeBtn.addEventListener('click', closePopup);

window.addEventListener('click', function (e) {
    if (e.target === popup) {
        closePopup();
    }
});