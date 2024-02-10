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
          <h3>{exerciseType}</h3>
          <p>Type: {exerciseDetails.type}</p>
          <p>Duration: {duration_minutes} minutes</p>
          <p>Instructions: {instruction}</p>
          <p>
            Calories Burned:{" "}
            {calculateCalories(calories_per_hour, duration_minutes)} kcal
          </p>
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
      <h2>{plan.title}</h2>
      <div className={styles.exerciseContainer}>{renderExerciseDetails()}</div>
    </div>
  );
};

export default Plan;
