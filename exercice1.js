let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Contructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : 3,
    Autonomie : "450km",
    vitesseMaxi : "120km/h"
};

let voitureImg = "url(" + voiture.imgUrl +")";

document.getElementById('carsName').innerHTML = voiture.Nom;

document.getElementById('carsInformation').innerHTML =
    voiture.nombresRoues + " roues. Encore heureux!" + "<br>" + "<br>" +
    voiture.nombrePortes + " portes" + "<br>" +
    "Couleur disponible: " + voiture.Couleur + "<br>" +
    "Constructeur: " + voiture.Contructeur + "<br>" +
    "Carburant: " + voiture.Carburant + "<br>" +
    "Autonomie: " + voiture.Autonomie + "<br>" +
    "Vitesse Max: " + voiture.vitesseMaxi + "<br>";
