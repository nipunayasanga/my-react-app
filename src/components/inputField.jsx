import React from "react";

const InputField = ({ label, name, type, value, handleChange }) => {
  return (
    <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-full space-y">
      <div className="form-field-label sm:flex justify-between w-full hidden">
        <label
          htmlFor={name}
          className="text-[#1a1a1a] text-[12px] uppercase font-semibold"
        >
          {label}
        </label>
      </div>
      <div className="form-field-input-container w-full rounded-[6px] bg-[#ffffff] border-[1px] border-[#565656] border-opacity-20 flex flex-row justify-items-center">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={label}
          required
          className="w-full h-full p-2 bg-transparent outline-none text-[12px] form-field-input"
        />
      </div>
    </div>
  );
};

export default InputField;
