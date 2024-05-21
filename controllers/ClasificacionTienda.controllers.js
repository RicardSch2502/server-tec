"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Clasificacion_tienda = _interopRequireDefault(require("../models/Clasificacion_tienda.model"));
var _Clasificacion_tienda2 = _interopRequireDefault(require("../services/Clasificacion_tienda.service"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const service = new _Clasificacion_tienda2.default(_Clasificacion_tienda.default);
class ClasificacionTienda {
  insertar = async (req, res) => {
    console.log({
      req,
      res
    });
    try {
      const response = await service.crear(req.body);
      return res.status(201).json({
        msg: 'Usuario creado',
        data: response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al crear usuario, verifique de nuevo los datos'
      });
    }
  };
  buscar = async (req, res) => {
    try {
      console.log(req.usuario);
      const response = await service.obtener();
      return res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener '
      });
    }
  };
}
var _default = ClasificacionTienda;
exports.default = _default;