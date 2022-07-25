import React from 'react';
import ProjectBlock from './component-blocks/ProjectBlock';
import tournamentImg from "../../../img/tournament.jpg";
import adskCSImg from "../../../img/adskCS.jpg";
import numGuesserImg from "../../../img/numGuesser.jpg";
import diceImg from "../../../img/dice.jpg";

export default function CarouselCSharp() {
  return (
    <>
      <div className='flex border rounded-box items-center w-full bt-1 p-4 mb-8'>
        <span class="text-3xl">{'<'}</span>
        <div className="carousel carousel-center space-x-4 bg-transparent w-full overflow-x-auto">
          <ProjectBlock
            img={tournamentImg}
            title={'Tournament'}
            date={'Jul 2022'}
            desc={`WIP: Manage your own tournaments`}
            repo={'https://github.com/Blec333/csharp/tree/main/TournamentTracker'}
          />
          <ProjectBlock
            img={adskCSImg}
            title={'AutodeskC#Example'}
            date={'2019'}
            desc={`An example of accessing the autodesk libraries for use in C#`}
            repo={'https://github.com/Blec333/autodesk-autocad/blob/main/C%23/C%23.NET.cs'}
          />
          <ProjectBlock
            img={numGuesserImg}
            title={'Number Guesser'}
            date={'Jun 2022'}
            desc={`Number guessing console game.`}
            repo={'https://github.com/Blec333/csharp/tree/main/random-number-game'}
            download={'https://github.com/Blec333/csharp/raw/main/random-number-game/random-number-game/bin/Debug/net6.0/random-number-game.exe'}
          />
          <ProjectBlock
            img={diceImg}
            title={'Dice Roll'}
            date={'Jun 2022'}
            desc={`Roll your dice against the computer to see who wins!`}
            repo={'https://github.com/Blec333/csharp/tree/main/dice'}
            download={'https://github.com/Blec333/csharp/raw/main/dice/Dice/bin/Debug/net6.0/Dice.exe'}
          />
        </div>
        <span class="text-3xl">{'>'}</span>
      </div>
    </>
  );
}
