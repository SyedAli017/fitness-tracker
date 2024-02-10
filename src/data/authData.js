const loginData = [
    {
      type: "email",
      placeholder: "Email",
      name: "email",
      rules: [{ required: true, message: "Please enter your email!" }],
    },
    {
      type: "password",
      placeholder: "Password",
      name: "password",
      rules: [{ required: true, message: "Please enter your password!" }],
    },
  ];
  
  const signupData = [
    {
      type: "text",
      placeholder: "Username",
      name: "username",
      rules: [{ required: true, message: "Please enter your username!" }],
    },
    {
      type: "email",
      placeholder: "Email",
      name: "email",
      rules: [{ required: true, message: "Please enter your email!" }],
    },
    {
      type: "password",
      placeholder: "*********",
      name: "password",
      rules: [{ required: true, message: "Please enter your password!" }],
    },
    {
      type: "password",
      placeholder: "*********",
      name: "confirmPassword",
      rules: [{ required: true, message: "Please confirm your password!" }],
    },
  ];
  
  export { loginData, signupData };