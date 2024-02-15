import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="w-full p-5 h-screen flex justify-center items-center relative ">
      <Formik
        initialValues={{
          userID: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched, handleChange, values }) => (

<Form className="flex flex-col lg:w-1/2 md:w-1/2 w-full">

  <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-full space-y">
    <div className="form-field-label sm:flex justify-between w-full hidden">
    <label htmlFor="userID" className="text-[#1a1a1a] text-[12px] uppercase font-semibold">
      UserID
    </label>
    <div className="">
        <span className="text-red-600 text-[12px]">Error</span>
    </div>
    </div>

    <div className="form-field-input-container w-full rounded-[6px] bg-[#ffffff] border-[1px] border-[#565656] border-opacity-20 flex flex-row justify-items-center">
      <Field
        type="text"
        name="userID"
        id="userID"
        placeholder="User ID"
        required
        className="w-full h-full p-2 bg-transparent outline-none text-[12px] form-field-input"
      />
    </div>
  </div>

<button
type="submit"
className="w-full rounded-md h-[44px] mt-3 bg-sky-800 text-[#ffff]">
Login
</button>


</Form>

        )}
      </Formik>
    </div>
  );
};
export default Login;
