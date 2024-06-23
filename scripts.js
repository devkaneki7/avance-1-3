document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const nav = document.querySelector('nav');

    learnMoreBtn.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(75, 0, 130, 0.9)'; /* Roxo com opacidade */
        } else {
            nav.style.background = 'transparent';
        }
    });
});
