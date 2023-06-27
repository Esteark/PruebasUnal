const buttons = document.querySelector(".buttons");
const secMain__info = document.querySelector(".secMain__info");
const btnDes = document.getElementById("btnDes");
const btnFa = document.getElementById("btnFa");
const btnPos = document.getElementById("btnPos");
const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const sec3 = document.querySelector(".sec3");

//funcion para arrancar con el carrusel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

//Función para poner o quitar la clase active (El color amarillo de fondo en los botones)
const deletePutClassActive = (idElement) => {
  Array.from(buttons.children).forEach((item) => {
    if (idElement !== item.id) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
};
//Funcion para ocultar o mostrar una sección y anexarle una animación tenue de entrada
const addAnimation = (idElement) => {
  Array.from(secMain__info.children).forEach((item) => {
    if (idElement === item.id) {
      item.classList.remove("hidden");
      item.classList.add("slide-in-fwd-center");
    } else {
      item.classList.add("hidden");
      item.classList.remove("slide-in-fwd-center");
    }
  });
};
//Eventos clic para los botones del menu

btnDes.addEventListener("click", () => {
  deletePutClassActive("btnDes");
  addAnimation("sec1");
});
btnFa.addEventListener("click", () => {
  deletePutClassActive("btnFa");
  addAnimation("sec2");
});
btnPos.addEventListener("click", () => {
  deletePutClassActive("btnPos");
  addAnimation("sec3");
});

//Cuando todo el docuemnto se haya cargado ejecute las dos siguientes funciones
window.addEventListener("DOMContentLoaded", () => {
  deletePutClassActive("btnDes");
  addAnimation("sec1");
});
