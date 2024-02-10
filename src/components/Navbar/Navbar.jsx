import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import NavMenu from "@components/Navbar/NavMenu";
import AuthModal from "@components/AuthModal/AuthModal";
import appLogo from "@assets/vite.svg";
import styles from "@components/Navbar/Navbar.module.scss";

const Navbar = () => {
  const [isMobileMenuclicked, setIsMobileMenuclicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuclicked(!isMobileMenuclicked);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    setIsLogin(true);

    showModal();
  };

  const handleSignup = () => {
    setIsLogin(false);

    showModal();
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
          <div className={styles.navbarLink}>
            <button className={styles.loginBtn} onClick={handleLogin}>Login</button>
          </div>
          <div className={styles.navbarLink}>
            <button className={styles.signupBtn} onClick={handleSignup}>Signup</button>
          </div>
          <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          closable={false}
        >
          <AuthModal isLogin={isLogin} setIsLogin={setIsLogin} />
        </Modal>
        </div>
        <div className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
          {!isMobileMenuclicked && (
            <div className={styles.menuOpen}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          )}
          {isMobileMenuclicked && (
            <div className={styles.menuClose}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          )}
        </div>
        {isMobileMenuclicked && (
          <div className={styles.mobileMenu} onClick={toggleMobileMenu}>
            <NavMenu />
            <div className={styles.mobileMenuBtns}>
              <Link className={styles.navbarLink} to="/login">
                <button className={styles.loginBtn} onClick={toggleMobileMenu}>
                  Login
                </button>
              </Link>
              <Link className={styles.navbarLink} to="/signup">
                <button className={styles.signupBtn} onClick={toggleMobileMenu}>
                  Signup
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
