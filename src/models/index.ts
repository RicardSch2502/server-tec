import sequelize from "@config/db.config";
import Calificaciones from "./Calificaciones.model";
import Clasificacion from "./Clasificacion_tienda.model";
import Etiquetas from "./Etiquetas.model";
import Ingredientes from "./Ingredientes.model";
import Menus from "./Menus.model";
import Carrito from "./Carrito.model";
import Platillos from "./Platillos.model";
import Tiendas from "./Tienda.model";
import Usuarios from "./Usuarios.model";

Platillos.belongsTo(Tiendas, {foreignKey: "tiendas_idtiendas"})
Platillos.belongsTo(Menus, {foreignKey: "idmenus"})
Platillos.hasMany(Etiquetas, {foreignKey: "platillos_idplatillos"})
Platillos.hasMany(Ingredientes, {foreignKey: "platillos_idplatillos"})

Platillos.hasMany(Carrito, {foreignKey: "platillos_idplatillos",as: "platillos"})
Carrito.belongsTo(Platillos, {foreignKey: "platillos_idplatillos", as: "platillos"})

Tiendas.belongsTo(Usuarios, {foreignKey: "dueno"})
Tiendas.belongsTo(Clasificacion, {foreignKey: "clasificacion_tienda", as: "clasificacion"})
Tiendas.hasMany(Platillos, {foreignKey: "tiendas_idtiendas"})
Tiendas.hasMany(Calificaciones, {foreignKey: "tiendas_idtiendas"})



Clasificacion.hasMany(Tiendas, {foreignKey: "clasificacion_tienda", as: "clasificacion"})

Carrito.belongsTo(Usuarios, {foreignKey: "usuario_idusuario"})
Usuarios.hasMany(Carrito, {foreignKey: "usuario_idusuario"})




export default {
    Calificaciones, Clasificacion, Etiquetas, Ingredientes,Menus, Carrito, Platillos, Tiendas, Usuarios
}

export const createTables = () => {
    sequelize
      .sync({ force: true })
      // .drop({})
      .then(() => console.log('Se crearon las tablas correctamente'))
      .catch((err) => console.log(err))
      .finally(() => process.exit());
  };