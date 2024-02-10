import PropTypes from "prop-types";
import AuthForm from "@components/AuthForm/AuthForm";
import { loginData, signupData } from "@data/authData";
import styles from "@components/AuthModal/AuthModal.module.scss";

const AuthModal = ({ isLogin, setIsLogin }) => {
  return (
    <div className={styles.authModal}>
      <div className={styles.modalLeft}>
        <div className={styles.leftContent}>
          {isLogin ? (
            <>
              <h3 className={styles.title}>
                Welcome Back to Fit
                <span className={styles.secondWord}>Trax</span>
              </h3>
              <p className={styles.desc}>
                Explore Your Personal Fitness Dashboard: Uncover Insights,
                Visualize Progress, and Navigate Your Fitness Data Seamlessly.
                Let&apos;s Begin Your Fitness Journey!
              </p>
            </>
          ) : (
            <>
              <h3 className={styles.title}>
                Use Fit<span className={styles.secondWord}>Trax</span> Today!
              </h3>
              <p className={styles.desc}>
                Embark on Your Fitness Journey: Sign Up for Exclusive Insights,
                Connections, and Enhanced Tracking Tools!
              </p>
            </>
          )}
        </div>
      </div>
      <div className={styles.modalRight}>
        <div className={styles.rightContent}>
          <AuthForm
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            inputData={isLogin ? loginData : signupData}
          />
        </div>
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  isLogin: PropTypes.bool,
  setIsLogin: PropTypes.func,
};

export default AuthModal;
