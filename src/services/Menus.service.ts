import sequelize from '@config/db.config';
import { IntegerDataType } from 'sequelize';

class MenuService {
  modelo: any;
  constructor(modelo: any) {
    this.modelo = modelo;
  }

  crear = async (peticion: { nombre: string }) => {
    console.log(peticion);

    try {
      const response = await this.modelo.create(peticion);
      return response;
    } catch (error) {
      throw error;
    }
  };

  eliminar = async (id: number) => {
    try {
      const eliminar = await this.modelo.destroy({
        where: { idmenus: id }
      });
      return eliminar;
    } catch (error) {
      throw error;
    }
  };
}

export default MenuService;
