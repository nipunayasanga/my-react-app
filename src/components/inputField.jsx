import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";


function InputField ({ label , name , type , placeholder , values , handleChange })  {



  return (
    <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-full space-y-2">
      <div className="form-field-label sm:flex justify-between w-full hidden">

        <span className ="text-[#lalala] text-[12px] uppercase font-semibold " >          
        {label}
        </span>
          <ErrorMessage
          name={name}
          component="span"
          className="text-red-600 text-[12px]"
      />
      </div>

      <div className="form-field-input-container w-full rounded-[6px] h-[38px] bg-[#ffffff] border-[1px] border-[#565656] border-opacity-20 flex flex-row justify-items-center">
        <Field
          type={type}
          name={name}
          value={values[name]}
          onChange={handleChange}
          placeholder={placeholder}
          required
          className="w-full h-full p-2 bg-transparent outline-none text-[12px] form-field-input"
        />
      </div>
    </div>
  );
};

export default InputField;
