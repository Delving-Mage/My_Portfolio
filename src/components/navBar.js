import { Link } from "react-router-dom";
import navItems from "../constants/navItems";

export const NavBar = () => {
  return (
    <nav>
      <ul className="flex h-16 items-center justify-evenly shadow-md sticky">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.route}>
              <div className="flex gap-3 font-bold">
                {item.icon}
                {item.name} 
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
