"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Menus = _interopRequireDefault(require("../models/Menus.model"));
var _Menus2 = _interopRequireDefault(require("../services/Menus.service"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const service = new _Menus2.default(_Menus.default);
class MenuController {
  crearMenu = async (req, res) => {
    try {
      const response = await service.crear(req.body);
      return res.status(201).json({
        msg: 'menu creado',
        data: response
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error,
        msg: 'error al ingresar menu'
      });
    }
  };
  eliminar = async (req, res) => {
    try {
      const response = await service.eliminar(req.params.idmenus);
      return res.status(200).json({
        success: true,
        response
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        response: error,
        msg: 'error al eliminar menu'
      });
    }
  };
}
var _default = MenuController;
exports.default = _default;