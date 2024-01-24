function scrollToPanel(panelId) {
    const panelElement = document.querySelector(`.${panelId}`);
    panelElement.scrollIntoView({ behavior: 'smooth' });
}
