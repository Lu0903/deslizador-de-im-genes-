var imagenes = ["imagenes/FOTO 1 PASANTIAScopia.jpg",
                "imagenes/FOTO 2 PASANTIAS'copias.jpg",
                "imagenes/FOTO 3 PASANTIAS.jpg",
                "imagenes/FOTO 4 PASANTIAS.jpg",
                "imagenes/FOTO 5 PASANTIAS.jpg",
                "imagenes/FOTO 6 PASANTIAS.jpg",
                "imagenes/FOTO 7 PASANTIAS.jpg",
                "imagenes/FOTO 8 PASANTIAS.jpg",
                "imagenes/FOTO 9 PASANTIAS.jpg",
                "imagenes/FOTO 10 PASANTIAS.jpg"
              ];
              
              
document.querySelector(".img-slider").src = imagenes[0];

var SliderDerecho = document.querySelector(".icono-Derecho");
var SliderIzquierdo = document.querySelector(".icono-Izquierdo");
var Contador = 0;

function MoverDerecha() {
    Contador++;
    if (Contador > imagenes.length - 1) {
        Contador = 0;
    }
    document.querySelector(".img-slider").src = imagenes[Contador];
}

function MoverIzquierda() {
    Contador--;
    if (Contador < 0) {
        Contador = imagenes.length - 1;
    }
    document.querySelector(".img-slider").src = imagenes[Contador];
}


var Intervalo = setInterval(MoverDerecha, 2000);

SliderDerecho.addEventListener("click", function () {
    clearInterval(Intervalo);
    MoverDerecha();
    Intervalo = setInterval(MoverDerecha, 2000);
});

SliderIzquierdo.addEventListener("click", function () {
    clearInterval(Intervalo);
    moverIzquierda();
    Intervalo = setInterval(MoverDerecha, 2000);
});