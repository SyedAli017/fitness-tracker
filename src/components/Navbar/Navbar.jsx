import { Link } from "react-router-dom";
import NavMenu from "@components/Navbar/NavMenu";
import appLogo from "@assets/vite.svg";
import styles from "@components/Navbar/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLeft}>
          <Link className={styles.appLogoContainer} to="/">
            <img src={appLogo} className={styles.appLogo} alt="logo" />
            <h1 className={styles.appName}>
              Fit<span className={styles.secondWord}>Trax</span>
            </h1>
          </Link>
          <NavMenu />
        </div>
        <div className={styles.navbarRight}>User</div>
      </div>
    </div>
  );
};

export default Navbar;
