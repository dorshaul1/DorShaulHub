import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.scss";
import SeperatorLine from "../SeperatorLine";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/blogs", name: "blogs" },
    { path: "/about", name: "about me" },
  ];

  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">
          <NavLink to={"/"}>
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="navigations">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={`nav-item ${
                location.pathname === link.path && "active"
              }`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
      <SeperatorLine />
    </div>
  );
};

export default Header;
