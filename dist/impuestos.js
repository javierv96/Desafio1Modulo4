"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//Clase que representa los impuestos de un cliente.
var Impuestos = /*#__PURE__*/function () {
  //Crea una instancia de Cliente.
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  //Obtiene el monto bruto anual sujeto a impuestos.
  _createClass(Impuestos, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual;
    }

    //Establece el monto bruto anual sujeto a impuestos.
    ,
    set: function set(montoBrutoAnual) {
      this._montoBrutoAnual = montoBrutoAnual;
    }

    //Obtiene el monto total de deducciones aplicables.
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    }

    //Establece el monto total de deducciones aplicables.
    ,
    set: function set(deducciones) {
      this._deducciones = deducciones;
    }
  }]);
  return Impuestos;
}();
var _default = Impuestos;
exports["default"] = _default;