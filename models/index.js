"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createTables = void 0;
var _db = _interopRequireDefault(require("../config/db.config"));
var _Calificaciones = _interopRequireDefault(require("./Calificaciones.model"));
var _Clasificacion_tienda = _interopRequireDefault(require("./Clasificacion_tienda.model"));
var _Etiquetas = _interopRequireDefault(require("./Etiquetas.model"));
var _Ingredientes = _interopRequireDefault(require("./Ingredientes.model"));
var _Menus = _interopRequireDefault(require("./Menus.model"));
var _Carrito = _interopRequireDefault(require("./Carrito.model"));
var _Platillos = _interopRequireDefault(require("./Platillos.model"));
var _Tienda = _interopRequireDefault(require("./Tienda.model"));
var _Usuarios = _interopRequireDefault(require("./Usuarios.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_Platillos.default.belongsTo(_Tienda.default, {
  foreignKey: "tiendas_idtiendas"
});
_Platillos.default.belongsTo(_Menus.default, {
  foreignKey: "idmenus"
});
_Platillos.default.hasMany(_Etiquetas.default, {
  foreignKey: "platillos_idplatillos"
});
_Platillos.default.hasMany(_Ingredientes.default, {
  foreignKey: "platillos_idplatillos"
});
_Platillos.default.hasMany(_Carrito.default, {
  foreignKey: "platillos_idplatillos",
  as: "platillos"
});
_Carrito.default.belongsTo(_Platillos.default, {
  foreignKey: "platillos_idplatillos",
  as: "platillos"
});
_Tienda.default.belongsTo(_Usuarios.default, {
  foreignKey: "dueno"
});
_Tienda.default.belongsTo(_Clasificacion_tienda.default, {
  foreignKey: "clasificacion_tienda",
  as: "clasificacion"
});
_Tienda.default.hasMany(_Platillos.default, {
  foreignKey: "tiendas_idtiendas"
});
_Tienda.default.hasMany(_Calificaciones.default, {
  foreignKey: "tiendas_idtiendas"
});
_Clasificacion_tienda.default.hasMany(_Tienda.default, {
  foreignKey: "clasificacion_tienda",
  as: "clasificacion"
});
_Carrito.default.belongsTo(_Usuarios.default, {
  foreignKey: "usuario_idusuario"
});
_Usuarios.default.hasMany(_Carrito.default, {
  foreignKey: "usuario_idusuario"
});
var _default = {
  Calificaciones: _Calificaciones.default,
  Clasificacion: _Clasificacion_tienda.default,
  Etiquetas: _Etiquetas.default,
  Ingredientes: _Ingredientes.default,
  Menus: _Menus.default,
  Carrito: _Carrito.default,
  Platillos: _Platillos.default,
  Tiendas: _Tienda.default,
  Usuarios: _Usuarios.default
};
exports.default = _default;
const createTables = () => {
  _db.default.sync({
    force: true
  })
  // .drop({})
  .then(() => console.log('Se crearon las tablas correctamente')).catch(err => console.log(err)).finally(() => process.exit());
};
exports.createTables = createTables;