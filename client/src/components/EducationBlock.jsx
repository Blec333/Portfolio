import React from 'react';

function EducationBlock({ focus, school, dates, location, program }) {

  return (
    <>
      <div className="carousel-item">
        <div className="bg-neutral rounded-lg border shadow-md w-80 overflow-hidden rounded-box">
          {focus ? (<p className="text-center text-sm text-primary-content h-[3rem]">{focus}</p>) : ("")}
          {school ? (<p className="text-primary-content h-[3rem]">{school}</p>) : ("")}
          {dates ? (<p className="text-primary-content h-[3rem]">{dates}</p>) : ("")}
          {location ? (<p className="text-primary-content h-[3rem]">{location}</p>) : ("")}
          {program ? (<p className="text-primary-content h-[3rem]">{program}</p>) : ("")}
        </div>
      </div>
    </>
  );
}

export default EducationBlock;
