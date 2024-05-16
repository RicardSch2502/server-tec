import Menu from '@models/Menus.model';
import MenuService from '@services/Menus.service';

const service = new MenuService(Menu)

class MenuController{
  crearMenu = async (req, res)=>{
    try {
      const response = await service.crear(req.body);
      return res.status(201).json({msg:'menu creado', data:response})
    } catch (error) {
      res.status(400).json({
        success:false,
        error:error,
        msg:'error al ingresar menu'}
      )
    }
  }
  
  eliminar = async (req, res) => {
    try {
      const response =await service.eliminar(req.params.idmenus);
      return res.status(200).json({success:true, response});
    } catch (error) {
      console.log(error)
      res.status(400).json({
        success:false,
        response:error,
        msg:'error al eliminar menu'
      })
    }
  }
}
export default MenuController;



