import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import InputField from "../components/InputField";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(false);

  const handleUserRegistration = async (values, { resetForm }) => {
    try {
      console.log('Form Data : ', values);
      const response = await axios.post('http://localhost:3001/addNewUser', values);
      console.log('Response : ', response.data);

      if (response.data.message === 'User Registered successfully') 
      {
        setSuccessMessage(true); // Set successMessage to true if registration is successful
        resetForm(); // Reset the form after successful registration
      }
    } catch (error) {
      console.log('Errors', error);
    }
  };

  const RegistrationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    contact: Yup.string()
      .matches(/[0-9]/, "Only digits")
      .max(10, "Only 10 digits")
      .min(10, "Minimum 10 digits")
      .required("Required"),



    userID: Yup.string()
      .matches(/[0-9]/, "Must contain a digit")
      .matches(/[a-z]/, "UserID requires a lowercase letter")
      .matches(/[A-Z]/, "UserID requires an uppercase letter")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol")
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
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            userID: "",
            password: "",
          }}
          validationSchema={RegistrationSchema}
          onSubmit={handleUserRegistration}
        >
          {({ handleChange, values }) => (
            <Form className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <InputField
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  handleChange={handleChange}
                  values={values}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  handleChange={handleChange}
                  values={values}
                />
              </div>
              <div className="flex space-x-4">
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
              </div>
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
              <div className="flex justify-center">
                <PrimaryButton
                  label="REGISTER"
                  textcolor="#ffffff"
                  bgcolor="#6c4cb5"
                  type="submit"
                />
              </div>

              {successMessage && (
                <p className="text-green-600">User Registered Successfully!</p>
              )}

              <div className="text-center">
                <h5 className="text-sm">
                  Already have an account?{" "}
                  <span className="text-blue-600">
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
