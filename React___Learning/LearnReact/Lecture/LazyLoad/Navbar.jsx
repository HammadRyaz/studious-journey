import { useState } from "react";
import { Link } from "react-router-dom";
const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Products", path: "/products" },
  { name: "User", path: "/user/Hammad" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  return (
    <nav className="flex justify-around">
      {links.map((link) => {
        return (
          <button
            key={link.name}
            className={active == link.path ? "m-2 border-b-4 p-2" : "m-2 p-2"}
            onClick={() => setActive(link.path)}
          >
            <Link to={link.path}>{link.name}</Link>
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
