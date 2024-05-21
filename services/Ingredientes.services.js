"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class IngredientesServices {
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
  actualizar = async (req, id) => {
    console.log(req, id);
    try {
      const response = await this.modelo.update(req, {
        where: {
          idingrediente: id
        }
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  eliminar = async id => {
    try {
      const eliminar = await this.modelo.destroy({
        where: {
          idingrediente: id
        }
      });
      return eliminar;
    } catch (error) {
      throw error;
    }
  };
}
var _default = IngredientesServices;
exports.default = _default;