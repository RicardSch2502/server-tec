import Ingredientes from '@models/Ingredientes.model';
import IngredientesServices from '@services/Ingredientes.services';

const service = new IngredientesServices(Ingredientes);

class IngredienteController {
  insertar = async (req, res) => {
    console.log(req);

    try {
      const response = await service.crear(req.body);
      return res
        .status(201)
        .json({ msg: 'Ingredinete creado', data: response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al ingresar un nuevo ingrediente'
      });
      console.log('ola');
    }
  };

  actualizar = async (req, res) => {
    try {
      const response = await service.actualizar(
        req.body,
        req.params.idingrediente
      );
      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener ingrediente '
      });
    }
  };
  eliminar = async (req, res) => {
    try {
      const response = await service.eliminar(req.params.idingrediente);
      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al eliminar ingrediente'
      });
    }
  };
}
export default IngredienteController;
