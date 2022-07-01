import React from 'react';
import Project from './Project';
import jateImg from "../img/jate.gif";
import adventureQuestImg from "../img/AdventureQuest.gif";
import weatherDashboardImg from "../img/Weather Dashboard.gif";
import schedulerImg from "../img/Work Day Scheduler.gif";

export default function CarouselFrontend() {
  return (
    <>
      <div className="carousel carousel-center p-4 space-x-4 bg-transparent rounded-box">
        <Project
          img={jateImg}
          title={'JATE'}
          date={'May 2022'}
          desc={'This is a text editor built as a PWA avaiable for offline access.'}
          repo={'https://github.com/Blec333/pwa-text-editor'}
          deploy={'https://blec-jate.herokuapp.com/'}
        />

        <Project
          img={adventureQuestImg}
          title={'Adventure Quest'}
          date={'Apr 2022'}
          desc={'Create an adventurer, choose your opponent wisely and watch the battle unfold'}
          repo={'https://github.com/Blec333/adventureQuest'}
          deploy={'https://adventurequest.herokuapp.com/'}
        />

        <Project
          img={weatherDashboardImg}
          title={'Weather Dashboard'}
          date={'Apr 2022'}
          desc={'Weather forecasts provided per city searched.'}
          repo={'https://github.com/Blec333/weather-dashboard'}
          deploy={'https://Blec333.github.io/weather-dashboard/'}
        />

        <Project
          img={schedulerImg}
          title={'Work Day Scheduler'}
          date={'Mar 2022'}
          desc={'Set priorities by each one hour block of your work day, memory remains persistant.'}
          repo={'https://github.com/Blec333/day-planner'}
          deploy={'https://Blec333.github.io/day-planner/'}
        />
      </div>
    </>
  );
}
