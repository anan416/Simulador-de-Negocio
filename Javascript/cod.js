var imagenes = ["Imagenes/fondo1.png", "Imagenes/fondo2.png", "Imagenes/fondo3.png"];

var imagen = document.querySelector(".imgCarrousel");
imagen.setAttribute("src", imagenes[0]);

function enlace(){
    alert("El link aún no se encuentra disponible.");
};

function imagen1(){
    imagen.setAttribute("src", imagenes[0]);
}

function imagen2(){
    imagen.setAttribute("src", imagenes[1]);
}

function imagen3(){
    imagen.setAttribute("src", imagenes[2]);
}
