"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Tiendas = _db.default.define('tienda', {
  idtiendas: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombredelatienda: {
    type: _sequelize.DataTypes.STRING(30),
    allowNull: false
  },
  tiempodepreparacion: {
    type: _sequelize.DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  distancia: {
    type: _sequelize.DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  dueno: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  imagen: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false,
    defaultValue: "otracosa"
  },
  coordenadas: {
    type: _sequelize.DataTypes.JSON,
    allowNull: true
  },
  clasificacion_tienda: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: true
  }
});
var _default = Tiendas;
exports.default = _default;