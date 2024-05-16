import TiendaServices from '@services/Tienda.services';
import models from '@models/index';
const {Tiendas, Platillos} = models
const service = new TiendaServices(Tiendas);

class TiendaController {
  insertar = async (req, res) => {
    const usuario: any = req.usuario;

    try {
      const response = await service.crear({
        ...req.body,
        dueno: usuario.idusuario
      });

      return res.status(201).json({ msg: 'Tienda creada', data: response });
    } catch (err) {
      console.log(err)
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al ingresar un nueva tienda'
      });
    }
  };
  buscar = async (req, res) => {
    try {
      const response = await Tiendas.findAll({include: [{model: Platillos}]});
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
      const response = await service.actualizar(req.body, req.params.idtiendas);
      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener tienda '
      });
    }
  };
  eliminar = async (req, res) => {
    try {
      const response = await service.eliminar(req.params.idtiendas);
      console.log(req.params.idtienda);

      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al eliminar teinda'
      });
    }
  };
}
export default TiendaController;
