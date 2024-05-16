import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';
import useBcrypt from 'sequelize-bcrypt';

const Clasificacion = sequelize.define(
  'clasificacion_tienda',
  {
    idclasificacion_tienda: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    nombre_clasificacion: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
);

export default Clasificacion;
