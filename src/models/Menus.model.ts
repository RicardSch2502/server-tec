import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';
const Menus = sequelize.define('menu', {
  idmenus: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
});

export default Menus;
