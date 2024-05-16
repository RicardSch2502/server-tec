import ClasificacionModel from '@models/Clasificacion_tienda.model';
import Usuarios from '@models/Usuarios.model';

class TiendaServices {
  modelo: any;
  usuariosModel: any;
  clasificacionModel: any;

  constructor(modelo: any) {
    this.modelo = modelo;
    this.usuariosModel = Usuarios;
    this.clasificacionModel = ClasificacionModel;

    this.modelo.belongsTo(this.usuariosModel, {
      foreignKey: 'dueno',
      as: 'dueno_informacion'
    });

    this.modelo.belongsTo(this.clasificacionModel, {
      foreignKey: 'clasificacion_tienda',
      as: 'clasificacion_tienda_information'
    });
  }

  crear = async (peticion: {
    nombredelatienda: string;
    distancia: number;
    nombredepreparacion: number;
    imagen: string;
    coordenadas: object;
    clasificacion_tienda: String;
  }) => {
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
        include: [
          { model: this.usuariosModel, as: 'dueno_informacion' },
          {
            model: this.clasificacionModel,
            as: 'clasificacion_tienda_information'
          }
        ]
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  actualizar = async (
    req: {
      nombredelatienda: string;
      distancia: number;
      tiempodepreparacion: number;
      imagen: string;
      coordenadas: object;
      clasificacion_tienda: String;
    },
    id: number
  ) => {
    try {
      const response = await this.modelo.update(req, {
        where: { idtiendas: id }
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  eliminar = async (id: number) => {
    try {
      const eliminar = await this.modelo.destroy({
        where: { idtiendas: id }
      });
      return eliminar;
    } catch (error) {
      throw error;
    }
  };
}

export default TiendaServices;
