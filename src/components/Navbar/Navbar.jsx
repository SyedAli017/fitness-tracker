import { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "@components/Navbar/NavMenu";
import appLogo from "@assets/vite.svg";
import styles from "@components/Navbar/Navbar.module.scss";

const Navbar = () => {
  const [isMobileMenuclicked, setIsMobileMenuclicked] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuclicked(!isMobileMenuclicked);
  };

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
          <div className={styles.navmenu}>
            <NavMenu />
          </div>
        </div>
        <div className={styles.navbarRight}>
          <Link className={styles.navbarLink} to="/login">
            <button className={styles.loginBtn}>Login</button>
          </Link>
          <Link className={styles.navbarLink} to="/signup">
            <button className={styles.signupBtn}>Signup</button>
          </Link>
        </div>
        <div className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        {isMobileMenuclicked && (
          <div className={styles.mobileMenu} onClick={toggleMobileMenu}>
            <NavMenu />
            <div className={styles.mobileMenuBtns}>
              <Link className={styles.navbarLink} to="/login">
                <button className={styles.loginBtn} onClick={toggleMobileMenu}>Login</button>
              </Link>
              <Link className={styles.navbarLink} to="/signup">
                <button className={styles.signupBtn} onClick={toggleMobileMenu}>Signup</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
