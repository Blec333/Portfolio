import React from 'react';







function ExperienceBlock({
  company,
  title,
  dateRange,
  location,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  description8,
  description9,
  description10,
  description11,
  description12,
  description13,
  description14,
  description15
}) {



  return (
    <>
      <div className="grid grid-cols-2 text-center text-neutral-content">
        <div className="text-left pt-4">{company ? (company) : ("")}</div>
        <div className="text-right pt-4">{location ? (location) : ("")}</div>
        <div className="text-left pb-4">{title ? (title) : ("")}</div>
        <div className="text-right pb-4">{dateRange ? (dateRange) : ("")}</div>
        {description1 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description1}</li>) : ("")}
        {description2 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description2}</li>) : ("")}
        {description3 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description3}</li>) : ("")}
        {description4 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description4}</li>) : ("")}
        {description5 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description5}</li>) : ("")}
        {description6 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description6}</li>) : ("")}
        {description7 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description7}</li>) : ("")}
        {description8 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description8}</li>) : ("")}
        {description9 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description9}</li>) : ("")}
        {description10 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description10}</li>) : ("")}
        {description11 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description11}</li>) : ("")}
        {description12 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description12}</li>) : ("")}
        {description13 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description13}</li>) : ("")}
        {description14 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description14}</li>) : ("")}
        {description15 ? (<li className="text-left text-sm text-neutral-content col-span-2 px-3">{description15}</li>) : ("")}
      </div>
    </>
  );
}

export default ExperienceBlock;
