class UsuariosServices {
  modelo: any;
  constructor(modelo: any) {
    this.modelo = modelo;
  }

  crear = async (peticion: {
    usarname: string;
    password: string;
    correo: string;
    tipodeususario: number;
  }) => {
    try {
      const response = await this.modelo.create(peticion);
      return response;
    } catch (error) {
      throw error;
    }
  };

  login = async (peticion: { username: string; password: string }) => {
    try {

      const response = await this.modelo.findOne({
        where: {
          usarname: peticion.username
        }
      });

      console.log(response);
      
      if (!response) {
        throw new Error('Usuario o contraseña incorrectos');
      }

      

      const authenticate = await response.authenticate(peticion.password);
      if (!authenticate) throw { msg: 'Error contraseña incorrecta' };

      delete response.dataValues.password;


      return response;
    } catch (error) {
      console.log(error);
      
      throw error;
    }
  };
  obtener = async () => {
    try {
      const response = await this.modelo.findAll();
      return response;
    } catch (error) {
      throw error;
    }
  };
  actualizar = async (
    req: {
      usarname: string;
      password: string;
      correo: string;
      tipodeusuario: number;
    },
    id: number
  ) => {
    console.log(req, id);
    try {
      const response = await this.modelo.update(req, {
        where: { idusuario: id }
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  eliminar = async (id: string) => {
    try {
      const eliminar = await this.modelo.destroy({
        where: { idusuario: id }
      });
      return eliminar;
    } catch (error) {
      throw error;
    }
  };
}

export default UsuariosServices;
