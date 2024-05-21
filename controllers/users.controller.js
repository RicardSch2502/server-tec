"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Users = require("../services/Users.services");
var _auth = require("../middlewares/auth");
const controller = {
  login: null,
  //
  crearUsuario: null,
  //
  obtenerPermisos: null,
  //
  asignarPermisos: null,
  obtenerRoles: null
};
controller.crearUsuario = async (req, res) => {
  try {
    const response = await (0, _Users.crearUsuario)({
      ...req.body,
      rol: 'administrador'
    });
    const usuario = req.usuario;
    const isAdmin = usuario.permisos.some(permiso => permiso.idpermiso === 1);
    if (!isAdmin) throw {
      code: 403,
      msg: 'Recurso no autorizado para usuario',
      success: false
    };
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al crear usuario'
    });
  }
};
controller.obtenerPermisos = async (req, res) => {
  try {
    const response = await (0, _Users.obtenerPermisos)();
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener permisos'
    });
  }
};
controller.obtenerRoles = async (req, res) => {
  try {
    const response = await (0, _Users.obtenerRolesPermisos)();
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener roles'
    });
  }
};
controller.asignarPermisos = async (req, res) => {
  try {
    const response = await (0, _Users.obtenerRolesPermisos)();
    res.status(200).json({
      success: true,
      response
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al obtener permisos'
    });
  }
};
controller.login = async (req, res) => {
  try {
    const response = await (0, _Users.login)(req.body);
    const token = await (0, _auth.sing)(response.dataValues);
    res.status(200).json({
      success: true,
      response: {
        token,
        ...response.dataValues
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error contraseña o usuario incorrectos'
    });
  }
};
var _default = controller;
exports.default = _default;