import { sing } from '@middlewares/auth';
import Usuarios from '@models/Usuarios.model';
import UsuariosServices from '@services/Usuarios.services';

const service = new UsuariosServices(Usuarios);

class UsuariosController {
  insertar = async (req, res) => {
    console.log({ req, res });

    try {
      const response = await service.crear(req.body);
      return res.status(201).json({ msg: 'Usuario creado', data: response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al crear usuario, verifique de nuevo los datos'
      });
    }
  };
  login = async (req, res) => {
    try {
      const response = await service.login(req.body);

      const token = await sing(response.dataValues);

      return res.status(201).json({
        msg: 'Iniciar sesion correctamente',
        data: { ...response.dataValues, token }
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error o contraseñas incorrectos'
      });
      console.log('ola');
    }
  };
  buscar = async (req, res) => {
    try {
      console.log(req.usuario);
      const response = await service.obtener();

      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener '
      });
    }
  };
  actualizar = async (req, res) => {
    try {
      const response = await service.actualizar(req.body, req.params.idusuario);
      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener '
      });
    }
  };
  eliminar = async (req, res) => {
    try {
      const response = await service.eliminar(req.params.idusuario);
      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener '
      });
    }
  };
}
export default UsuariosController;
