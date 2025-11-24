// Diccionario de traducciones
const translations = {
  es: {
    header: "ISG AVENIDA CONSITUCION 34",
    welcome-msg: "BIENVENIDOS A VUESTRO APARTMENTO, AQUI ENCONTRAR LOS VIDEOS EXPLICATIVOS DEL USO DE ELECTRODOMESTICOS",
    welcome-msg-en: "WELCOME TO YOUR APARTMENT, HERE YOU CAN FIND VIDEOS EXPLICATORY OF HOW TO USE APPLIANCES.",
    apartment5: "APARTAMENTO 5",
    apartment6: "APARTAMENTO 6"
  },
  en: {
    header: "ISG AVENIDA CONSITUCION 34",
    welcome-msg: "WELCOME TO YOUR APARTMENT, HERE YOU CAN FIND VIDEOS EXPLANATORY OF HOW TO USE APPLIANCES.",
    welcome-msg-en: "",
    apartment5: "APARTMENT 5",
    apartment6: "APARTMENT 6"
  },
  fr: {
    header: "ISG AVENUE CONSTITUTION 34",
    welcome-msg: "BIENVENUE DANS VOTRE APPARTEMENT, VOUS TROUVEREZ ICI DES VIDÉOS EXPLICATIVES SUR L'UTILISATION DES APPAREILS",
    welcome-msg-en: "",
    apartment5: "APPARTEMENT 5",
    apartment6: "APPARTEMENT 6"
  }
};

// Cambia el idioma de la página según el parámetro 'lang'
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang][key] !== undefined && translations[lang][key] !== "") {
      el.textContent = translations[lang][key];
      el.style.display = "";
    } else {
      // Si no existe traducción o está vacío, ocultar el elemento (útil para duplicidades)
      el.style.display = "none";
    }
  });
}

// Inicializar la página en español
window.onload = function() {
  setLanguage('es');
};