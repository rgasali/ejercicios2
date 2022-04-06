//DECLARACION DE VARIABLES
let btnParImpar = document.getElementById("btnParImpar");
let numeroparimpar = document.getElementById("parOImpar");
let valorNumerico: number;
let calculoPar: number;

btnParImpar.addEventListener("click", () => {
  valorNumerico = Number(numeroparimpar.value);
  calculoPar = Number(valorNumerico.value);
  console.log(calculoPar);
  console.log(valorNumerico);
});
