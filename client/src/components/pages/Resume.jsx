import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import {
  QUERY_CORE_COMPETENCIES,
  QUERY_EDUCATIONS,
  QUERY_PROJECTS,
  QUERY_TECHNICAL_SKILLS,
  QUERY_EXPERIENCES
} from "../../utils/queries";

import HistoricalProjectBlock from '../functional/component-assemblies/component-blocks/HistoricalProjectBlock';
import EducationBlock from '../functional/component-assemblies/component-blocks/EducationBlock';
import ExperienceBlock from '../functional/component-assemblies/component-blocks/ExperienceBlock';

import spinner from '../../assets/spinner.gif';
import profilePic from "../../img/Profile-Picture.png";
import resumeDownload from "../../assets/LeClair-Resume.docx";



export default function Resume() {


  const [technicalSkills, setTechnicalSkills] = useState('');
  const [coreCompetencies, setCoreCompetencies] = useState('');
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [experiences, setExperiences] = useState([]);


  const technicalSkillsData = useQuery(QUERY_TECHNICAL_SKILLS);
  const coreCompetencyData = useQuery(QUERY_CORE_COMPETENCIES);
  const historicalProjectData = useQuery(QUERY_PROJECTS);
  const educationData = useQuery(QUERY_EDUCATIONS);
  const experienceData = useQuery(QUERY_EXPERIENCES);


  useEffect(() => {
    if (!technicalSkillsData.loading) {
      let technicalSkillsStr = "";
      for (let i = 0; i < technicalSkillsData.data.technicalSkills.length; i++) {
        if (i < technicalSkillsData.data.technicalSkills.length - 1) {
          technicalSkillsStr = technicalSkillsStr.concat(technicalSkillsData.data.technicalSkills[i].skill + ', ');
        } else {
          technicalSkillsStr = technicalSkillsStr.concat(technicalSkillsData.data.technicalSkills[i].skill);
        }
      }
      setTechnicalSkills(technicalSkillsStr);
    }
    if (!coreCompetencyData.loading) {
      let coreCompetencyStr = "";
      for (let i = 0; i < coreCompetencyData.data.coreCompetencies.length; i++) {
        if (i < coreCompetencyData.data.coreCompetencies.length - 1) {
          coreCompetencyStr = coreCompetencyStr.concat(coreCompetencyData.data.coreCompetencies[i].coreCompetency + ', ');
        } else {
          coreCompetencyStr = coreCompetencyStr.concat(coreCompetencyData.data.coreCompetencies[i].coreCompetency);
        }
      }
      setCoreCompetencies(coreCompetencyStr);
    }
    if (!historicalProjectData.loading) {
      setProjects(historicalProjectData.data.projects);
    }
    if (!educationData.loading) {
      setEducation(educationData.data.educations);
    }
    if (!experienceData.loading) {
      setExperiences(experienceData.data.experiences);
    }
  }, [technicalSkillsData, coreCompetencyData, historicalProjectData, educationData, experienceData]);


  if (technicalSkillsData.loading) {
    return <img src={spinner} alt="loading" />
  } else if (technicalSkillsData.error) {
    return <p>{`Error: ${technicalSkillsData.error.message}`}</p>
  }

  if (coreCompetencyData.loading) {
    return <img src={spinner} alt="loading" />
  } else if (coreCompetencyData.error) {
    return <p>{`Error: ${coreCompetencyData.error.message}`}</p>
  }

  if (historicalProjectData.loading) {
    return <img src={spinner} alt="loading" />
  } else if (historicalProjectData.error) {
    return <p>{`Error: ${historicalProjectData.error.message}`}</p>
  }

  if (educationData.loading) {
    return <img src={spinner} alt="loading" />
  } else if (educationData.error) {
    return <p>{`Error: ${educationData.error.message}`}</p>
  }

  if (experienceData.loading) {
    return <img src={spinner} alt="loading" />
  } else if (experienceData.error) {
    return <p>{`Error: ${experienceData.error.message}`}</p>
  }




  return (
    <>
      <div className="bg-transparent justify-center text-center w-full">
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
          <div className="card-actions justify-center">
            <a href={resumeDownload} download=""><button className="btn btn-secondary text-primary-content text-center">Download Resume</button></a>
          </div>
        </div>
        <div className="bg-transparent text-center">
          <h1 className="text-3xl text-bold underline text-primary-content text-center py-8">TECHNICAL SKILLS</h1>
          <div className="text-primary-content text-center">{technicalSkills}</div>
          <h1 className="text-3xl text-bold underline text-primary-content text-center py-8">CORE COMPETENCIES</h1>
          <div className="text-primary-content text-center">{coreCompetencies}</div>
        </div>
        <h2 className="text-3xl text-bold underline text-primary-content text-center py-8">EDUCATION</h2>
        <div className="carousel carousel-center py-8 space-x-4 bg-transparent rounded-box">
          {education.map((edu, i) => (
            <EducationBlock
              key={i}
              focus={edu.focus}
              school={edu.school}
              dates={edu.dates}
              location={edu.location}
              program={edu.program}
            />
          ))}
        </div>
        <h2 className="text-3xl text-bold underline text-neutral-content text-center py-8">EXPERIENCE</h2>
              {experiences.map((experience, i) => (
                <ExperienceBlock
                  key={i}
                  company={experience.company}
                  location={experience.location}
                  title={experience.title}
                  dateRange={experience.dateRange}
                  description1={experience.description1}
                  description2={experience.description2}
                  description3={experience.description3}
                  description4={experience.description4}
                  description5={experience.description5}
                  description6={experience.description6}
                  description7={experience.description7}
                  description8={experience.description8}
                  description9={experience.description9}
                  description10={experience.description10}
                  description11={experience.description11}
                  description12={experience.description12}
                  description13={experience.description13}
                  description14={experience.description14}
                  description15={experience.description15}
                />
              ))}
        <h2 className="text-3xl text-bold underline text-neutral-content text-center py-8">PROJECTS</h2>
        <div className="flex bg-transparent text-center justify-center">
          <table className="table-auto text-neutral-content text-center" style={{ fontSize: "1.55vw" }}>
            <thead>
              <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Category</th>
                <th className="text-center">Type</th>
                <th className="text-center">Industry</th>
                <th className="text-center">Size</th>
                <th className="text-center">Oversight</th>
                <th className="text-center">Client</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, i) => (
                <HistoricalProjectBlock
                  key={i}
                  projectName={project.projectName}
                  category={project.category}
                  type={project.type}
                  industry={project.industry}
                  scale={project.scale}
                  oversight={project.oversight}
                  client={project.client}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
