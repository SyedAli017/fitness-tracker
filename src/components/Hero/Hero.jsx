import heroImg from "@assets/Hero/hero.jpg";
import styles from "@components/Hero/Hero.module.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <h2 className={styles.title}>
            Track Your Fitness Journey with Fit
            <span className={styles.secondWord}>Trax</span>
          </h2>
          <p className={styles.description}>
            Take control of your health and fitness goals with Fit
            <span className={styles.secondWord}>Trax</span>. Monitor your
            progress, set milestones, and stay motivated on your journey to a
            healthier you.
          </p>
          <Link to="/plans" className={styles.navbarLink}>
            <button className={styles.CTABtn}> Get Started </button>
          </Link>
        </div>
        <div className={styles.heroRight}>
          <img src={heroImg} className={styles.heroImg} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
