import React from 'react';
import profilePic from "../../img/Profile-Picture.png";
import resumeDownload from "../../img/LeClair-Resume.docx";

export default function Resume() {
  return (
    <>
      <div className="bg-transparent justify-center text-center">
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
          <br />
          <h1 className="text-3xl text-bold underline text-primary-content text-center">Technical Skills</h1>
          <br />
          <div className="text-primary-content text-center">Dynamo, C#, HTML, CSS, JavaScript, Python, Lisp, VBA (.COD,
            Excel), AutoCAD, Revit, Fabrication CADmep, CAMduct, Design Line, APL, Glue, Navis, Bluebeam, 360: Field,
            Docs, Collab, Procore, Box, Trimble, Lidar, Matterport, Microsoft Office (Word, Excel, PowerPoint,
            Outlook)</div>
          <br />
          <br />
          <h1 className="text-3xl text-bold underline text-primary-content text-center">Core Competencies</h1>
          <br />
          <div className="text-primary-content text-center">Project Management | Project Planning | BIM Management |
            Strategic Planning | Project Execution | Cost & Quality Control | Mechanical Drafting & Detailing |
            Schedule Management | Change Management | Shop Fabrication | Engineering Design | Project Lifecycle |
            Inventory Controls | Profit and Loss Management | Resource Maintenance | Program Planning | Vendor
            Management | Staff Coordination | Executive Leadership | Interpersonal Skills | Excellent Communication
            Skills</div>
        </div>

        <br />
        <div className="flex overflow-x-auto bg-transparent text-center justify-center">
          <table className="table-auto text-primary-content text-center">
            <thead>
              <th className="text-3xl text-bold underline text-primary-content text-center p-4">Projects</th>
            </thead>
            <tbody>
              <td className="text-left p-4">
                <thead>
                  <th className="text-center">Name</th>
                  <th className="text-center">Category</th>
                  <th className="text-center">Type</th>
                  <th className="text-center">Industry</th>
                  <th className="text-center">Size</th>
                  <th className="text-center">Oversight</th>
                </thead>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Ballpark Village</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Condominiums</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Highrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lane Field South</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Hotel</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Highrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Casa De Las Campanas</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Skilled Nursing Facility</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">OSHPD</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Legacy International Center</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Office & Biolab</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Highrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lilly Labs</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Office & Biolab</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Kaiser Riverside</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Hospital</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Highrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">OSHPD</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Scripps Cardiovasctrar Institute</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Hospital</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">OSHPD</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Sharp RB MOB</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Medical Office Building</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">SDCCD Mesa College Fine Arts</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lowrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">DSA</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Wilson Middle School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">DSA</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Central Elemntary School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lowrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">DSA</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Seal Teams 1 & 3 P892 & P964</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">ATFP High Security Training Facility</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lowrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">NAVFAC</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">P921, P988, P949 & P950</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">ATFP High Security Training Facility</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lowrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">NAVFAC</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Cray Ct.</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Office & Biolab</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Oberlin Dr.</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Office & Biolab</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Single Story</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Boardwalk HCP</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Office</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Highrise Campus - 3 buildings</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Central Elementary</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lowrise Campus - 8 buildings</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">DSA</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Torrey Pines HS Innovation</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">DSA</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Sharp Innovation Education Center</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">DSA</td>
                </tr>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
