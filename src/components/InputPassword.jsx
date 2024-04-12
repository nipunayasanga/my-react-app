import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faL, faLock } from '@fortawesome/free-solid-svg-icons';


function InputField ({ label , name , type , placeholder , values , handleChange })  {

const [passwordVisible, setPasswordVisible] = useState(false);

const togglePassword = () => {
  setPasswordVisible(!passwordVisible);
}

  return (
    <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-full space-y-2">
      <div className="form-field-label sm:flex justify-between w-full hidden">

        <span className ="text-[#1a1a1a] text-[12px] uppercase font-semibold " >          
        {label}
        </span>
          <ErrorMessage
          name={name}
          component="span"
          className="text-red-600 text-[12px]"
      />
      </div>

      <div className="form-field-input-container w-full rounded-[6px] h-[38px] bg-[#ffffff] border-[1px] border-[#565656] border-opacity-20 flex flex-row justify-items-center">
      <div className="form-field-input-icobox bg-[#6c4cb5] h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex">
      <span className="text-[16px] text-[#ffffff]">
      <FontAwesomeIcon icon={faLock}/>
      </span>
        </div>

        <Field
          type={passwordVisible ? 'text' : 'password'}
          name={name}
          value={values[name]}
          onChange={handleChange}
          placeholder={placeholder} 
          required
          className="w-full h-full p-2 bg-transparent outline-none text-[12px] form-field-input"
        />

        <div className="h-[38px] w-[38px] rounded-b1-[6px] rounded-t1-[6px] justify-center items-center flex">


    {
      passwordVisible ? (
        <span className="text-[16px]  text-[#141010] cursor-pointer"
        onClick={togglePassword}>
          
      <FontAwesomeIcon icon={faEye}/>
      </span>

      ) : (

        <span className="text-[16px]  text-[#141010] cursor-pointer"
      onClick={togglePassword}>
      <FontAwesomeIcon icon={faEyeSlash}/>
      </span>

      )
    }





        </div>
      </div>
    </div>
  );
};

export default InputField;
