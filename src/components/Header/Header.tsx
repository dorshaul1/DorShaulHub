import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";
import SeperatorLine from "../SeperatorLine";
import classNames from "classnames";
import Switch from "../Switch";
import { Icon } from "../Icon";
import { useAtom } from "jotai";
import { globalAtoms } from "../../state/globalAtoms";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/blogs", name: "blogs" },
    // { path: "/about", name: "about me" },
  ];

  const [appTheme, setAppTheme] = useAtom(globalAtoms.appTheme);

  const handleSelectTheme = () => {
    const newTheme = appTheme === "dark" ? "light" : "dark";
    setAppTheme(newTheme);
    localStorage.setItem("appTheme", newTheme);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className={styles.navigations}>
          <div className={styles.darkModeSwitch}>
            <Icon name="sun" />
            <Switch
              isChecked={appTheme === "dark"}
              onChange={() => handleSelectTheme()}
            />
            <Icon name="moon" />
          </div>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={classNames(
                styles.navItem,
                location.pathname === link.path && styles.active
              )}
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
