import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from "reactstrap";
import { FaHospital, FaUserAlt } from "react-icons/fa";
import useForm from "../../customHooks/useForm";
import SignUpValidation from "./SignUpValidation";
const Signhospital = () => {
  const { handleChange, handleSubmit, values, errors, submiterror } = useForm(
    SignUpValidation
  );
  const [userRole, setUserRole] = useState("patients");
  return (
    <div className="section-cont">
      <div className="container">
        <Form
          onSubmit={(e) => {
            handleSubmit(e, userRole);
          }}
        >
          <h2>Sign Up</h2>
          <div className="text-center my-5">
            <ButtonGroup className="mb-3">
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
          <FormGroup className="mb-3">
            <Label for="name" className={errors.name && "text-danger"}>
              Name
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              className={
                errors.name ? "border border-danger" : "border border-info"
              }
              autoComplete="off"
            />
            {errors.name && (
              <p className="mt-2 text-danger h6">{errors.name}</p>
            )}
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="email" className={errors.email && "text-danger"}>
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your mail"
              value={values.email}
              className={
                errors.email ? "border border-danger" : "border border-info"
              }
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.email && (
              <p className="mt-2 text-danger h6">{errors.email}</p>
            )}
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="password" className={errors.password && "text-danger"}>
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              className={
                errors.password ? "border border-danger" : "border border-info"
              }
              placeholder="Enter password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="mt-2 text-danger h6">{errors.password}</p>
            )}
          </FormGroup>
          <FormGroup className="mb-3">
            <Label
              for="confirmPassword"
              className={errors.confirmPassword && "text-danger"}
            >
              Confirm Password
            </Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className={
                errors.confirmPassword
                  ? "border border-danger"
                  : "border border-info"
              }
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="mt-2 text-danger h6">{errors.confirmPassword}</p>
            )}
          </FormGroup>
          <Button>Submit</Button>
          {submiterror && <p className="mt-2 text-danger h6">{submiterror}</p>}
        </Form>
      </div>
    </div>
  );
};

export default Signhospital;
