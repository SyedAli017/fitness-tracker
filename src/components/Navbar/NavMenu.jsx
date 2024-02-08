import { Link } from "react-router-dom";
import navLinks from "@data/navLinks";
import styles from "@components/Navbar/NavMenu.module.scss";
const NavMenu = () => {

  return (
    <ul className={styles.menu}>
      {navLinks.map((navLink) => (
        <li className={styles.list} key={navLink.title}>
          <Link className={styles.link} to={navLink.to}>
            {navLink.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
