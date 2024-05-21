"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Tienda = _interopRequireDefault(require("../models/Tienda.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Clasificacion_tienda {
  constructor(modelo) {
    this.modelo = modelo;
    this.tiendasM = _Tienda.default;
    this.modelo.hasMany(this.tiendasM, {
      foreignKey: 'clasificacion_tienda'
    });
  }
  crear = async peticion => {
    try {
      const response = await this.modelo.create(peticion);
      return response;
    } catch (error) {
      throw error;
    }
  };
  obtener = async () => {
    try {
      const response = await this.modelo.findAll({
        include: [{
          model: this.tiendasM
        }]
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
var _default = Clasificacion_tienda;
exports.default = _default;