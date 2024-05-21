"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _Ingrediente = _interopRequireDefault(require("../controllers/Ingrediente.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
const controller = new _Ingrediente.default();
router.post('/crear', controller.insertar);
router.put('/actualizar/:ingrediente', controller.actualizar);
router.delete('/eliminar/:ingrediente', controller.eliminar);
var _default = router;
exports.default = _default;