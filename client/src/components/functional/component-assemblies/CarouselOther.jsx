import React from 'react';
import ProjectBlock from './component-blocks/ProjectBlock';
import kevinSharkImg from "../../../img/kevin-shark.gif";

export default function CarouselOther() {
  return (
    <>
      <div className="carousel carousel-center border bt-1 p-4 mb-8 space-x-4 bg-transparent rounded-box w-screen overflow-x-auto">
        <ProjectBlock
          img={kevinSharkImg}
          title={'Kevin Shark Attack'}
          date={'2022'}
          desc={`Arrow keys move. Eat the fish when they change direction, but watch out for the Orca! (after 10 bites). 50 fish wins the game!`}
          repo={'https://scratch.mit.edu/projects/693648960/editor/'}
          deploy={'https://scratch.mit.edu/projects/693648960/fullscreen/'}
        />
      </div>
    </>
  );
}
