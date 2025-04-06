import React from "react";

const Loading = () => {
    return (
      <div className="flex justify-center items-center h-20 ">
        <div className="loading loading-ring loading-xl text-amber-600"></div>
        <div className="ml-4 text-xl text-orange-700">Loading... Please wait. </div>
      </div>
    );
  };
  
  export default Loading;
  