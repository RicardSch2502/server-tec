import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';
import useBcrypt from 'sequelize-bcrypt';

const Ingredientes = sequelize.define('ingredientes', {
  idingredientesadicionales: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  platillos_idplatillos: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Ingredientes;
