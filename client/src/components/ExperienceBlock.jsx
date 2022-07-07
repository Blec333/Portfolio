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

        {description1 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description1}</p>) : ("")}
        {description2 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description2}</p>) : ("")}
        {description3 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description3}</p>) : ("")}
        {description4 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description4}</p>) : ("")}
        {description5 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description5}</p>) : ("")}
        {description6 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description6}</p>) : ("")}
        {description7 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description7}</p>) : ("")}
        {description8 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description8}</p>) : ("")}
        {description9 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description9}</p>) : ("")}
        {description10 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description10}</p>) : ("")}
        {description11 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description11}</p>) : ("")}
        {description12 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description12}</p>) : ("")}
        {description13 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description13}</p>) : ("")}
        {description14 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description14}</p>) : ("")}
        {description15 ? (<p className="text-left text-sm text-neutral-content col-span-2 px-3">{description15}</p>) : ("")}
      </div>
    </>
  );
}

export default ExperienceBlock;
