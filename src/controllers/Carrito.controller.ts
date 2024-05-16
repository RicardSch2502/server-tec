import models from '@models/index'
import CarritoServices from '@services/Carrito.services';
const {Carrito, Platillos, Usuarios} = models;

const service = new CarritoServices(Carrito);

class CarritoController {
  insertar = async (req, res) => {
    const {platillos_idplatillos, cantidad, preferencias} = req.body

    
    try {
      const response = await Carrito.create({
        platillos_idplatillos, usuario_idusuario: req.usuario.idusuario, cantidad, preferencias 
      })
      res.status(200).json({
        success: true,
        response
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al ingresar un nuevo '
      });
      console.log('ola');
    }
  };
  
  obtener = async (req, res) => {   
    try {
      const response = await Carrito.findAll({include: [{model: Platillos, as: "platillos"}, {model: Usuarios}]})

      res.status(200).json({
        success: true,
        response
      });

    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al ingresar un nuevo '
      });
      console.log('ola');
    }
  };

  eliminar = async (req, res) => {   
    try {
      const response = await Carrito.destroy({where: {idcarrito: req.params.id}})

      res.status(200).json({
        success: true,
        response
      });

    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al elmiinar un nuevo '
      });
      console.log('ola');
    }
  };
}
export default CarritoController;
