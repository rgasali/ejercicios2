import "./styles.css";
//declaracion de variables//
//let btnEnv = document.getElementById("btnEnviar");
//let dato = document.getElementById("dato");
//let rotulo = document.getElementById("rotulo");

//let base: number = 20;
//let altura: number = 5;

//console.log("el resultado de base por altura es " base * altura);
//btnEnv.addEventListener("click", () => {
//console.log("el dato ingresado es ", dato.value);
//});

// Declaración de variables
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let precioFinal: number;
let precio: number;
let descuento: number;
//declaracion de variables ejercicio tiempos auto de carrera
let btnTiempos = <HTMLButtonElement>document.getElementById("btnTiempos");
let vuelta1 = <HTMLInputElement>document.getElementById("vuelta1");
let vuelta2 = <HTMLInputElement>document.getElementById("vuelta2");
let vuelta3 = <HTMLInputElement>document.getElementById("vuelta3");
let vuelta4 = <HTMLInputElement>document.getElementById("vuelta4");
let tiempoVuelta1: number;
let tiempoVuelta2: number;
let tiempoVuelta3: number;
let tiempoVuelta4: number;
let tiempoPromedio: number;

// Resto del código
btnEnviar.addEventListener("click", () => {
  // Acá va nuestro código. Se ejecuta al hacer click en el botón Enviar
  precio = Number(dato1.value);
  rotulo1.innerHTML = "Introduzca su nombre"; // Cambiamos el texto del rótulo
  descuento = (Number(dato2.value) * Number(precio)) / 100;
  precioFinal = Number(precio) - Number(descuento);
  console.log("el precio final es ", precioFinal);
});

// Tiempos de carrera
btnTiempos.addEventListener("click", () => {
  tiempoVuelta1 = Number(vuelta1.value);
  tiempoVuelta2 = Number(vuelta2.value);
  tiempoVuelta3 = Number(vuelta3.value);
  tiempoVuelta4 = Number(vuelta4.value);
  tiempoPromedio =
    Number(
      Number(vuelta1.value) +
        Number(vuelta2.value) +
        Number(vuelta3.value) +
        Number(vuelta4.value)
    ) / 4;
  console.log("su promedio de tiempo es ", tiempoPromedio);
});
