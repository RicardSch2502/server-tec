"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Platillos = _db.default.define('platillo', {
  idplatillos: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: _sequelize.DataTypes.STRING(20),
    allowNull: false
  },
  costo: {
    type: _sequelize.DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  tiendas_idtiendas: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  imagen: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  descripcion: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  idmenus: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  }
});
var _default = Platillos;
exports.default = _default;