import Tiendas from '@models/Tienda.model';

class Clasificacion_tienda {
  modelo: any;
  tiendasM: any;
  constructor(modelo: any) {
    this.modelo = modelo;
    this.tiendasM = Tiendas;

    this.modelo.hasMany(this.tiendasM, { foreignKey: 'clasificacion_tienda' });
  }

  crear = async (peticion: { nombre_clasificacion: string }) => {
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
        include: [{ model: this.tiendasM }]
      });
      return response;
    } catch (error) {
      console.log(error);

      throw error;
    }
  };
}

export default Clasificacion_tienda;
