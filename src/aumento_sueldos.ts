// DECLARACION DE VARIABLES
let sueldo = document.getElementById("sueldoActual");
let btnAumentoSueldo = document.getElementById("btnAumentoSueldo");
let valorSueldo: number;
let ValorSueldoAumentado: number;
let rango: string;

btnAumentoSueldo.addEventListener("click", () => {
  valorSueldo = Number(sueldo.value);
  console.log(valorSueldo);

  if (valorSueldo <= 15000) {
    rango = String("20%");
  } else if (valorSueldo > 15000 && valorSueldo <= 20000) {
    rango = String("10%");
  } else if (valorSueldo > 20000 && valorSueldo <= 25000) {
    rango = String("5%");
  } else rango = String("sinAumento");

  console.log(rango);

  switch (rango) {
    case "20%":
      ValorSueldoAumentado = Number(valorSueldo * 1.2);
      console.log("su sueldo aumento un 20% ahora cobrara");
      console.log(ValorSueldoAumentado);

      break;
      case "10%":
      ValorSueldoAumentado = Number(valorSueldo * 1.1);
      console.log("su sueldo aumento un 10% ahora cobrara");
      console.log(ValorSueldoAumentado);

      break;
      case "5%":
      ValorSueldoAumentado = Number(valorSueldo * 1.05);
      console.log("su sueldo aumento un 5% ahora cobrara");
      console.log(ValorSueldoAumentado);
      
      break;
      default:"sinAumento":
      ValorSueldoAumentado = Number(valorSueldo);
      console.log("su sueldo no ha aumentado cobrara");
      console.log(ValorSueldoAumentado);
      break;
  }
});


