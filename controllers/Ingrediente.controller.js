"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Ingredientes = _interopRequireDefault(require("../models/Ingredientes.model"));
var _Ingredientes2 = _interopRequireDefault(require("../services/Ingredientes.services"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const service = new _Ingredientes2.default(_Ingredientes.default);
class IngredienteController {
  insertar = async (req, res) => {
    console.log(req);
    try {
      const response = await service.crear(req.body);
      return res.status(201).json({
        msg: 'Ingredinete creado',
        data: response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al ingresar un nuevo ingrediente'
      });
      console.log('ola');
    }
  };
  actualizar = async (req, res) => {
    try {
      const response = await service.actualizar(req.body, req.params.idingrediente);
      return res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener ingrediente '
      });
    }
  };
  eliminar = async (req, res) => {
    try {
      const response = await service.eliminar(req.params.idingrediente);
      return res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al eliminar ingrediente'
      });
    }
  };
}
var _default = IngredienteController;
exports.default = _default;