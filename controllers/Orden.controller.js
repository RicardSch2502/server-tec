"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Orden = _interopRequireDefault(require("../models/Orden.model"));
var _Orden2 = _interopRequireDefault(require("../services/Orden.services"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const service = new _Orden2.default(_Orden.default);
class OrdenController {
  insertar = async (req, res) => {
    console.log(req);
    try {
      const response = await service.crear(req.body);
      return res.status(201).json({
        msg: 'Orden creado',
        data: response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al ingresar una nueva orden'
      });
      console.log('ola');
    }
  };
  actualizar = async (req, res) => {
    try {
      const response = await service.actualizar(req.body, req.params.idorden);
      return res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener orden '
      });
    }
  };
  eliminar = async (req, res) => {
    try {
      const response = await service.eliminar(req.params.idorden);
      return res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al eliminar orden'
      });
    }
  };
}
var _default = OrdenController;
exports.default = _default;