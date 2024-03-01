import Cliente from './cliente.js'; // Importa la clase Cliente desde un archivo cliente.js
import Impuestos from './impuestos.js'; // Importa la clase Cliente desde un archivo impuestos.js

//valores para probar validacion
let deduccionMayor = 10000000; //para probar con una deduccion mayor al montoBrutoAnual
let brutoAnualNegativo = -10000; //para probar con un montoBrutoAnual negativo
let montoBrutoAnual = 300000; //para probar con un montoBrutoAnual real

// Función para validar y calcular los impuestos del cliente
const validacion = (cliente, impuesto) => {
    // Se verifica si el ingreso bruto anual y las deducciones son mayores que cero
    // y si el ingreso bruto anual es mayor que las deducciones
    if (impuesto.montoBrutoAnual > 0 && impuesto.deducciones > 0 && impuesto.montoBrutoAnual > impuesto.deducciones) {
        console.log(`Cliente: ${cliente._nombre}`);
        console.log(`Su monto bruto anual es de $${impuesto.montoBrutoAnual} y sus deducciones corresponden a un monto de $${impuesto.deducciones}`);
        console.log(`Dando como resultado un impuesto calculado de $${cliente.calcularImpuesto()}`);
    } else {
        console.log(`Cliente: ${cliente._nombre}`);
        console.log(`Su monto bruto anual es de $${impuesto.montoBrutoAnual} y sus deducciones corresponden a un monto de $${impuesto.deducciones}`);
        console.log('Queda exonerado de Impuestos Anuales');
    }
}

//cliente con montoBrutoAnual normal y mayor que las deducciones
let impuesto1 = new Impuestos(montoBrutoAnual, 30000);
let cliente1 = new Cliente('Javier', impuesto1);

//cliente con montoBrutoAnual negativo y menor que las deducciones
let impuesto2 = new Impuestos(brutoAnualNegativo, 30000);
let cliente2 = new Cliente('Esteban', impuesto2);

//cliente con montoBrutoAnual normal y con deducciones mayores
let impuesto3 = new Impuestos(montoBrutoAnual, deduccionMayor);
let cliente3 = new Cliente('Juan', impuesto3);

// Llama a la función de validación para calcular los impuestos del cliente para distintos casos
validacion(cliente1, impuesto1);
validacion(cliente2, impuesto2);
validacion(cliente3, impuesto3);
