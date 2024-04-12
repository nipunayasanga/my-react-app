import React from "react";
import { EmailOutlined, LocalPhoneOutlined } from "@mui/icons-material";
import { faCameraAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import InputField from "../components/InputField";
// Import your profile image
import profileImage from "../Assets/Images/profile.jpg";

function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-2 space-y-2">
      <div className="w-full md:w-[80%] lg:w-[60%] flex justify-start items-center">
        <span className="text-[14px]">Back</span>
      </div>

      <div className="w-full md:w-[80%] lg:w-[60%] md:p-5 flex flex-col space-y-3 border-[1px] rounded-md border-[#565656] border-opacity-25">
        <div className="w-full bg-slate-900 rounded-sm p-2 md:p-5 flex flex-col justify-center items-center space-y-3 relative">
          <div className="profile-wrapper w-[96px] h-[96px] md:w-[128px] md:h-[128px] bg-slate-200 rounded-full">
            {/* Display the profile image */}
            <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
        <div className="w-full p-2 md:p-5 flex flex-col">
          <div className="flex flex-row space-x-3 justify-start items-center">
            {/* Display phone icon */}
            <LocalPhoneOutlined className="font-semibold text-[#838383]" />
            <h2 className="text-[#838383]">my contact</h2>
          </div>
          <div className="flex flex-row space-x-3 justify-start items-center">
            {/* Display email icon */}
            <EmailOutlined className="font-semibold text-[#838383]" />
            <h2 className="text-[#838383]">email</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
