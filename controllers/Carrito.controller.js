"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = _interopRequireDefault(require("../models"));
var _Carrito = _interopRequireDefault(require("../services/Carrito.services"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Carrito,
  Platillos,
  Usuarios
} = _models.default;
const service = new _Carrito.default(Carrito);
class CarritoController {
  insertar = async (req, res) => {
    const {
      platillos_idplatillos,
      cantidad,
      preferencias
    } = req.body;
    try {
      const response = await Carrito.create({
        platillos_idplatillos,
        usuario_idusuario: req.usuario.idusuario,
        cantidad,
        preferencias
      });
      res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al ingresar un nuevo '
      });
      console.log('ola');
    }
  };
  obtener = async (req, res) => {
    try {
      const response = await Carrito.findAll({
        include: [{
          model: Platillos,
          as: "platillos"
        }, {
          model: Usuarios
        }]
      });
      res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al ingresar un nuevo '
      });
      console.log('ola');
    }
  };
  eliminar = async (req, res) => {
    try {
      const response = await Carrito.destroy({
        where: {
          idcarrito: req.params.id
        }
      });
      res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al elmiinar un nuevo '
      });
      console.log('ola');
    }
  };
}
var _default = CarritoController;
exports.default = _default;