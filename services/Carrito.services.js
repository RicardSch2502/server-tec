"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class CarritoServices {
  constructor(modelo) {
    this.modelo = modelo;
  }
  crear = async peticion => {
    console.log(peticion);
    try {
      const response = await this.modelo.create(peticion);
      return response;
    } catch (error) {
      throw error;
    }
  };
  eliminar = async id => {
    try {
      const eliminar = await this.modelo.destroy({
        where: {
          idcarrito: id
        }
      });
      return eliminar;
    } catch (error) {
      throw error;
    }
  };
}
var _default = CarritoServices;
exports.default = _default;