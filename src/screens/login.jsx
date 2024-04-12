import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import InputField from "../components/InputField";
import InputPassword from "../components/InputPassword";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);
  const [userVerify , setUserVerify] = useState(null);

  const LoginSchema = Yup.object().shape({
    userID: Yup.string().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Required"),
  });

  const handleLogin = async (values) => {
    try {
      const response = await axios.post('http://localhost:3001/userLogin', values);
      const token = response.data.token;
      localStorage.setItem('token', token);

      //////////time-out //////////////////
      setTimeout (() => {
        localStorage.removeItem('token');
      }, 10 * 60 * 1000); // 10 min in milliseconds

      setUserVerify('User Verify');
      navigate('/Home');
    } catch (error) {
      if (error.response.status === 401) {
        if (error.response.data.error === 'User Not Found') {
          setLoginError('User Not Found. Please Check Your Credentials');
        } else if (error.response.data.error === 'Invalid Password') {
          setLoginError('Invalid Password. Please Check Your Credentials');
        }
      } else {
        console.error('Something went wrong on the server!', error.message);
      }
    }
  };

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
            <Form className="flex flex-col items-center">
              <InputField
                label="USERNAME"
                name="userID"
                type="text"
                placeholder="Username"
                handleChange={handleChange}
                values={values}
              />
              <InputPassword
                label="PASSWORD"
                name="password"
                type="password"
                placeholder="Password"
                handleChange={handleChange}
                values={values}
              />
              <PrimaryButton
                label="LOGIN"
                textcolor="#ffffff"
                bgcolor="#6c4cb5"
                type="submit"
              />
              {loginError && (
                <p className="text-red-600 text-[12px]">{loginError}</p>
              )}
              {userVerify && (
                <p className="text-green-600 text-[12px]">{userVerify}</p>
              )}
              <div className="w-full flex flex-row justify-between mt-3">
                <h5 className="text-[13px]">
                  Don't have an account?{" "}
                  <span className="text-[#6c4cb5]">
                    <Link to="/Registration">Register Now</Link>
                  </span>
                </h5>
                <h5 className="text-[13px]">
                  <span className="text-[#6c4cb5]">Forget Password?</span>
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
