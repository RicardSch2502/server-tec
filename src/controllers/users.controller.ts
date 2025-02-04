import {
  crearUsuario as cu,
  login as lg,
  obtenerPermisos as op,
  obtenerRoles as or,
  obtenerRolesPermisos as orp
} from '@services/Users.services';
import { sing } from '@middlewares/auth';

const controller = {
  login: null, //
  crearUsuario: null, //
  obtenerPermisos: null, //
  asignarPermisos: null,
  obtenerRoles: null
};

controller.crearUsuario = async (req, res) => {
  try {
    const response = await cu({ ...req.body, rol: 'administrador' });

    const usuario = req.usuario;

    const isAdmin = usuario.permisos.some(
      (permiso: any) => permiso.idpermiso === 1
    );

    if (!isAdmin)
      throw {
        code: 403,
        msg: 'Recurso no autorizado para usuario',
        success: false
      };

    res.status(200).json({ success: true, response });
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
    const response = await op();

    res.status(200).json({ success: true, response });
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
    const response = await orp();

    res.status(200).json({ success: true, response });
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
    const response = await orp();

    res.status(200).json({ success: true, response });
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
    const response = await lg(req.body);
    const token = await sing(response.dataValues);

    res
      .status(200)
      .json({ success: true, response: { token, ...response.dataValues } });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error contraseña o usuario incorrectos'
    });
  }
};

export default controller;
