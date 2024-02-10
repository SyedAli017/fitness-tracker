import { useState } from "react";
import exercises from "@data/exercises";
import styles from "@pages/planBuilder/planBuilder.module.scss";
import SelectedCard from "@components/SelectedCard/SelectedCard";

const PlanBuilder = () => {
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleAddExercise = (activity) => {
    setSelectedExercises([...selectedExercises, activity]);
  };

  return (
    <div className={styles.planBuilder}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>Plan Builder</h2>
          <p className={styles.description}>
            Choose your plan and start tracking your fitness journey.
          </p>
        </div>
        <div className={styles.selectedPlans}>
          <h3 className={styles.title}>Selected Exercises</h3>
          <div className={styles.selectedPlanList}>
            <div className={styles.selectedExercises}>
              <SelectedCard data={selectedExercises} />
            </div>
            {selectedExercises && selectedExercises.length === 0 && (
              <p className={styles.noExercises}>
                No exercises selected. Click on exercises to add them
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.plans}>
        {exercises.map((plan) => (
          <div key={plan.name} className={styles.plan}>
            <h3 className={styles.name}>{plan.name}</h3>
            <div className={styles.activities}>
              {plan.activities.map((activity) => (
                <div
                  key={activity.type}
                  className={styles.activity}
                  onClick={() => handleAddExercise(activity)}
                >
                  <h4 className={styles.type}>{activity.type}</h4>
                  <p className={styles.calories}>
                    Calories per hour: {activity.calories_per_hour}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanBuilder;
