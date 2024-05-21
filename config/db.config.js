"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelize = require("sequelize");
var _dotenv = require("dotenv");
(0, _dotenv.config)();
const {
  NAME_DB,
  USER_DB,
  PASSWORD_DB,
  HOST_DB,
  PORT_DB
} = process.env;
const sequelize = new _sequelize.Sequelize(NAME_DB, USER_DB, PASSWORD_DB, {
  host: HOST_DB,
  port: Number(PORT_DB),
  dialect: 'mysql'
});
sequelize.authenticate().then(() => console.log('conectado correctamente a la base de datos')).catch(err => console.log(err));
var _default = sequelize;
exports.default = _default;