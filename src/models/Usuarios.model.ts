import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';
import useBcrypt from 'sequelize-bcrypt';

const Usuarios = sequelize.define('usuarios', {
  idusuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usarname: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT('long'),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  tipodeusuario: {
    type: DataTypes.ENUM('cliente', 'vendedor'),
    allowNull: false
  }
});
useBcrypt(Usuarios, {
  field: 'password',
  rounds: 12,
  compare: 'authenticate'
});
export default Usuarios;
