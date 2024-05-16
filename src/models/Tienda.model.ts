import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';
import useBcrypt from 'sequelize-bcrypt';

const Tiendas = sequelize.define('tienda', {
  idtiendas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombredelatienda: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  tiempodepreparacion: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  distancia: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  dueno: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imagen: {
    type: DataTypes.TEXT,
    allowNull: false, defaultValue: "otracosa"
  },
  coordenadas: {
    type: DataTypes.JSON,
    allowNull: true
  },
  clasificacion_tienda: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

export default Tiendas;
