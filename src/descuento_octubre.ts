//DECLARACION DE VARIABLES
let precioUnitario = document.getElementById("precioUnitario");
let cantidad = document.getElementById("cantidad");
let mes = document.getElementById("mes");
let btnValidarDescuento = document.getElementById("btnValidarDescuento");
let valorPrecioUnitario: number;
let valorCantidad: number;
let meselejido: string;
let subtotal: number;
let total: number;

btnValidarDescuento.addEventListener("click", () => {
  valorPrecioUnitario = Number(precioUnitario.value);
  valorCantidad = Number(cantidad.value);
  meselejido = String(mes.value);

  if (meselejido === "octubre" || "Octubre" || "OCTUBRE") {
    subtotal = Number(valorPrecioUnitario) * Number(valorCantidad);
    total = Number(subtotal * 0.75);
    console.log("aplica descuento", meselejido);
    console.log("total a pagar", total);
  } else {
    subtotal = Number(valorPrecioUnitario.value) * Number(valorCantidad.value);
    total = Number(subtotal.value);
    console.log(" no aplica descuento,total a pagar", total.value);
  }
});
