import React from "react";
import { ArrowBack, EmailOutlined, LocalPhoneOutlined, CameraAltSharp, EditNote} from "@mui/icons-material";
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
        <span className="text-[14px]"> <ArrowBack fontSize="small" /> Back</span>
      </div>

      <div className="w-full md:w-[80%] lg:w-[60%] md:p-5 flex flex-col space-y-3 border-[1px] rounded-md border-[#565656] border-opacity-25">
        <div className="w-full bg-slate-900 rounded-sm p-2 md:p-5 flex flex-col justify-center items-center space-y-3 relative">
          <div className="profile-wrapper w-[96px] h-[96px] md:w-[128px] md:h-[128px] bg-slate-200 rounded-full relative">
            {/* Display the profile image */}
            <img 
            src={profileImage} 
            alt="Profile-Image" 
            className="w-full h-full rounded-full object-cover"
             />

          <label className="mx-auto p-2 flex justify-center items-center text-[#a573ff] cursor-pointer bg-white rounded-full absolute right-0 bottom-1" >
              <input 
              type="file"
              style={{display:"none"}}
              onChange={''}
              accept="image/"
              />
              <CameraAltSharp/>

            </label>

          </div>
        

            <div className="justify-center items-center mx-auto ">
              <h2 className="text-white font-semibold text[16px] uppercase">
                {" "}
                my name is{" "}
                </h2>
             </div>

            <div className="px-4 py-1 rounded-sm bg-[#a573ff] hover:bg-[#8f5ffe] cursor-pointer text-white transition-all ease-in-out bottom-2 right-2 text-[10px] absolute">

              <EditNote/>
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
