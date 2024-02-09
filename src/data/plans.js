import cardioImg from "@assets/PlanCard/cardio.png";
import fullBodyImg from "@assets/PlanCard/full-body.png";
import crossTrainingImg from "@assets/PlanCard/cross-training.png";
import yogaImg from "@assets/PlanCard/yoga.png";
import danceImg from "@assets/PlanCard/dance.png";

const plans = [
  {
    title: "Beginner's Cardio Plan",
    exercises: [
      {
        exercise: "Walking",
        type: "Brisk walking (4 mph)",
        duration_minutes: 30,
      },
      {
        exercise: "Cycling",
        type: "Casual biking (10 mph)",
        duration_minutes: 20,
      },
      { exercise: "Yoga", type: "Hatha Yoga", duration_minutes: 15 },
    ],
    image: cardioImg,
  },
  {
    title: "Intermediate Full-Body workout",
    exercises: [
      {
        exercise: "Strength Training",
        type: "Circuit training, including weights",
        duration_minutes: 20,
      },
      {
        exercise: "Swimming",
        type: "Freestyle, vigorous effort",
        duration_minutes: 15,
      },
      { exercise: "Running", type: "Jogging (5 mph)", duration_minutes: 10 },
    ],
    image: fullBodyImg,
  },

  {
    title: "Advanced Cross-Training Plan",
    exercises: [
      {
        exercise: "Cycling",
        type: "Intense biking (20 mph)",
        duration_minutes: 30,
      },
      {
        exercise: "Strength Training",
        type: "High-intensity interval training (HIIT)",
        duration_minutes: 20,
      },
      {
        exercise: "Sports",
        type: "Basketball (competitive)",
        duration_minutes: 15,
      },
    ],
    image: crossTrainingImg,
  },
  {
    title: "Yoga and Pilates Fusion",
    exercises: [
      { exercise: "Yoga", type: "Vinyasa Yoga", duration_minutes: 20 },
      { exercise: "Pilates", type: "Reformer Pilates", duration_minutes: 20 },
      { exercise: "Yoga", type: "Power Yoga", duration_minutes: 15 },
    ],
    image: yogaImg,
  },

  {
    title: "Dance Fitness Routine",
    exercises: [
      { exercise: "Dancing", type: "Ballet", duration_minutes: 30 },
      { exercise: "Dancing", type: "Hip Hop", duration_minutes: 20 },
      { exercise: "Dancing", type: "Ballet", duration_minutes: 15 },
    ],
    image: danceImg,
  },
];

export default plans
