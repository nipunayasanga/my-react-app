import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

export default function InputField( {label , name ,  type, placeholder, handleChange , values}) {

  return (
    <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-full space-y">
      <div className="form-field-label sm:flex justify-between w-full hidden">
        <label
          htmlFor="userID"
          className="text-[#1a1a1a] text-[12px] uppercase font-semibold"
        >
          {label}

        </label>
        <ErrorMessage
        name={name}
        component="span"
        className="text-red-600 text-[12px]"
        />
      </div>

      <div className="form-field-input-container w-full rounded-[6px] bg-[#ffffff] border-[1px] border-[#565656] border-opacity-20 flex flex-row justify-items-center">
        <Field
          type={type}
          name={name}
          values={values[name]}
          onChange={handleChange}
          id="userID"
          placeholder={placeholder}
          required
          className="w-full h-full p-2 bg-transparent outline-none text-[12px] form-field-input"
        />
      </div>
    </div>
  );
}
