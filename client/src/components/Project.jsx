import React from 'react';

function Project({img, title, date, desc, repo, deploy}) {
  return (
    <>
    <div className="carousel-item">
      <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
        <img className="h-56 lg:h-60 w-full object-cover" src={img} alt="" />
        <div className="p-3">
          <h3 className="font-semibold text-xl leading-6 text-primary-content underline text-center">{title}</h3>
          <br />
          <p className="text-center text-sm text-primary-content">{date}</p>
          <p className="text-primary-content h-[6rem]">{desc}</p>
          <a href={repo} rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline btn-outline">Repo</button></a>
          <a href={deploy} rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
        </div>
      </div>
    </div>
    </>
  );

}

export default Project;
