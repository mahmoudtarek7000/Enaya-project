import { useState, useEffect, useContext } from "react";
import { auth } from "../components/firebase/config";
import { AuthContext } from "../context/AuthProvider";
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const useForm = (validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const { handleUserProfile } = useContext(AuthContext);
  const [submiterror, setsubmiterror] = useState()
const [focused, setFocused] =useState({})
  const handleChange = (e) => {
    setFocused({...focused, [e.target.name] : e.bubbles})
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  useEffect(() => {
    if (Object.keys(focused).length) setErrors(validate(values, focused));
    // eslint-disable-next-line
  }, [focused])
  const handleSubmit = async (e, userType) => {
    e.preventDefault();
    const { name, email, password } = values;
    if (Object.keys(errors).length === 0 && Object.keys(focused).length === 4) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await handleUserProfile(user, userType, { name });
        setValues({ ...initialState });
      } catch (error) {}
    }else{
      setsubmiterror("Fill required fields with his requirements")
    }
  };
  return { handleChange, handleSubmit, values, errors,submiterror };
};

export default useForm;
