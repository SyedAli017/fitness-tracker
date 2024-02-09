import {  useNavigate } from "react-router-dom";
import plans from "@data/plans";
import styles from "@components/PlanCard/PlanCard.module.scss";

const PlanCard = () => {
  const navigate = useNavigate();

  const handlePlanClick = (slug) => {
    navigate(`/plan/${slug}`);
  };

  console.log(plans.slug);

  return (
    <div className={styles.planCard}>
      {plans.map((plan) => (
        <div key={plan.title} className={styles.plan}>
          <div className={styles.planContent}>
            <h3 className={styles.title}>{plan.title}</h3>
            <ul className={styles.exercises}>
              {plan.exercises.map((exercise) => (
                <li key={exercise.exercise}>
                  <div className={styles.exercise}>
                    <h4 className={styles.exerciseName}>{exercise.exercise}</h4>
                    <p className={styles.exerciseType}>{exercise.type}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.planImage}
              src={plan.image}
              alt={plan.title}
            />
          </div>
          <div
            className={styles.planSelector}
            onClick={() => handlePlanClick(plan.slug)}
          >
            <p className={styles.view}>View</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
