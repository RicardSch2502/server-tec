"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Menus = _interopRequireDefault(require("../models/Menus.model"));
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Tiendas
} = _models.default;
class PlatilloServices {
  constructor(modelo) {
    this.modelo = modelo;
    this.menuM = _Menus.default;
    this.modelo.belongsTo(this.menuM, {
      foreignKey: 'idmenus'
    });
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
  obtener = async () => {
    try {
      const response = await this.modelo.findAll({
        include: [{
          model: this.menuM
        }, {
          model: Tiendas
        }]
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  obtenerUno = async idtienda => {
    try {
      const response = await this.modelo.findAll({
        where: {
          tiendas_idtiendas: idtienda
        },
        include: [{
          model: this.menuM
        }]
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  actualizar = async (req, id) => {
    console.log(req, id);
    try {
      const response = await this.modelo.update(req, {
        where: {
          idplatillos: id
        }
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  eliminar = async id => {
    console.log(id);
    try {
      const eliminar = await this.modelo.destroy({
        where: {
          idplatillos: id
        }
      });
      return eliminar;
    } catch (error) {
      throw error;
    }
  };
}
var _default = PlatilloServices;
exports.default = _default;