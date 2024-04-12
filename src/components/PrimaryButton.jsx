import React from "react";

function PrimaryButton( {label , eventname , bgcolor , textcolor , type}) {

    const buttonStyle = {
        backgroundColor:bgcolor,
        color:textcolor,
    }

  return (
    <div>
      <button
        type="submit"
        className="w-[300px] rounded-md h-[44px] mt-3 "
        onClick={eventname}
        style={buttonStyle}
      >
    {label}
      </button>
    </div>
  )
}

export default PrimaryButton;
