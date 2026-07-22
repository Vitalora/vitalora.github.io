// ===============================
// Vitalora Script V2
// Accordion + Language System
// ===============================

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {

accordion.addEventListener("click", function () {

this.classList.toggle("active");

const panel = this.nextElementSibling;

if(panel.style.display==="block"){

panel.style.display="none";

}else{

panel.style.display="block";

}

});

});

const translations={

en:{

subtitle:"Choose a Wellness Category",

weightTitle:"🍵 Weight Wellness",

matchaTitle:"🍵 Matcha Series",

countryTitle:"▼ View Available Countries",

usaCountry:"🇺🇸 United States & Puerto Rico",

usaProduct:"🍵 Matcha Suri",

mexicoCountry:"🇲🇽 México",

mexicoProduct:"🍵 Matcha Suri",

peruCountry:"🇵🇪 Perú",

peruProduct:"🍵 Matcha Slim",

sleepTitle:"😴 Sleep & Comfort",

beautyTitle:"✨ Beauty & Skin",

heartTitle:"❤️ Heart Health",

fitnessTitle:"💪 Fitness & Energy",

coming:"Coming Soon"

},

es:{

subtitle:"Elige una categoría de bienestar",

weightTitle:"🍵 Bienestar y Peso",

matchaTitle:"🍵 Serie Matcha",

countryTitle:"▼ Ver países disponibles",

usaCountry:"🇺🇸 Estados Unidos y Puerto Rico",

usaProduct:"🍵 Matcha Suri",

mexicoCountry:"🇲🇽 México",

mexicoProduct:"🍵 Matcha Suri",

peruCountry:"🇵🇪 Perú",

peruProduct:"🍵 Matcha Slim",

sleepTitle:"😴 Sueño y Descanso",

beautyTitle:"✨ Belleza y Piel",

heartTitle:"❤️ Salud del Corazón",

fitnessTitle:"💪 Energía y Fitness",

coming:"Próximamente"

}

};

function setLanguage(lang){

const t = translations[lang];

document.getElementById("subtitle").textContent = t.subtitle;

document.getElementById("weightTitle").textContent = t.weightTitle;

document.getElementById("matchaTitle").textContent = t.matchaTitle;

document.getElementById("countryTitle").textContent = t.countryTitle;

document.getElementById("usaCountry").textContent = t.usaCountry;

document.getElementById("usaProduct").textContent = t.usaProduct;

document.getElementById("mexicoCountry").textContent = t.mexicoCountry;

document.getElementById("mexicoProduct").textContent = t.mexicoProduct;

document.getElementById("peruCountry").textContent = t.peruCountry;

document.getElementById("peruProduct").textContent = t.peruProduct;

document.getElementById("sleepTitle").textContent = t.sleepTitle;

document.getElementById("beautyTitle").textContent = t.beautyTitle;

document.getElementById("heartTitle").textContent = t.heartTitle;

document.getElementById("fitnessTitle").textContent = t.fitnessTitle;

document.getElementById("coming1").textContent = t.coming;

document.getElementById("coming2").textContent = t.coming;

document.getElementById("coming3").textContent = t.coming;

document.getElementById("coming4").textContent = t.coming;

localStorage.setItem("language",lang);
  
  document.addEventListener("DOMContentLoaded", function () {

document.getElementById("enBtn").addEventListener("click", function () {
    setLanguage("en");
});

document.getElementById("esBtn").addEventListener("click", function () {
    setLanguage("es");
});

const savedLanguage = localStorage.getItem("language") || "en";

setLanguage(savedLanguage);

});

}
