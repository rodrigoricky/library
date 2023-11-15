import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 max-w-[50%]">
      <div className="bg-[#fff5f1] px-6 lg:px-10 py-5 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center  items-center gap-5 text-center">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl justify-center font-medium">
              Grade 10 <br/><b>Poster Making </b><br/>Output
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
