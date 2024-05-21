"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Clasificacion_tienda = _interopRequireDefault(require("../models/Clasificacion_tienda.model"));
var _Usuarios = _interopRequireDefault(require("../models/Usuarios.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class TiendaServices {
  constructor(modelo) {
    this.modelo = modelo;
    this.usuariosModel = _Usuarios.default;
    this.clasificacionModel = _Clasificacion_tienda.default;
    this.modelo.belongsTo(this.usuariosModel, {
      foreignKey: 'dueno',
      as: 'dueno_informacion'
    });
    this.modelo.belongsTo(this.clasificacionModel, {
      foreignKey: 'clasificacion_tienda',
      as: 'clasificacion_tienda_information'
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
          model: this.usuariosModel,
          as: 'dueno_informacion'
        }, {
          model: this.clasificacionModel,
          as: 'clasificacion_tienda_information'
        }]
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  actualizar = async (req, id) => {
    try {
      const response = await this.modelo.update(req, {
        where: {
          idtiendas: id
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
          idtiendas: id
        }
      });
      return eliminar;
    } catch (error) {
      throw error;
    }
  };
}
var _default = TiendaServices;
exports.default = _default;