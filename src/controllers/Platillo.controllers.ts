import PlatilloServices from '@services/Platllo.service';
import guardarImagen from '@utils/guardarImagen';
import models from '@models/index';
const {Platillos, Menus, Tiendas} = models

const service = new PlatilloServices(Platillos);

class PlatilloController {
  insertar = async (req, res) => {
    try {
      const imagenP = await guardarImagen({
        imagen: req.files.imagen,
        nomenclatura: 'tiendas'
      });

      const response = await service.crear({
        ...JSON.parse(req.body.contenido),
        imagen: `/static/media/imagenes/${imagenP}`
      });

      return res.status(201).json({ msg: 'Platillo creado', data: response });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al ingresar un nuevo Platillo'
      });
      console.log('ola');
    }
  };
  buscar = async (req, res) => {
    try {
      const response = await Platillos.findAll({include: [{model: Menus}, {model: Tiendas}]});
      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener platillo'
      });
    }
  };
  buscarUno = async (req, res) => {
    try {
      const response = await service.obtenerUno(req.params.id);
      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener platillo'
      });
    }
  };
  actualizar = async (req, res) => {
    try {
      const response = await service.actualizar(
        req.body,
        req.params.idplatillos
      );
      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener platillo '
      });
    }
  };
  eliminar = async (req, res) => {
    try {
      const response = await service.eliminar(req.params.idplatillos);
      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al eliminar platillo'
      });
    }
  };
}
export default PlatilloController;
