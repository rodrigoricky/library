import React from "react";
import '../styles/App.module.css';
export default function Teacher() {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
       Output
      </p>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
      Story Poster Making
      </p>
      <div className="flex justify-center gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
          <img className="zoom" src="/assets/2.png" alt="v1" width={400} style={{borderRadius:"10px"}} />
              <a href='/english.pdf' className="hover-underline-animation">
                <p className="text-2xl font-semibold">Daedalus and Icarus</p>
              </a>
          <div className="flex items-center gap-2">
            <img src="/assets/us.png" width={40} alt="itersfgjds" />
            <p className="text-gray-500">
          English
          </p>
          
          </div>
       
        </div>
       
       
        <div className="flex flex-col gap-5 ">
          <img src="/assets/3.png" alt="v1" width={401} style={{borderRadius:"10px"}}/>
          <a href='/filipino.pdf' className="hover-underline-animation">
          <p className="text-2xl font-semibold" >Kuban ng Notre Dame</p>
          </a>
          <div className="flex items-center gap-2">
            <img src="/assets/ph.png" width={40} alt="itersfgjds" />
            <p className="text-gray-500">
          Filipino
          </p>
          </div>
       
        </div>
      </div>
    </div>
  );
};