import { MenuItems } from "./MenuItems";
import {submenus} from "./Submenulist"
export const menulist = [
    {
      name: "HOME",
      url: "/",
    },
  
    {
      name: "TATUDORES",
      url: "/Inkers",
    },
  
    {
      name: "PORTAFOLIO",
      url: "/Portafolio",
    },
  
    {
      name: "CONTÁCTENOS",
      url: "/Conctact",
    },
  
    {
      name: "CITA",
      url: "/Schedule",
    },
  ];
export const Navbar = () => {

    return(
        <nav className="main-nav">
      <ul className="menus">
        {submenus.map((menu, index)=>{
            return <MenuItems items={menu} key={index} />
        }
    )}

      </ul>
    </nav>
  );
};

