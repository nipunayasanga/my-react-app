import React, { useEffect, useState } from "react";
import {
  ArrowBack,
  EmailOutlined,
  LocalPhoneOutlined,
  CameraAltSharp,
  EditNote,
} from "@mui/icons-material";
import { faCameraAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import InputField from "../components/InputField";
import profileImage from "../Assets/Images/profile.jpg"; // Import your profile image
import axios from "axios";
import ProfileEdit from "../components/modals/ProfileEdit";
import AddRelation from "../components/modals/AddRelation";
import RelationCard from "../components/RelationCard";

function Home() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isPopupOpen, setPopUpOpen] = useState(false);
  const [isPopupOpenRelation, setPopupOpenRelation] = useState(false);
  const [relationsData, setRelationsData] = useState([]);


  // Function to fetch user details from the server
  const getUserDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Token Not found");
      }

      if (token) {
        const response = await axios.get(
          "http://localhost:3001/loggedUserBio",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserData(response.data);
        console.log(userData); // Logging userData (may show stale state due to closure)
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  // Fetch user details on component mount
  useEffect(() => {
    getUserDetails();

    // Reload page if token is not found on mouse move (not recommended for security)
    const handleMouseMove = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.reload();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);



  const getRelations =async () => {

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Token Not found");
      }
      const response = await axios.get('http://localhost:3001/userRelations',{
        headers: {
          Authorization:  `Bearer ${token}`,
        },

      })

      setRelationsData(response.data);
      console.log("Relation Data: " , relationsData);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRelations();
  }, [])


  // Function to open the ProfileEdit popup
  const openPopup = () => {
    setPopUpOpen(true);
  };

  // Function to close the ProfileEdit popup
  const closePopup = () => {
    setPopUpOpen(false);
  };

  // Function to open the AddRelation popup
  const openPopupRelation = () => {
    setPopupOpenRelation(true);
  };

  // Function to close the AddRelation popup
  const closePopupRelation = () => {
    setPopupOpenRelation(false);
  };

  const handleDeleteRelation = async (relationId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token Not found");
      }
  
      // Send DELETE request to delete the relation by relationId
      await axios.delete(`http://localhost:3001/deleteRelation/${relationId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Corrected template string for token
        },
      });
  
      // Update relations data in the local state by filtering out the deleted relation
      setRelationsData((prevRelations) =>
        prevRelations.filter((relation) => relation.id !== relationId)
      );
    } catch (error) {
      console.log("Error deleting data", error);
    }
  };
  


  return (
    <div className="w-full h-screen flex flex-col items-center p-2 space-y-2">
      {/* Header section */}
      <div className="w-full md:w-[80%] lg:w-[60%] flex justify-start items-center">
        <span className="text-[14px]">
          {" "}
          <ArrowBack fontSize="small" /> Back
        </span>
      </div>

      {userData ? ( // Conditional rendering based on userData
        <>
          {/* Main content section */}
          <div className="w-full md:w-[80%] lg:w-[60%] md:p-5 flex flex-col space-y-3 border-[1px] rounded-md border-[#565656] border-opacity-25">
            <div className="w-full bg-slate-900 rounded-sm p-2 md:p-5 flex flex-col justify-center items-center space-y-3 relative">
              {/* Profile image section */}
              <div className="profile-wrapper w-[96px] h-[96px] md:w-[128px] md:h-[128px] bg-slate-200 rounded-full relative">
                <img
                  src={profileImage}
                  alt="Profile-Image"
                  className="w-full h-full rounded-full object-cover"
                />
                {/* Upload profile image button */}
                <label className="mx-auto p-2 flex justify-center items-center text-[#a573ff] cursor-pointer bg-white rounded-full absolute right-0 bottom-1">
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={""}
                    accept="image/"
                  />
                  <CameraAltSharp />
                </label>
              </div>

              {/* User details section */}
              <div className="justify-center items-center mx-auto">
                <h2 className="text-white font-semibold text-[16px] uppercase">
                  {userData.firstName} {userData.lastName}
                </h2>
              </div>

              {/* Action buttons */}
              <div className="flex flex-row space-x-3 absolute bottom-2 right-2">
                {/* Add Relations button */}
                <div
                  className="px-4 py-1 rounded-sm bg-[#a573ff] hover:bg-[#8f5ffe] cursor-pointer text-white transition-all ease-in-out  text-[10px] "
                  onClick={openPopupRelation}
                >
                  <EditNote /> Add Relations
                </div>

                {/* Edit button */}
                <div
                  className="px-4 py-1 rounded-sm bg-[#a573ff] hover:bg-[#8f5ffe] cursor-pointer text-white transition-all ease-in-out  text-[10px] "
                  onClick={openPopup}
                >
                  <EditNote /> Edit
                </div>
              </div>
            </div>

            {/* Additional user information section */}
            <div className="w-full p-2 md:p-5 flex flex-col">
              <div className="flex flex-row space-x-3 justify-start items-center">
                <LocalPhoneOutlined className="font-semibold text-[#838383]" />
                <h2 className="text-[#838383]"> {userData.contact}</h2>
              </div>
              <div className="flex flex-row space-x-3 justify-start items-center">
                <EmailOutlined className="font-semibold text-[#838383]" />
                <h2 className="text-[#838383]">{userData.email}</h2>
              </div>

              {/* Display additional user information (e.g., school) if available */}
              {userData.school && (
                <div className="flex flex-row space-x-3 justify-start items-center">
                  <EmailOutlined className="font-semibold text-[#838383]" />
                  <h2 className="text-[#838383]">{userData.school}</h2>
                </div>
              )}

              {/* Render ProfileEdit modal if isPopupOpen is true */}
              {isPopupOpen && (
                <ProfileEdit onClose={closePopup} profileData={userData} />
              )}

              {/* Render AddRelation modal if isPopupOpenRelation is true */}
              {isPopupOpenRelation && (
                <AddRelation onClose={closePopupRelation} />
              )}


<div className="mt-5 mb-5 flex flex-wrap w-full">

  {relationsData && relationsData.map(relation =>(
    <RelationCard
    
    key={relation.id}
    relationsData={relation}
    onDelete={() => handleDeleteRelation(relation.id)}
  
    />
  ))}

  
</div>


            </div>
          </div>
        </>
      ) : (
        // Rendered when userData is not available (e.g., during initial load or authentication failure)
        <div className="w-1/2 mx-auto p-3 flex-col flex justify-center items-center">
          <h2 className="font-semibold text-[1.5rem] text-[#161616]">
            404 Not Found
          </h2>
          <p className="text-red-600 text-[14px]">
            Access Expired! Please Login Again.
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
