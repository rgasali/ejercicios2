//DECLARACION DE VARIABLES
let btnParImpar = document.getElementById("btnParImpar");
let numeroparimpar = document.getElementById("parOImpar");
let valorNumerico: number;
let calculoPar: number;

btnParImpar.addEventListener("click", () => {
  valorNumerico = Number(numeroparimpar.value);
  calculoPar = Number(valorNumerico) % 2;
  if (calculoPar == 0) {
    console.log(valorNumerico, "es par");
  } else console.log(valorNumerico, "es impar");
});
