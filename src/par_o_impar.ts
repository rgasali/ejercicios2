//DECLARACION DE VARIABLES
let btnParImpar = document.getElementById("btnParImpar");
let numeroparimpar = document.getElementById("parOImpar");
let valorNumerico: number;
let calculoPar: number;

btnParImpar.addEventListener("click", () => {
  valorNumerico = Number(numeroparimpar.value);
  calculoPar = Number(valorNumerico) % 2;
  if (calculoPar === 0) {
    console.log(valorNumerico, "es par");
  } else console.log(valorNumerico, "es impar");
  if (valorNumerico === 0) {
    console.log("el numero elegido es 0");
  }
});

//PRUEBAS DE ESCRITORIO
//el sistema esta limitado para que solo utilicen numeros, no permite otros valores.
// numeros positivos devuelve correctamente si es par o impar
// numeros negativos devuelve correctamente si es par o impar
// numero cero devuelve que es un numero par y que el numero elegido es 0
// ************ se probo 22-1 (y otras variantes con el signo negativo en medio) y devuelve que el numero elegido es 0
