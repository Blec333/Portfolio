import React from 'react';

function ProjectBlock({ img, title, date, desc, repo, deploy, download}) {


  return (
    <>
    <div className="carousel-item">
      <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
      {img ? (<img className="h-56 lg:h-60 w-full object-cover" src={img} alt="" />) : ("") }
        <div className="p-3">
        {title ? (<h3 className="font-semibold text-xl leading-6 text-primary-content underline text-center">{title}</h3>) : ("") }
          <br />
          {date ? (<p className="text-center text-sm text-primary-content">{date}</p>) : ("") }
          {desc ? (<p className="text-primary-content h-[6rem]">{desc}</p>) : ("") }
          {repo ? (<a href={repo} rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline btn-outline">Repo</button></a>) : ("") }
          {deploy ? (<a href={deploy} rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>) : ("") }
          {download ? (<a href={download} rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Download</button></a>) : ("") }
        </div>
      </div>
    </div>
    </>
  );
}

export default ProjectBlock;
