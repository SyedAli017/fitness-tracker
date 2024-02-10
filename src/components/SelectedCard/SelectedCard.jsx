import PropTypes from "prop-types";
import deleteIcon from "@assets/SelectedCard/delete.svg";
import styles from "@components/SelectedCard/SelectedCard.module.scss";

const SelectedCard = ({ data, handleDelete }) => {
  const handleExerciseDelete = (item) => {
    handleDelete(item);
  };

  return (
    <div className={styles.selectedCard}>
      {data.map((item) => (
        <div key={item.type} className={styles.card}>
          <div className={styles.details}>
            <h4 className={styles.type}>{item.type}</h4>
            <p className={styles.calories}>
              Calories per hour: {item.calories_per_hour}
            </p>
          </div>
          <img
            src={deleteIcon}
            alt="delete icon"
            className={styles.deleteIcon}
            onClick={() => handleExerciseDelete(item)}
          />
        </div>
      ))}
    </div>
  );
};

SelectedCard.propTypes = {
  data: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default SelectedCard;
