"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//Clase que representa a un cliente.
var Cliente = /*#__PURE__*/function () {
  //Crea una instancia de Cliente.
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  //Obtiene el nombre del cliente
  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    }

    //Establece el nombre del cliente.
    ,
    set: function set(nombre) {
      this._nombre = nombre;
    }

    //Calcula el impuesto del cliente.
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
    }
  }]);
  return Cliente;
}();
var _default = Cliente;
exports["default"] = _default;