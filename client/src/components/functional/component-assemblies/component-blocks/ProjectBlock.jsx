import React from 'react';

function ProjectBlock({ img, title, date, desc, repo, deploy, download }) {


  return (
    <>
      <div className="carousel-item w-[18rem] h-[30rem]">
        <div className="flex flex-col bg-neutral rounded-lg border border-red-50 shadow-md overflow-hidden rounded-box w-full h-full">
          <div className='w-full h-[12rem]'>
            {img ? (<img className="w-full h-[12rem] object-fit" src={img} alt="" />) : ("")}
          </div>
          <div className="flex flex-col w-full h-full p-3">
            <div className='w-full h-full'>
              {title ? (<h3 className="font-semibold text-xl leading-6 text-primary-content underline text-center pb-[1rem]">{title}</h3>) : ("")}
              {date ? (<p className="text-center text-sm text-primary-content">{date}</p>) : ("")}
              {desc ? (<p className="text-primary-content h-full">{desc}</p>) : ("")}
            </div>
            <div className='flex flex-wrap w-full h-auto'>
              {repo ? (<a href={repo} rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline btn-outline">Repo</button></a>) : ("")}
              {deploy ? (<a href={deploy} rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>) : ("")}
              {download ? (<a href={download} rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Download</button></a>) : ("")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectBlock;

