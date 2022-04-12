//multiplos de 2 y de 3

//variables conocidas

const cotaInferior: number = 1;
const cotaSuperior: number = 100;

//variables que no conozco
let esMultiploDeDos: boolean;
let esMultiploDeTres: boolean;
let multiplos: string = "";

for (let i = cotaInferior; i <= cotaSuperior; i++) {
  esMultiploDeDos = i % 2 === 0;
  esMultiploDeTres = i % 3 === 0;
  if (esMultiploDeDos || esMultiploDeTres) {
    multiplos += " " + i;
  }
}
console.log(
  "los multiplos entre " +
    cotaInferior +
    " y " +
    cotaSuperior +
    " son" +
    multiplos
);
