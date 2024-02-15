import React from "react";

function PrimaryButton( {lable , eventname , bgcolor , textcolor , type}) {

    const buttonStyle = {
        backgroundColor:bgcolor,
        color:textcolor,
    }

  return (
    <div>
      <button
        type="submit"
        className="w-full rounded-md h-[44px] mt-3 "
        onClick={eventname}
        style={buttonStyle}
      >
    {lable}
      </button>
    </div>
  )
}

export default PrimaryButton;
