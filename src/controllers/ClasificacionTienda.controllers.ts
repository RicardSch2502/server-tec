import ClasificacionModel from '@models/Clasificacion_tienda.model';
import Clasificacion_tienda from '@services/Clasificacion_tienda.service';

const service = new Clasificacion_tienda(ClasificacionModel);

class ClasificacionTienda {
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
}
export default ClasificacionTienda;
