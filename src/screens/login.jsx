import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import InputField from "../components/InputField";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Home");
  };

  const LoginSchema = Yup.object().shape({
    userID: Yup.string().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires a uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Required"),
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full lg:w-1/2 md:w-1/2">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Welcome to the Login Page</h2>
        </div>
        <Formik
          initialValues={{
            userID: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form className="flex flex-col">
              <InputField
                label="USERNAME"
                name="userID"
                type="text"
                placeholder="Username"
                handleChange={handleChange}
                values={values}
              />
              <InputField
                label="PASSWORD"
                name="password"
                type="password"
                placeholder="Password"
                handleChange={handleChange}
                values={values}
              />
              <PrimaryButton
                lable="LOGIN"
                textcolor="#ffffff"
                bgcolor="#6c4cb5"
                type="submit"
              />

              <div className="w-full flex flex-row justify-between mt-3">
                <h5 className="text-[13px]">
                  Don't have and an account?{" "}
                  <span className=" text-[#6c4cb5]">
                    <Link to="/Registration">Register Now</Link>
                  </span>
                </h5>

                <h5 className="text-[13px]">
                  <span className=" text-[#6c4cb5]">Forget Password?</span>
                </h5>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
