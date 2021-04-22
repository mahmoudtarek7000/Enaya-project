import React, { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input,ButtonGroup } from "reactstrap";
import { auth, signInWitthGoogle } from "../firebase/config";
import { FaHospital, FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

const initialState = {
  email: "",
  password: "",
};

const Loghospital = () => {

  const [values, setValues] = useState({ ...initialState });
  const [submitting, setSubmitting] = useState(false);
  const [userRole, setUserRole] = useState("patients");
  const { userLogin } = useContext(AuthContext);

  const handleChanges = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  useEffect(() => {
    const { email, password } = values;
    let unSubscribe;
    if (submitting)
      unSubscribe = auth.signInWithEmailAndPassword(email, password);
    setValues(initialState);
    return unSubscribe;
    // eslint-disable-next-line
  }, [submitting]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    userLogin(userRole);
  };
  return (
    <div className="section-cont">
      <div className="container">
        <h2>Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <div className="text-center my-5">
            <ButtonGroup>
              <Button
                className={
                  userRole === "patients" ? "brn btn-dark" : "btn btn-light"
                }
                onClick={() => setUserRole("patients")}
                active={userRole === "patients"}
              >
                <FaUserAlt className="mr-2 h3" />
                Patient
              </Button>
              <Button
                className={
                  userRole === "hospitals" ? "brn btn-dark" : "btn btn-light"
                }
                onClick={() => setUserRole("hospitals")}
                active={userRole === "hospitals"}
              >
                <FaHospital className="mr-2 h3" />
                Hospital
              </Button>
            </ButtonGroup>
          </div>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your mail"
              value={values.email}
              onChange={handleChanges}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={values.password}
              onChange={handleChanges}
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
        {/* <Button className="d-block my-3" onClick={signInWitthGoogle}>Log in with Google</Button> */}
      </div>
    </div>
  );
};

export default Loghospital;
