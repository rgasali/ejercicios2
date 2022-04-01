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

// Resto del código
btnEnviar.addEventListener("click", () => {
  // Acá va nuestro código. Se ejecuta al hacer click en el botón Enviar
  precio = Number(dato1.value);
  rotulo1.innerHTML = "Introduzca su nombre"; // Cambiamos el texto del rótulo
  descuento = Number(precio) / Number(dato2.value);
  precioFinal = Number(precio) - Number(descuento);
  console.log("el precio final es ", precioFinal);
});
