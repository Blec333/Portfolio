import React from 'react';
import Project from './Project';
import kevinSharkImg from "../img/kevin-shark.gif";

export default function CarouselOther() {
  return (
    <>
      <div className="carousel carousel-center p-4 space-x-4 bg-transparent rounded-box">
        <Project
          img={kevinSharkImg}
          title={'Kevin Shark Attack'}
          date={'2022'}
          desc={`Kevin shark is hungry! Use the arrow keys to move. Eat the fish when they slow down on a turn, but watch out for the Orca! (appears after 10 bites). 50 fish fill your belly and wins the game!`}
          repo={'https://scratch.mit.edu/projects/693648960/editor/'}
          deploy={'https://scratch.mit.edu/projects/693648960/fullscreen/'}
        />
      </div>
    </>
  );
}
