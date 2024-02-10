import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import plans from "@data/plans";
import exercises from "@data/exercises";
import styles from "@pages/plan/plan.module.scss";

const Plan = () => {
  const { slug } = useParams();
  const [plan, setPlan] = useState({});

  useEffect(() => {
    const selectedPlan = plans.find((plan) => plan.slug === slug);
    setPlan(selectedPlan || {});
  }, [slug]);

  const getExerciseDetails = (exerciseType) => {
    let exerciseDetails = {};
    exercises.forEach((category) => {
      const foundExercise = category.activities.find(
        (exercise) => exercise.type.toLowerCase() === exerciseType.toLowerCase()
      );
      if (foundExercise) {
        exerciseDetails = foundExercise;
      }
    });
    return exerciseDetails;
  };

  const renderExerciseDetails = () => {
    if (!plan || !plan.exercises) {
      return <p>No exercises found for this plan.</p>;
    }

    return plan.exercises.map((exercise, index) => {
      const { type: exerciseType, duration_minutes } = exercise;
      const exerciseDetails = getExerciseDetails(exerciseType);
      const { instruction, calories_per_hour } = exerciseDetails;

      return (
        <div key={index} className={styles.exercise}>
          <h3 className={styles.title}>{exerciseType}</h3>
          <div className={styles.details}>
            <p className={styles.instruction}>Instructions: {instruction}</p>
            <p className={styles.duration}>
              Duration: {duration_minutes} minutes
            </p>
            <p className={styles.calories}>
              Calories Burned:{" "}
              {calculateCalories(calories_per_hour, duration_minutes)} kcal
            </p>
          </div>
        </div>
      );
    });
  };

  const calculateCalories = (caloriesPerHour, durationMinutes) => {
    const hours = durationMinutes / 60;
    return Math.round(caloriesPerHour * hours);
  };

  return (
    <div className={styles.plan}>
      <div className={styles.titleContainer}>
        <h2 className={styles.planTitle}>{plan.title}</h2>
        <button className={styles.selectBtn}>Select Plan</button>
      </div>

      <div className={styles.exerciseContainer}>{renderExerciseDetails()}</div>
    </div>
  );
};

export default Plan;
