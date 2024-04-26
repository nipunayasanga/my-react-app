import React from "react";
import { DeleteOutlineRounded } from "@mui/icons-material";

function RelationCard({relationsData, onDelete}) {


  const deleteMe =() => {
    console.log("delete data: ", relationsData.id);
  }

  if(relationsData){
    console.log("Incoming data to Relation Card", relationsData);
  }

  return (
    <div className="p-2 w-1/3">
      <div className="w-full p-2 border-[1px] rounded-md border-[#565656] border-opacity-30 flex flex-col relative">
        <div 
        onClick={onDelete}
        className="absolute top-2 right-2 text-xs text-[#a3a3a3] hover:text-[#a573ff] cursor-pointer hover:scale-110 ">
          <DeleteOutlineRounded fontSize="small"/>
        </div>
        <h2 className="font-semibold text-base text-slate-800">{relationsData.firstName}{" "} {relationsData.lastName} </h2>
        <h2 className="text-x5 text-gray-500">{relationsData.relation}</h2>
      </div>
    </div>
  );
}

export default RelationCard;
