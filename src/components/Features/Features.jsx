import featuresData from "@data/featuresData";
import styles from "@components/Features/Features.module.scss";

const Features = () => {

  return (
    <div className={styles.features}>
      <div className={styles.featuresContainer}>
        <h2 className={styles.title}>Features</h2>
        <div className={styles.featuresContent}>
          {featuresData.map((feature) => (
            <div className={styles.feature} key={feature.title}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;