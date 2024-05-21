"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Orden = _db.default.define('carrito', {
  idcarrito: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  platillos_idplatillos: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  usuario_idusuario: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  pagado: {
    type: _sequelize.DataTypes.TINYINT,
    allowNull: false,
    defaultValue: false
  },
  preferencias: {
    type: _sequelize.DataTypes.TEXT('long'),
    allowNull: true
  }
});
var _default = Orden;
exports.default = _default;