import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form } from "formik"; // Import necessary components from Formik
import * as Yup from "yup"; // Import Yup for form validation
import InputField from "../InputField"; // Assuming this is a custom component for input fields
import axios from "axios";

// ProfileEdit component responsible for displaying a popup to edit user profile
const ProfileEdit = ({ profileData, onClose }) => {
  // Define Yup validation schema for form validation
  const ProfileSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"), // First name is required
    lastName: Yup.string().required("Required"), // Last name is required
    email: Yup.string().email("Invalid email").required("Required"), // Email validation
    contact: Yup.string()
      .matches(/[0-9]/, "Only digits") // Only digits allowed
      .max(10, "Only 10 digits") // Maximum 10 characters allowed
      .min(10, "Minimum 10 digits") // Minimum 10 characters required
      .required("Required"), // Contact number is required
  });

  // Handle user data update upon form submission
  const handleUserUpdate = async (values) => {
    try {
      console.log("Form Data: ", values );
      const response = await axios.put('http://localhost:3001/updateUserDetails' , values ,{
        headers:{
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      });
      // You can add logic here to update user data using Axios or other methods
      console.log('response', response.data)
    } catch (error) {
      console.log("Error", error);
    }
  };









  // Render the ProfileEdit popup component
  return (
    <Popup
      open={true} // Always open the popup when this component is rendered
      modal // Render as a modal popup
      nested // Allow nesting of popups
      closeOnDocumentClick={false} // Disable closing on outside click
      closeOnEscape={false} // Disable closing on escape key press
    >
      <div className="w-screen h-screen bg-[#565656] bg-opacity-40 backdrop-blur-sm relative flex justify-center items-center z-20">
        <div className="modal p-5 bg-white rounded-lg w-[50%] lg:w-[50%] h-screen border-[2px] border-[#a57eff]">
          <div className="flex flex-row justify-end w-full">
            {/* Close button */}
            <div
              className="close flex w-[22px] h-[22px] rounded-full bg-[#a57eff] text-[#ffffff] justify-center items-center cursor-pointer"
              onClick={onClose} // Handle click event to close the popup
            >
              <FontAwesomeIcon icon={faClose} />
            </div>
          </div>

          <h3 className="text-[#a57eff] text-[16px] mt-3 text-center">
            Edit Profile
          </h3>

          {/* Formik form for profile editing */}
          <Formik
            initialValues={{
              firstName: profileData.firstName,
              lastName: profileData.lastName,
              email: profileData.email,
              contact: profileData.contact,
              city: profileData.city,
              school: profileData.school,
              

            }}
            validationSchema={ProfileSchema} // Apply validation schema to the form
            onSubmit={handleUserUpdate} // Handle form submission
          >
            {({ handleChange, values }) => (
              <Form className="flex flex-col space-y-4">
                {/* Input fields for profile data */}
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

                <div className="flex space-x-4">
                  <InputField
                    label="city"
                    name="city"
                    type="text"
                    placeholder="city"
                    handleChange={handleChange}
                    values={values}
                  />
                  <InputField
                    label="school"
                    name="school"
                    type="text"
                    placeholder="school"
                    handleChange={handleChange}
                    values={values}
                  />
                </div>

                

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-gradient-to-r from-[#a57eff] to-[#8f5ffe] text-white uppercase font-semibold py-2 mt-5"
                >
                  Update
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Popup>
  );
};

export default ProfileEdit;
