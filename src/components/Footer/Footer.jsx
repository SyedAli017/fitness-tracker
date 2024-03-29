import { Link } from "react-router-dom";
import FooterInput from "@components/Footer/FooterInput";
import navLinks from "@data/navLinks";
import appLogo from "@assets/vite.svg";
import styles from "@components/Footer/Footer.module.scss";

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.topLeft}>
            <div className={styles.appLogoContainer}>
              <img src={appLogo} className={styles.appLogo} alt="logo" />
              <h3 className={styles.appName}>
                Fit<span className={styles.secondWord}>Trax</span>
              </h3>
            </div>
            <p className={styles.appDescription}>
            Embrace your fitness journey with &apos;FitBuddy&apos;. Discover a world of health and vitality at your fingertips. Here&apos;s to strong bodies and vibrant lives!
            </p>
          </div>
          <div className={styles.topCenter}>
            <h3 className={styles.linkTitle}>Links</h3>
            <ul className={styles.footerLinks}>
              {navLinks.map((navLinks) => (
                <li className={styles.list} key={navLinks.title}>
                  <Link className={styles.link} to={navLinks.to}>
                    {navLinks.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.topRight}>
            <FooterInput />
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footerBottom}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              &copy; 2024 FitTrax. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
