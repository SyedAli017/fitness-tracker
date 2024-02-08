import Hero from "@components/Hero/Hero";
import styles from "@pages/home/home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
};

export default Home;
