import { useState, useEffect, useContext } from "react";
import { auth } from "../components/firebase/config";
import { AuthContext } from "../context/AuthProvider";
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  coverPhoto : "https://services.harman.com/SiteCollectionImages/Industries/healthcare/Healthcare-New-Images/Banner%202%20-%20HARMAN%20positioned%20as%20a%20leader%20in%20Healthcare%20IoT%20Services%20.jpg",
  logo: "https://i.pinimg.com/originals/c1/cb/77/c1cb771a2674f5007f12af836e3055ec.jpg",
};
const useForm = (validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const { handleUserProfile,setUserType } = useContext(AuthContext);
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
    const { name, email, password, coverPhoto, logo} = values;
    if (Object.keys(errors).length === 0 && Object.keys(focused).length === 4) {
      localStorage.setItem("user", userType);
      setUserType(localStorage.getItem("user"));

      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password,
        );
        await handleUserProfile(user, userType, { name,coverPhoto, logo });
        setValues({ ...initialState });
      } catch (error) {}
    }else{
      setsubmiterror("Fill required fields with his requirements")
    }
  };
  return { handleChange, handleSubmit, values, errors,submiterror };
};

export default useForm;
