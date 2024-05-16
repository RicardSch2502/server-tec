import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';
import useBcrypt from 'sequelize-bcrypt';

const Calificaciones = sequelize.define('calificaciones', {
  idcalificaciones: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tiendas_idtiendas: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Calificaciones;
