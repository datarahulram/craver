const card_row_acordion_headers = document.querySelectorAll(
  ".card_row_acordion_header"
);
/*
Activar Nodos con clase activo
*/
function activateClassActive() {
  const wrapper_acordion_row_contenido_activos = document.querySelectorAll(
    ".wrapper_acordion_row_contenido.activo"
  );
  for (let nodoActivo of wrapper_acordion_row_contenido_activos) {
    nodoActivo.style.height = `${
      nodoActivo.querySelector(".card_row_acordion_contenido").offsetHeight
    }px`;
  }
}

window.addEventListener("load", function () {
  activateClassActive();
});
/*
-----------------------
*/
function removeClaseActivo(i) {
  for (let j = 0; j < card_row_acordion_headers.length; j++) {
    const nodoActivo = card_row_acordion_headers[j];
    const nodoPadre = nodoActivo.parentElement;
    const contenido_acordion = nodoPadre.querySelector(
      ".wrapper_acordion_row_contenido"
    );
    const image = nodoPadre.querySelector(
      ".card_row_acordion_contenedor_img img"
    );
    if (j != i && contenido_acordion.classList.contains("activo")) {
      image.src = "./fqassets/images/icons8-plus.svg";
      contenido_acordion.classList.remove("activo");
      contenido_acordion.style.height = "0px";
      nodoActivo.classList.remove("card_row_acordion_header--activo");
    }
  }
}

function toggleClasesAndImages(card_row_acordion_header) {
  const contenido_acordion =
    card_row_acordion_header.parentElement.querySelector(
      ".wrapper_acordion_row_contenido"
    );
  contenido_acordion.classList.toggle("activo");

  const image = card_row_acordion_header.querySelector(
    ".card_row_acordion_contenedor_img img"
  );
  if (contenido_acordion.classList.contains("activo")) {
    image.src = "./fqassets/images/icon-minus.svg";
    contenido_acordion.style.height = `${
      card_row_acordion_header.parentElement.querySelector(
        ".card_row_acordion_contenido"
      ).clientHeight
    }px`;
  } else {
    image.src = "./fqassets/images/icons8-plus.svg";
    contenido_acordion.style.height = "0px";
  }
}

for (let i = 0; i < card_row_acordion_headers.length; i++) {
  const card_row_acordion_header = card_row_acordion_headers[i];
  card_row_acordion_header.addEventListener("click", function () {
    removeClaseActivo(i);
    toggleClasesAndImages(card_row_acordion_header);
  });
}

/*
Control Acordion Teclado
*/

let indexAcordionElemento = -1;
document.onkeydown = function (evento) {
  if (evento.key == "ArrowDown") {
    removeHover();
    indexAcordionElemento =
      (indexAcordionElemento + 1) % card_row_acordion_headers.length;

    card_row_acordion_headers[indexAcordionElemento].classList.toggle(
      "card_row_acordion_header--activo"
    );
  }
  if (evento.key == "ArrowUp") {
    if (indexAcordionElemento == -1) {
      indexAcordionElemento = card_row_acordion_headers.length - 1;
    } else {
      indexAcordionElemento =
        indexAcordionElemento - 1 < 0
          ? card_row_acordion_headers.length - 1
          : indexAcordionElemento - 1;
    }

    removeHover();
    card_row_acordion_headers[indexAcordionElemento].classList.toggle(
      "card_row_acordion_header--activo"
    );
  }

  if (evento.key == "Enter" && indexAcordionElemento != -1) {
    removeHover();
    card_row_acordion_headers[indexAcordionElemento].click();
  }
};

function removeHover() {
  for (let nodo of card_row_acordion_headers) {
    nodo.classList.remove("card_row_acordion_header--activo");
  }
}
