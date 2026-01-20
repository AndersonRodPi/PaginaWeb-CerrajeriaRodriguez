const menuToggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Menú móvil
menuToggle.addEventListener('click', () => {
    navMobile.classList.toggle('active');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('active');
    });
});

// Scroll suave para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// WhatsApp Popup Logic
document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappPopup = document.getElementById('whatsappPopup');
    const closePopup = document.getElementById('closePopup');

    // Abrir pop-up al hacer clic en el botón flotante
    whatsappBtn.addEventListener('click', () => {
        whatsappPopup.style.display = 'flex';
    });

    // Cerrar pop-up en la X
    closePopup.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que el clic se propague al botón de abajo
        whatsappPopup.style.display = 'none';
    });

    // Cerrar si se hace clic fuera del pop-up
    window.addEventListener('click', (e) => {
        if (!whatsappPopup.contains(e.target) && !whatsappBtn.contains(e.target)) {
            whatsappPopup.style.display = 'none';
        }
    });
});