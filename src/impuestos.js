//Clase que representa los impuestos de un cliente.
class Impuestos {
    //Crea una instancia de Cliente.
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    //Obtiene el monto bruto anual sujeto a impuestos.
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    //Establece el monto bruto anual sujeto a impuestos.
    set montoBrutoAnual(montoBrutoAnual) {
        this._montoBrutoAnual = montoBrutoAnual;
    }

    //Obtiene el monto total de deducciones aplicables.
    get deducciones() {
        return this._deducciones;
    }

    //Establece el monto total de deducciones aplicables.
    set deducciones(deducciones) {
        this._deducciones = deducciones;
    }
}

export default Impuestos;
