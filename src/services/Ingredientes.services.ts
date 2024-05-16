import sequelize from '@config/db.config';
import { IntegerDataType } from 'sequelize';

class IngredientesServices {
  modelo: any;
  constructor(modelo: any) {
    this.modelo = modelo;
  }

  crear = async (peticion: {
    nombre: string;
    cantidad: IntegerDataType;
    platillos_idplatillos: String;
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
      nombre: string;
      cantidad: IntegerDataType;
    },
    id: number
  ) => {
    console.log(req, id);
    try {
      const response = await this.modelo.update(req, {
        where: { idingrediente: id }
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  eliminar = async (id: string) => {
    try {
      const eliminar = await this.modelo.destroy({
        where: { idingrediente: id }
      });
      return eliminar;
    } catch (error) {
      throw error;
    }
  };
}

export default IngredientesServices;
