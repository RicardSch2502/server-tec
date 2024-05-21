/* 
import models from '@models/index';
import OrdenServices from '@services/Orden.services';
const {Orden, Carrito, Platillos} = models

const service = new OrdenServices(Orden);

class OrdenController {
  insertar = async (req, res) => {

    try {
      const response = await service.crear(req.body);
      return res.status(201).json({ msg: 'Orden creado', data: response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al ingresar una nueva orden'
      });
      console.log('ola');
    }
  };

  actualizar = async (req, res) => {
    try {
      const response = await service.actualizar(req.body, req.params.idorden);
      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al obtener orden '
      });
    }
  };
  eliminar = async (req, res) => {
    try {
      const response = await service.eliminar(req.params.idorden);
      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al eliminar orden'
      });
    }
  };
  obtener = async (req, res) => {
    try {
      const response = await Orden.findAll({include: [{model: Carrito}, {model: Platillos, as: "platillos"}]});
      return res.status(200).json({ success: true, response });
    } catch (err) {
      res.status(400).json({
        success: false,
        response: err,
        msg: 'Error al eliminar orden'
      });
    }
  };
  
}
export default OrdenController;
 */
"use strict";