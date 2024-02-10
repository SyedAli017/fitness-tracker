import { Input, Form } from "antd";
import PropTypes from "prop-types";
import styles from "./FormInput.module.scss";

const FormInput = ({ inputs }) => {
  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index} className={styles.formInput}>
          <Form.Item name={input.name} rules={input.rules}>
            <Input
              size="large"
              placeholder={input.placeholder}
              type={input.type === "password" ? "password" : "text"}
            />
          </Form.Item>
        </div>
      ))}
    </div>
  );
};

FormInput.propTypes = {
  inputs: PropTypes.arrayOf(
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
};

export default FormInput;