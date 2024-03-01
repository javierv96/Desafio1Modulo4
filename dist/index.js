"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Importa la clase Cliente desde un archivo cliente.js
// Importa la clase Cliente desde un archivo impuestos.js

//valores para probar validacion
var deduccionMayor = 10000000; //para probar con una deduccion mayor al montoBrutoAnual
var brutoAnualNegativo = -10000; //para probar con un montoBrutoAnual negativo
var montoBrutoAnual = 300000; //para probar con un montoBrutoAnual real

// Función para validar y calcular los impuestos del cliente
var validacion = function validacion(cliente, impuesto) {
  // Se verifica si el ingreso bruto anual y las deducciones son mayores que cero
  // y si el ingreso bruto anual es mayor que las deducciones
  if (impuesto.montoBrutoAnual > 0 && impuesto.deducciones > 0 && impuesto.montoBrutoAnual > impuesto.deducciones) {
    console.log("Cliente: ".concat(cliente._nombre));
    console.log("Su monto bruto anual es de $".concat(impuesto.montoBrutoAnual, " y sus deducciones corresponden a un monto de $").concat(impuesto.deducciones));
    console.log("Dando como resultado un impuesto calculado de $".concat(cliente.calcularImpuesto()));
  } else {
    console.log("Cliente: ".concat(cliente._nombre));
    console.log("Su monto bruto anual es de $".concat(impuesto.montoBrutoAnual, " y sus deducciones corresponden a un monto de $").concat(impuesto.deducciones));
    console.log('Queda exonerado de Impuestos Anuales');
  }
};

//cliente con montoBrutoAnual normal y mayor que las deducciones
var impuesto1 = new _impuestos["default"](montoBrutoAnual, 30000);
var cliente1 = new _cliente["default"]('Javier', impuesto1);

//cliente con montoBrutoAnual negativo y menor que las deducciones
var impuesto2 = new _impuestos["default"](brutoAnualNegativo, 30000);
var cliente2 = new _cliente["default"]('Esteban', impuesto2);

//cliente con montoBrutoAnual normal y con deducciones mayores
var impuesto3 = new _impuestos["default"](montoBrutoAnual, deduccionMayor);
var cliente3 = new _cliente["default"]('Juan', impuesto3);

// Llama a la función de validación para calcular los impuestos del cliente para distintos casos
validacion(cliente1, impuesto1);
validacion(cliente2, impuesto2);
validacion(cliente3, impuesto3);