import { Link } from "react-router-dom";
import NavMenu from "@components/Navbar/NavMenu";
import appLogo from "@assets/vite.svg";
import styles from "@components/Navbar/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/">
          <div className={styles.navbarLeft}>
            <img src={appLogo} className={styles.appLogo} alt="logo" />
            <h1 className={styles.appName}>
              Fit<span className={styles.secondWord}>Trax</span>
            </h1>
          </div>
        </Link>
        <div className={styles.navbarCenter}>
          <NavMenu />
        </div>
        <div className={styles.navbarRight}></div>
      </div>
    </div>
  );
};

export default Navbar;