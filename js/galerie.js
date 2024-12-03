// Sélection des éléments
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const downloadBtn = document.getElementById("download-btn");
const galleryImages = document.querySelectorAll(".gallery img");

let currentIndex = 0;

// Fonction pour ouvrir le modal avec une image spécifique
function openModal(index) {
    currentIndex = index;
    modal.style.display = "block";
    modalImg.src = galleryImages[currentIndex].src;
    downloadBtn.href = galleryImages[currentIndex].src;
}

// Fonction pour fermer le modal
function closeModal() {
    modal.style.display = "none";
}

// Fonction pour passer à l'image suivante
function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    openModal(currentIndex);
}

// Fonction pour passer à l'image précédente
function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    openModal(currentIndex);
}

// Événements
galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => openModal(index));
});

closeBtn.addEventListener("click", closeModal);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Fermer le modal en cliquant en dehors de l'image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const yearSelect = document.getElementById("year-select");
    const gallery = document.getElementById("gallery");
    const images = gallery.querySelectorAll("img");

    yearSelect.addEventListener("change", function () {
        const selectedYear = this.value;

        images.forEach((img) => {
            const imgYear = img.getAttribute("data-year");
            if (selectedYear === "all" || imgYear === selectedYear) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });
});
