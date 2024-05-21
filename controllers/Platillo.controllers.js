"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Platllo = _interopRequireDefault(require("../services/Platllo.service"));
var _guardarImagen = _interopRequireDefault(require("../utils/guardarImagen"));
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Platillos,
  Menus,
  Tiendas
} = _models.default;
const service = new _Platllo.default(Platillos);
class PlatilloController {
  insertar = async (req, res) => {
    try {
      const imagenP = await (0, _guardarImagen.default)({
        imagen: req.files.imagen,
        nomenclatura: 'tiendas'
      });
      const response = await service.crear({
        ...JSON.parse(req.body.contenido),
        imagen: `/static/media/imagenes/${imagenP}`
      });
      return res.status(201).json({
        msg: 'Platillo creado',
        data: response
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al ingresar un nuevo Platillo'
      });
      console.log('ola');
    }
  };
  buscar = async (req, res) => {
    try {
      const response = await Platillos.findAll({
        include: [{
          model: Menus
        }, {
          model: Tiendas
        }]
      });
      return res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener platillo'
      });
    }
  };
  buscarUno = async (req, res) => {
    try {
      const response = await service.obtenerUno(req.params.id);
      return res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener platillo'
      });
    }
  };
  actualizar = async (req, res) => {
    try {
      const response = await service.actualizar(req.body, req.params.idplatillos);
      return res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener platillo '
      });
    }
  };
  eliminar = async (req, res) => {
    try {
      const response = await service.eliminar(req.params.idplatillos);
      return res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al eliminar platillo'
      });
    }
  };
}
var _default = PlatilloController;
exports.default = _default;