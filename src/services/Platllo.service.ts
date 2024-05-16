import Menus from '@models/Menus.model';
import models from '@models/index';
const {Tiendas} = models
class PlatilloServices {
  modelo: any;
  menuM: any;
  constructor(modelo: any) {
    this.modelo = modelo;
    this.menuM = Menus;

    this.modelo.belongsTo(this.menuM, { foreignKey: 'idmenus' });
  }

  crear = async (peticion: {
    nombre: string;
    costo: number;
    tiendas_idtiendas: string;
    imagen: Text;
    descripcion: Text;
    idmenus: string;
  }) => {
    console.log(peticion);

    try {
      const response = await this.modelo.create(peticion);
      return response;
    } catch (error) {
      throw error;
    }
  };
  obtener = async () => {
    try {
      const response = await this.modelo.findAll({
        include: [{ model: this.menuM  }, {model: Tiendas}]
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  obtenerUno = async (idtienda: number) => {
    try {
      const response = await this.modelo.findAll({
        where: { tiendas_idtiendas: idtienda },
        include: [{ model: this.menuM }]
      });
      return response;
    } catch (error) {
      console.log(error);

      throw error;
    }
  };
  actualizar = async (
    req: {
      nombre: string;
      costo: number;
      tiendas_idtiendas: string;
      imagen: Text;
      descripcion: Text;
      idmenus: string;
    },
    id: number
  ) => {
    console.log(req, id);
    try {
      const response = await this.modelo.update(req, {
        where: { idplatillos: id }
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  eliminar = async (id: number) => {
    console.log(id);
    try {
      const eliminar = await this.modelo.destroy({
        where: { idplatillos: id }
      });
      return eliminar;
    } catch (error) {
      throw error;
    }
  };
}

export default PlatilloServices;
