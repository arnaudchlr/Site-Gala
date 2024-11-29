// Date cible du gala
const dateCible = new Date('December 8, 2024 19:00:00').getTime();

// Fonction pour mettre à jour le compte à rebours
function mettreAJourCountdown() {
    const maintenant = new Date().getTime();
    const tempsRestant = dateCible - maintenant;

    if (tempsRestant > 0) {
        const jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
        const heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);

        document.getElementById('jours').textContent = jours;
        document.getElementById('heures').textContent = heures;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('secondes').textContent = secondes;
    } else {
        document.querySelector('.countdown-container').innerHTML = "<p>Le gala a commencé !</p>";
    }
}

// Met à jour le compte à rebours toutes les secondes
setInterval(mettreAJourCountdown, 1000);
