import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';
import useBcrypt from 'sequelize-bcrypt';

const Orden = sequelize.define('carrito', {
  idcarrito: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  platillos_idplatillos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  usuario_idusuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  pagado: {
    type: DataTypes.TINYINT,
    allowNull: false, defaultValue: false
  },
  preferencias: {
    type: DataTypes.TEXT('long'),
    allowNull: true
  }
});

export default Orden;
