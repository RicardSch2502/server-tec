"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Ingredientes = _db.default.define('ingredientes', {
  idingredientesadicionales: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  nombre: {
    type: _sequelize.DataTypes.STRING(20),
    allowNull: false
  },
  cantidad: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  platillos_idplatillos: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  }
});
var _default = Ingredientes;
exports.default = _default;