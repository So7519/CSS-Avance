console.log("Script chargé avec succès !");
document.addEventListener('DOMContentLoaded', () => {
    // Navigation fluide
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Element with ID ${targetId} not found.`);
            }
        });
    });

    // Animation des sections au scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Section visible : ${entry.target.id}`); // Ajout pour débogage
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Validation de formulaire
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const message = contactForm.querySelector('textarea').value.trim();

            if (!name || !email || !message) {
                alert('Veuillez remplir tous les champs.');
                return;
            }

            alert(`Merci ${name}, votre message a bien été envoyé !`);
            contactForm.reset();
        });
    } else {
        console.error('Formulaire de contact introuvable.');
    }
});
