import PropTypes from "prop-types";
import styles from "@components/SelectedCard/SelectedCard.module.scss";

const SelectedCard = ({data}) => {
    return ( 
        <div className={styles.selectedCard}>
            {data.map((item) => (
                <div key={item.type} className={styles.card}>
                    <h4 className={styles.type}>{item.type}</h4>
                    <p className={styles.calories}>Calories per hour: {item.calories_per_hour}</p>
                </div>
            ))}
        </div>    

    )
}

SelectedCard.propTypes = {
    data: PropTypes.array.isRequired
}

export default SelectedCard