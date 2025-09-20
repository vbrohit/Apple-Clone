import React from "react";

const Silk = ({ name }) => {
  return (
    <div className="w-full h-screen relative flex items-center justify-center">
      <div className="p-4 relative inline-block">
        <center>
          <h2 className="text-red-700 text-2xl font-bold sm:text-3xl md:text-5xl">
            Sorry! {name}  Page Not Built Yet
          </h2>
        </center>
      </div>
    </div>
  );
};

export default Silk;
