import { Form } from "antd";
import PropTypes from "prop-types";
import FormInput from "@components/FormInput/FormInput";
import appLogo from "@assets/vite.svg";
import apple from "@assets/AuthModal/apple.svg";
import google from "@assets/AuthModal/google.svg";
import styles from "@components/AuthForm/AuthForm.module.scss";

const AuthForm = ({ inputData, isLogin, setIsLogin }) => {
  const handleAltClick = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div className={styles.authForm}>
      <div className={styles.appName}>
        <img src={appLogo} alt="logo" className={styles.logo} />
        <p className={styles.name}>
          Fit<span className={styles.secondWord}>Trax</span>
        </p>
      </div>
      <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
        <FormInput inputs={inputData} />
        {isLogin && <p className={styles.forgotPassword}>Forgot Password?</p>}
        <Form.Item>
          {isLogin ? (
            <button className={styles.authBtn}>Login</button>
          ) : (
            <button className={styles.authBtn}>Sign Up</button>
          )}
        </Form.Item>
      </Form>
      {isLogin ? (
        <p className={styles.alt}>
          Don&apos;t have an account?
          <p className={styles.altBtn} onClick={handleAltClick}>
            Sign Up
          </p>
        </p>
      ) : (
        <p className={styles.alt}>
          Already have an account?
          <p className={styles.altBtn} onClick={handleAltClick}>
            Log In
          </p>
        </p>
      )}
      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
        <p className={styles.or}> Or {isLogin ? "Login" : "Signup"} with</p>
        <div className={styles.dividerLine}></div>
      </div>
      <div className={styles.authOptions}>
        <button className={styles.authOptionBtn}>
          <img src={google} alt="google" className={styles.optionLogo} />
          <p>Google</p>
        </button>
        <button className={styles.authOptionBtn}>
          <img src={apple} alt="apple" className={styles.optionLogo} />
          <p>Apple</p>
        </button>
      </div>
    </div>
  );
};

AuthForm.propTypes = {
  inputData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      rules: PropTypes.arrayOf(
        PropTypes.shape({
          required: PropTypes.bool.isRequired,
          message: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  isLogin: PropTypes.bool,
  setIsLogin: PropTypes.func,
};

export default AuthForm;
