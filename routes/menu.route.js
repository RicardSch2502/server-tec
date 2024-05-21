"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _menu = _interopRequireDefault(require("../controllers/menu.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
const controller = new _menu.default();
router.post("/crear", controller.crearMenu);
router.delete('/eliminar/:idmenus', controller.eliminar);
var _default = router;
exports.default = _default;