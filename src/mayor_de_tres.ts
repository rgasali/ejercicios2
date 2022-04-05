//DECLARACION DE VARIABLES
let numero1 = document.getElementById("primerNumero");
let numero2 = document.getElementById("segundoNumero");
let numero3 = document.getElementById("tercerNumero");
let btnCalcMayor = document.getElementById("btnCalcMayor");
let valorNum1: number;
let valorNum2: number;
let valorNum3: number;
let valorMayor: number;

//CALCULAR CUAL DE LOS TRES NUMEROS ES MAYOR
btnCalcMayor.addEventListener("click", () => {
  valorNum1 = Number(numero1.value);
  valorNum2 = Number(numero2.value);
  valorNum3 = Number(numero3.value);

  if (valorNum1 > valorNum2 && valorNum1 > valorNum3) {
    valorMayor = Number(valorNum1);
  } else if (valorNum2 > valorNum1 && valorNum2 > valorNum3) {
    valorMayor = Number(valorNum2);
  } else if (valorNum3 > valorNum2 && valorNum3 > valorNum1) {
    valorMayor = Number(valorNum3);
  }

  //IMPRIME EN LA CONSOLA EL VALOR MAYOR
  switch (valorMayor) {
    case valorNum1:
      console.log("el numero mayor es ", valorMayor);

      break;
    case valorNum2:
      console.log("el numero mayor es ", valorMayor);

      break;
    case valorNum3:
      console.log("el numero mayor es ", valorMayor);

      break;

    default:
      console.log("no hay numeros ingresados");
      break;
  }
});

//PRUEBAS DE ESCRITORIO
//el sistema esta limitado para que solo utilicen numeros, no permite otros valores.
//valores: -5  5  10   resultado esperado: 10 resultado 10
//valores: 0  5  2   resultado esperado: 5 resultado 5
//valores: 1.4 15 3  resultado esperado: 15 resultado 15
//valores: 4  4  4  resultado esperado: 4 resultado: 4
//valores: 3  9  -  resultado esperado: 9 resultado: 9
//valores: -  -  -  resultado esperado: No hay numeros ingresados  Resultado: no hay numeros ingresados.
