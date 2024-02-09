import styles from "@pages/plans/plans.module.scss";
import PlanCard from "@components/PlanCard/PlanCard";

const Plans = () => {
  return (
    <div className={styles.plans}>
        <PlanCard />
    </div>
  );
};

export default Plans;
