"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Clasificacion = _db.default.define('clasificacion_tienda', {
  idclasificacion_tienda: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  nombre_clasificacion: {
    type: _sequelize.DataTypes.STRING(45),
    allowNull: false
  }
}, {
  freezeTableName: true
});
var _default = Clasificacion;
exports.default = _default;