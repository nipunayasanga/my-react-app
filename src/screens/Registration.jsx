import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import InputField from "../components/InputField";

const Registration = () => {
  const navigate = useNavigate();

  const handleRegistration = () => {
    // Handle registration logic 
    navigate("/Login"); 
  };

  const RegistrationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    contact: Yup.string().required("Required"),
    userID: Yup.string().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires a uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full lg:w-1/2 md:w-1/2">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Register an Account</h2>
        </div>
        <Formik
          initialValues={{
            username: "",
            email: "",
            contact: "",
            userID: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={RegistrationSchema}
          onSubmit={handleRegistration}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form className="flex flex-col">
              <InputField
                label="Username"
                name="username"
                type="text"
                placeholder="Username"
                handleChange={handleChange}
                values={values}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                handleChange={handleChange}
                values={values}
              />
              <InputField
                label="Contact"
                name="contact"
                type="text"
                placeholder="Contact"
                handleChange={handleChange}
                values={values}
              />
              <InputField
                label="UserID"
                name="userID"
                type="text"
                placeholder="UserID"
                handleChange={handleChange}
                values={values}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                handleChange={handleChange}
                values={values}
              />
              <InputField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                handleChange={handleChange}
                values={values}
              />
              <PrimaryButton
                lable="REGISTER"
                textcolor="#ffffff"
                bgcolor="#6c4cb5"
                type="submit"
              />

              <div className="w-full flex flex-row justify-between mt-3">
                <h5 className="text-[13px]">
                  Already have an account?{" "}
                  <span className=" text-[#6c4cb5]">
                    <Link to="/login">Login Now</Link>
                  </span>
                </h5>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
