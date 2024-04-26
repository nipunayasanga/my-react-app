import React from "react";

function RelationCard({relationsData}) {
  return (
    <div className="p-2 w-1/3">
      <div className="w-full p-2 border-[1px] rounded-md border-[#565656] border-opacity-30 flex flex-col relative">
        <h2 className="font-semibold text-base text-slate-800">{relationsData.firstName}{" "} {relationsData.lastName} </h2>
        <h2 className="text-x5 text-gray-500">{relationsData.relation}</h2>
      </div>
    </div>
  );
}

export default RelationCard;
