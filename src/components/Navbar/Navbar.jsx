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
        <div className={styles.navbarRight}>
          <Link className={styles.navbarLink} to="/login">
            <button className={styles.loginBtn}>Login</button>
          </Link>
          <Link className={styles.navbarLink} to="/signup">
            <button className={styles.signupBtn}>Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
