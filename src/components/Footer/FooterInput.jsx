import { Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import styles from "@components/Footer/FooterInput.module.scss";

const FooterInput = () => {
  return (
    <div className={styles.footerInput}>
      <h3 className={styles.title}>Newsletter</h3>
      <div className={styles.footerInputContainer}>
        <p className={styles.description}>
          Sign up for our newsletter and receive weekly motivation, fitness
          tips, and exclusive insights to elevate your fitness journey! Stay
          inspired and committed with FitTrax!
        </p>
        <Input
          placeholder="Enter Your Email"
          prefix={<MailOutlined style={{ color: "gray" }} />}
        />
        <button className={styles.button}>Subscribe</button>
      </div>
    </div>
  );
};

export default FooterInput;
