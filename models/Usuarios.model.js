"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
var _sequelizeBcrypt = _interopRequireDefault(require("sequelize-bcrypt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Usuarios = _db.default.define('usuarios', {
  idusuario: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usarname: {
    type: _sequelize.DataTypes.STRING(20),
    allowNull: false
  },
  password: {
    type: _sequelize.DataTypes.TEXT('long'),
    allowNull: false
  },
  correo: {
    type: _sequelize.DataTypes.STRING(45),
    allowNull: false
  },
  tipodeusuario: {
    type: _sequelize.DataTypes.ENUM('cliente', 'vendedor'),
    allowNull: false
  }
});
(0, _sequelizeBcrypt.default)(Usuarios, {
  field: 'password',
  rounds: 12,
  compare: 'authenticate'
});
var _default = Usuarios;
exports.default = _default;