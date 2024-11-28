// Initialisation de la carte
var mymap = L.map('mapid').setView([48.864605, 2.237496], 14); // Coordonnées pour Paris par exemple

// Ajouter une couche OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Ajouter un marqueur pour l'emplacement de l'événement
var marker = L.marker([48.864605, 2.237496]).addTo(mymap); // Remplacez par les coordonnées de votre événement

// Détecter si l'utilisateur est sur mobile
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Adresse et lien Google Maps
var locationName = "Château de Longchamp, <br> 1 Carré de Longchamp, 75016 Paris";
var googleMapsLink = isMobile 
    ? "geo:48.864605,2.237496?q=" + encodeURIComponent(locationName) // Application native sur mobile
    : "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(locationName); // Navigateur sur desktop

// Ajouter une popup au marqueur
marker.bindPopup(
    "<div style='text-align: center;'>" +
    "<b>GALA de l'ESPCI</b><br>" +
    locationName + "<br>" +
    "<a href='" + googleMapsLink + "' target='_blank'>Lien vers Google Maps</a>" +
    "</div>"
).openPopup();
