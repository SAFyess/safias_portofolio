// Petit effet fluide pour l'entrée
document.addEventListener('DOMContentLoaded', () => {
    const leftContent = document.querySelector('.content-wrapper');
    const rightDecor = document.querySelector('.decor-container');
    
    leftContent.style.opacity = '0';
    leftContent.style.transform = 'translateX(-50px)';
    
    setTimeout(() => {
        leftContent.style.transition = 'all 1s ease-out';
        leftContent.style.opacity = '1';
        leftContent.style.transform = 'translateX(0)';
    }, 300);
});

document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-number');
    const speed = 800; // Plus le chiffre est bas, plus c'est rapide

    const animateStats = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateStats(counter), 50);
        } else {
            counter.innerText = target;
        }
    };

    // Détection du scroll pour lancer l'animation quand on arrive sur la section
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => animateStats(stat));
                observer.unobserve(entry.target); // Ne le fait qu'une seule fois
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats-section');
    if(statsSection) observer.observe(statsSection);
});
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    
    // Cache tous les contenus
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Retire la classe 'active' de tous les boutons
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Affiche le contenu actuel et ajoute la classe 'active' au bouton
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Mise à jour des boutons
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filtrage des cartes
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 10);
        } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
        }
    });
}