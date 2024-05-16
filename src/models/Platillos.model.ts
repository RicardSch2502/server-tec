import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';
import useBcrypt from 'sequelize-bcrypt';

const Platillos = sequelize.define('platillo', {
  idplatillos: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  costo: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  tiendas_idtiendas: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imagen: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  idmenus: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Platillos;
