
import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_INTERESTS } from "../../utils/queries";

import InterestBlock from '../functional/component-assemblies/component-blocks/InterestBlock';

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
      <div className="bg-transparent w-full justify-center text-center">
        <br />
        <figure>
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-[33px] overflow-hidden">
              <img alt="Headshot" src={profilePic} />
            </div>
          </div>
        </figure>
        <div className="card-body justify-center">
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
          <div className="text-primary-content text-center p-3 m-3">As an accomplished professional with 8+ years of industry experience, I understand the importance of delivering technology-driven solutions. My experience has proven that developing custom software solutions to accomplish project objectives is a key contributing factor to the success of any project.
          </div>
          <div className="text-primary-content text-center p-3 m-3">
          My talents with VBA, Lisp, C#.NET, and Dynamo have contributed greatly to operational efficiency and productivity in previous roles. In addition, my technological skills extend to the development of responsive software such as web applications within the MERN stack which can be found on the portfolio page of this site (see link withn "Pages" above). I am adept in interpersonal communication and a consistent collaborator in implementing technological innovations for process improvement. Examples include the development of new tools to manage workflow and financial information with data analysis summaries.
        </div>
        <div className="text-primary-content text-center p-3 m-3">
          My past experience has enabled me to expand and acquire expertise in developing budget estimates, determining staff requirements, project scoping, and scheduling. I have also demonstrated expertise in systems optimizations throughout my career. Focusing on improved communication and collaborative synergy, I introduced SharePoint architecture, organized tiered Sharepoint permission protocols, configured Microsoft Teams, and assisted in managing Active Directory. Moreover, I created comprehensive workbooks, schedules, and templates, which standardized the optimal project workflow for estimating and operations.
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
            {interests.map((interest, i) => (
              <InterestBlock
                key={i}
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
