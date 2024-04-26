import React, { useState } from "react";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../InputField"; // Assuming this is a custom component for input fields
import axios from "axios";

const AddRelation = ({ onClose }) => {


  const [successMessage, setSuccessMessage] = useState(null);

  const relationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    relation: Yup.string().required("Required"),
  });

  const handleRelation = async (values, {resetForm}) => {
    try {
      
      const token = localStorage.getItem('token');

      if(!token)
      {
        throw new Error ("No taken found");
      }

      const response = await axios.post("http://localhost:3001/addRelation", values,{
        headers:{
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })


      setSuccessMessage("Relation assingned Successfully");
      console.log(response.data.message);
      resetForm();
      
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Popup
      open={true}
      modal
      nested
      closeOnDocumentClick={false}
      closeOnEscape={false}
    >
      <div className="w-screen h-screen bg-[#565656] bg-opacity-40 backdrop-blur-sm relative flex justify-center items-center z-20">
        <div className="modal p-5 bg-white rounded-lg w-[50%] lg:w-[50%] h-screen border-[2px] border-[#a57eff]">
          <div className="flex flex-row justify-end w-full">
            <div
              className="close flex w-[22px] h-[22px] rounded-full bg-[#a57eff] text-[#ffffff] justify-center items-center cursor-pointer"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faClose} />
            </div>
          </div>

          <h3 className="text-[#a57eff] text-[16px] mt-3 text-center">
            Add Relation
          </h3>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              relation: "",
            }}
            validationSchema={relationSchema}
            onSubmit={handleRelation}
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
                    label="Relationship"
                    name="relation"
                    type="text"
                    placeholder="Relationship"
                    handleChange={handleChange}
                    values={values}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-gradient-to-r from-[#a57eff] to-[#8f5ffe] text-white uppercase font-semibold py-2 mt-5"
                >
                  Add Relation
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Popup>
  );
};

export default AddRelation;
