"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Calificaciones = _db.default.define('calificaciones', {
  idcalificaciones: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  calificacion: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  tiendas_idtiendas: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  }
});
var _default = Calificaciones;
exports.default = _default;