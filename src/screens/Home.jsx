import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import InputField from "../components/InputField";

const Home = () => {
  // Mock user data
  const [userData, setUserData] = useState({
    username: "Nipuna",
    nickname: "NY",
    password: "Nipuna@96",
    contact: "0712418222",
  });

  // State for editable fields
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  // Handle edit mode toggle
  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setEditedData({ ...userData }); // Reset editedData to userData when switching to edit mode
  };

  // Handle save changes
  const saveChanges = () => {
    setUserData({ ...editedData });
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full lg:w-2/3 md:w-3/4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Profile Header */}
          <div className="flex items-center mb-4">
            <img
              src="/src/img/profile-photo.jpg"
              alt="Profile"
              className="rounded-full w-24 h-24 mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold">{userData.username}</h2>
              <p className="text-gray-600">@{userData.nickname}</p>
            </div>
          </div>
          {/* Profile Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Profile Details</h3>
            <p>
              <strong>Password:</strong>{" "}
              {isEditing ? "********" : "******"} {/* Mask password when editing */}
              <br />
              <strong>Contact:</strong>{" "}
              {isEditing ? ( // Render input field if in edit mode
                <InputField
                  name="contact"
                  type="text"
                  value={editedData.contact}
                  handleChange={handleInputChange}
                />
              ) : (
                userData.contact // Otherwise render plain text
              )}
            </p>
          </div>
          {/* Editable Fields */}
          {isEditing && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Edit Profile</h3>
              <InputField
                label="Username"
                name="username"
                type="text"
                value={editedData.username}
                handleChange={handleInputChange}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                value={editedData.password}
                handleChange={handleInputChange}
              />
              <PrimaryButton
                label="Save Changes"
                bgcolor="#1877f2"
                textcolor="#ffffff"
                onClick={saveChanges}
              />
            </div>
          )}
          {/* Edit Button */}
          <div className="text-right">
            {!isEditing && (
              <PrimaryButton
                lable="Edit Profile"
                bgcolor="#1877f2"
                textcolor="#ffffff"
                onClick={toggleEdit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
