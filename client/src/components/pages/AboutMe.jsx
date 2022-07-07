
import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_INTERESTS } from "../../utils/queries";

import InterestBlock from '../InterestBlock';

import profilePic from "../../img/Profile-Picture.png";
import spinner from '../../assets/spinner.gif';



export default function AboutMe() {


  const [interests, setInterests] = useState([]);
  const interestsData = useQuery(QUERY_INTERESTS);

  useEffect(() => {
    if (!interestsData.loading) {
      setInterests(interestsData.data.interests);
    }
  }, [interestsData]);

  if (interestsData.loading) {
    return <img src={spinner} alt="loading" />
  } else if (interestsData.error) {
    return <p>{`Error: ${interestsData.error.message}`}</p>
  }


  return (
    <>
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
          <div className="text-primary-content text-center">Proficient and resourceful Software Developer, Project Manager and Preconstruction Manager with 8+ years of extensive industry experience providing cutting-edge solutions in the design, engineering, and construction sectors. Analytical and practical-minded, adept at identifying opportunities for improvement, implementing changes, and measuring the impact of those changes. Exceptionally competent management specialist equipped with unmatched competencies in project plan implementation and mechanical design management. Exemplified integrity, accountability, and solid work ethic with an excellent grasp of project management methodologies to nurture productive collaborations and achieve optimal results. A focused leader in adopting new tools and techniques that improve data management and boost inter-departmental collaboration.
          </div>
        </div>
        <h2 className="text-xl text-bold underline text-primary-content text-center py-8">PERSONAL INTERESTS</h2>
        <div className="flex overflow-x-auto bg-transparent text-center justify-center">
          <table className="table-auto text-primary-content text-center">
            <thead>
              <tr>
                <th className="text-center">Interest</th>
                <th className="text-center">Category</th>
              </tr>
            </thead>
            <tbody>
              {interests.map(interest => (
                <InterestBlock
                  interest={interest.interest}
                  category={interest.category}
                />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
