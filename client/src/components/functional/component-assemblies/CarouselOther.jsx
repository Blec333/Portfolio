import React from 'react';
import ProjectBlock from './component-blocks/ProjectBlock';
import kevinSharkImg from "../../../img/kevin-shark.gif";

export default function CarouselOther() {
  return (
    <>
      <div className='flex border rounded-box items-center w-full bt-1 p-4 mb-8'>
        <span class="text-3xl">{'<'}</span>
        <div className="carousel carousel-center space-x-4 bg-transparent w-full overflow-x-auto">
          <ProjectBlock
            img={kevinSharkImg}
            title={'Kevin Shark Attack'}
            date={'2022'}
            desc={`Arrow keys move. Eat the fish when they change direction, but watch out for the Orca! (after 10 bites). 50 fish wins the game!`}
            repo={'https://scratch.mit.edu/projects/693648960/editor/'}
            deploy={'https://scratch.mit.edu/projects/693648960/fullscreen/'}
          />
        </div>
        <span class="text-3xl">{'>'}</span>
      </div>
    </>
  );
}
