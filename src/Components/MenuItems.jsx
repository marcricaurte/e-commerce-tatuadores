import { Dropdown } from "./Dropdown";
import { useState } from "react";
export const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    console.log ("al pasar el mouse se despliegue la lista")
    setDropdown(true);
  };
  const onMouseLeave = () => {
    console.log ("al alejar el mouse se cierra la lista")
    setDropdown(false);
  };

  return (
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="menu-items"
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};
