import React from 'react';
import ProjectBlock from './ProjectBlock';
// import asdfImg from "../img/asdf.gif";

export default function CarouselOther() {
  return (
    <>
      <div className="carousel carousel-center border bt-1 p-4 mb-8 space-x-4 bg-transparent rounded-box w-screen overflow-x-auto">
        <ProjectBlock
          img={''}
          title={''}
          date={'Jun 2022'}
          desc={``}
          repo={''}
          deploy={''}
        />
      </div>
    </>
  );
}
