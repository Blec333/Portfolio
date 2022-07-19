import React, { useState } from 'react';
import profilePic from "../../img/Profile-Picture.png";
import fullstackCertImg from "../../img/fullstack-cert.jpg";
import bachelorsImg from "../../img/bachelors.jpg";

export default function Home() {



  return (
    <div className="bg-transparent w-full justify-center text-center">
      <br />
      <figure>
        <div className="flex justify-center py-8">
          <div className="w-24 h-24 rounded-[33px] overflow-hidden">
            <img alt="Headshot" src={profilePic} />
          </div>
        </div>
      </figure>
      <div className="flex flex-col items-center bg-transparent text-center py-8">
        <div className="w-2/3 h-auto rounded-box overflow-hidden">
          <img alt="Certification" src={fullstackCertImg} />
        </div>
      </div>
      <div className="flex flex-col items-center bg-transparent text-center py-8">
        <div className="w-2/3 h-auto rounded-box overflow-hidden">
          <img alt="Certification" src={bachelorsImg} />
        </div>
      </div>
    </div>
  );
}
