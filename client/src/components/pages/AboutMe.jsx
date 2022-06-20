import React from 'react';
import profilePic from "../../img/Profile-Picture.png";

export default function AboutMe() {
  return (
    <>
      <div className="bg-transparent w-full justify-center text-center">
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
          <div className="text-primary-content text-center">Proficient and resourceful Project and Preconstruction Manager with 8+ years of extensive industry experience providing cutting-edge solutions in the design, engineering, and construction sectors. Analytical and practical-minded, adept at identifying opportunities for improvement, implementing changes, and measuring the impact of those changes. Exceptionally competent management specialist equipped with unmatched competencies in project plan implementation and mechanical design management. Exemplified integrity, accountability, and solid work ethic with an excellent grasp of project management methodologies to nurture productive collaborations and achieve optimal results. A focused leader in adopting new tools and techniques that improve data management and boost inter-departmental collaboration.
          </div>
        </div>
        <br />
        <br />
        <div className="flex overflow-x-auto bg-transparent text-center justify-center">
          <table className="table-auto text-primary-content text-center">
            <thead>
              <th className="text-center p-4">Personal Interests</th>
            </thead>
            <tbody>
              <td className="flex flex-col items-start text-left p-4 border-collapse border border-slate-400">
                <tr className='hover:bg-base-300'>* Spending time with my wife & boys!</tr>
                <tr className='hover:bg-base-300'>* Building applications</tr>
                <tr className='hover:bg-base-300'>* Construction</tr>
                <tr className='hover:bg-base-300'>* Engineering</tr>
                <tr className='hover:bg-base-300'>* Trade Craft</tr>
                <tr className='hover:bg-base-300'>* Biking</tr>
                <tr className='hover:bg-base-300'>* Swimming - Pool (not ocean)</tr>
                <tr className='hover:bg-base-300'>* Reading about emerging technologies</tr>
                <tr className='hover:bg-base-300'>* Pondering the mysteries of the universe</tr>
                <tr className='hover:bg-base-300'>* Wine & Craft Beer</tr>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
