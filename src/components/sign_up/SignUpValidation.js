const SignUpValidation = (values, focused) => {
  let errors = {};
  if (!values.name && focused.name) {
    errors.name = "This field is required";
  // } else if (
  //   !/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/g.test(values.name) &&
  //   focused.name
  // ) {
  //   errors.name = "This field accepts characters only";
  // } 
  }else if (values.name.length < 8 && focused.name) {
    errors.name = "Name must be not less than 8";
  }
  if (!values.email && focused.email) {
    errors.email = "This field is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) &&
    focused.email
  ) {
    errors.email = "This field accepts email only";
  }
  if (!values.password && focused.password) {
    errors.password = "This field is required";
  } else if (values.password.length < 8 && focused.password) {
    errors.password = "Password must be not less than 8";
  }
  if (!values.confirmPassword && focused.confirmPassword) {
    errors.confirmPassword = "This field is required";
  } else if (
    !(values.password === values.confirmPassword) &&
    focused.confirmPassword
  ) {
    errors.confirmPassword = "Password not match";
  }

  return errors;
};

export default SignUpValidation;
