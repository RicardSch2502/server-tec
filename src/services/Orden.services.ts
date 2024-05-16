import sequelize from '@config/db.config';
import { IntegerDataType } from 'sequelize';

class OrdenServices {
  modelo: any;
  constructor(modelo: any) {
    this.modelo = modelo;
  }

  crear = async (peticion: {
    platillo: IntegerDataType;
    ingredientesadicionales: IntegerDataType;
    carrito_idcarrito: string;
    carrito_usuarios_idusuario: String;
    cantidad: string;
    pagado: String;
    preferencias: string;
  }) => {
    console.log(peticion);

    try {
      const response = await this.modelo.create(peticion);
      return response;
    } catch (error) {
      throw error;
    }
  };

  actualizar = async (
    req: {
      platillo: IntegerDataType;
      ingredientesadicionales: IntegerDataType;
      carrito_idcarrito: string;
      carrito_usuarios_idusuario: String;
      cantidad: string;
      pagado: String;
      preferencias: string;
    },
    id: number
  ) => {
    console.log(req, id);
    try {
      const response = await this.modelo.update(req, {
        where: { idorden: id }
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  eliminar = async (id: string) => {
    try {
      const eliminar = await this.modelo.destroy({
        where: { idorden: id }
      });
      return eliminar;
    } catch (error) {
      throw error;
    }
  };
}

export default OrdenServices;
