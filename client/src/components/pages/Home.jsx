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
          <a href="https://www.google.com/maps/place/San+Diego,+CA/@32.8247626,-117.2494014,11z/data=!3m1!4b1!4m5!3m4!1s0x80d9530fad921e4b:0xd3a21fdfd15df79!8m2!3d32.715738!4d-117.1610838?hl=en&authuser=0" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center">San Diego</button></a>
          <a href="https://www.linkedin.com/in/brennanleclair" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center">LinkedIn</button></a>
          <a href="https://github.com/Blec333" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center">GitHub</button></a>
          <a href="https://github.com/Blec333/portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center">Portfolio Repo</button></a>
        </div>
      </div>
      <div className="bg-transparent text-center">
        <div className="text-primary-content text-center">Welcome to my portfolio! Please feel free to peruse at your leisure. This site is an example of a MERN fullstack application backed by MongoDB.  You will find a download link to my resume available in the header as well as on the resume page. If you wish to contact me you may reach out from the Contact Me page.  I am currently open to employment opportunities.
        </div>
      </div>
    </div>
  );
}
