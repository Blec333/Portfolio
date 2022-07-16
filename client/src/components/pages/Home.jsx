import React, { useState } from 'react';
import profilePic from "../../img/Profile-Picture.png";

export default function Home() {



  return (
    <div className="bg-transparent w-full justify-center text-center max-w-5xl">
      <br />
      <figure>
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img alt="Headshot" src={profilePic} />
          </div>
        </div>
      </figure>
      <div className="z-20 card-body justify-center">
        <h1 className="card-title text-primary-content justify-center text-center">Brennan LeClair</h1>
        <p className="text-primary-content text-center">Software Developer</p>
        <p className="text-primary-content text-center">(619) 354-7965</p>
        <p className="text-primary-content text-center">brennanl.dev@gmail.com</p>
        <div className="card-actions justify-center">
          <a href="https://www.linkedin.com/in/brennanleclair" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center">LinkedIn</button></a>
          <a href="https://github.com/Blec333" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center">GitHub</button></a>
        </div>
      </div>
      <div className="bg-transparent text-center">
        <div className="text-primary-content text-center">Welcome to my portfolio!  This site is an example of a MERN fullstack application backed by MongoDB.  I'm currently open to full-time and contract opportunities in software development including MERN sack, VBA, Lisp, C#.NET, and Dynamo.  You will find a download link to my resume available in the header as well as on the resume page. If you wish to contact me you may reach out from the contact me page.
        </div>
      </div>
    </div>
  );
}
