import React from 'react';
import ProjectBlock from './component-blocks/ProjectBlock';
// import asdfImg from "../img/asdf.gif";

export default function CarouselCSharp() {
  return (
    <>
      <div className='flex border rounded-box items-center w-full bt-1 p-4 mb-8'>
        <span class="text-3xl">{'<'}</span>
        <div className="carousel carousel-center space-x-4 bg-transparent w-full overflow-x-auto">
          <ProjectBlock
            img={''}
            title={''}
            date={'Jun 2022'}
            desc={``}
            repo={''}
            deploy={''}
          />
        </div>
        <span class="text-3xl">{'>'}</span>
      </div>
    </>
  );
}
