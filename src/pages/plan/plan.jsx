import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import plans from "../../data/plans";
import styles from "@pages/plan/plan.module.scss";

const Plan = () => {
    const { slug } = useParams();
    const [plan, setPlan] = useState({});

    useEffect(() => {
        const plan = plans.find((plan) => plan.slug === slug);

        setPlan(plan);
        
    } , [slug]);


    return (
        <div className={styles.plan}>
            <h2>{plan.title}</h2>
        </div>
    );
} 

export default Plan




