import React from 'react';
import Project from './Project';
import adventureQuestImg from "../img/AdventureQuest.gif";
import pokerTableImg from "../img/poker-table.gif";
import socialMediaApiImg from "../img/social-media-api.gif";
import travelCenterImg from "../img/search-demo.gif";
import jateImg from "../img/jate.gif";
import weatherDashboardImg from "../img/Weather Dashboard.gif";
import schedulerImg from "../img/Work Day Scheduler.gif";

export default function CarouselMERNStack() {
  return (
    <>
    <div className="carousel carousel-center p-4 space-x-4 bg-transparent rounded-box">
      <Project
        img={adventureQuestImg}
        title={'Adventure Quest'}
        date={'Apr 2022'}
        desc={'Collab: Create an adventurer, choose your opponent wisely and watch the battle unfold'}
        repo={'https://github.com/Blec333/adventureQuest'}
        deploy={'https://adventurequest.herokuapp.com/'}
      />
        <Project
          img={pokerTableImg}
          title={'Casino'}
          date={'Jun 2022'}
          desc={'Collab: Enter the casino, take a seat at the poker table and enjoy the game'}
          repo={'https://github.com/Blec333/cant-read-my-poker-face'}
          deploy={'https://ancient-bayou-45800.herokuapp.com/'}
        />
        <Project
          img={socialMediaApiImg}
          title={'Social Media API'}
          date={'May 2022'}
          desc={'This social media api is setup using Mongo DB wrapped by Mongoose.'}
          repo={'https://github.com/Blec333/social-media-api'}
          deploy={'https://blec-social-media-api.herokuapp.com/api/users/'}
        />
        <Project
          img={travelCenterImg}
          title={'The Travel Center'}
          date={'Apr 2022'}
          desc={'Server API fetch project providing various geolocation based information in real time.'}
          repo={'https://github.com/Blec333/the-travel-center'}
          deploy={'https://Blec333.github.io/the-travel-center/'}
        />
        <Project
          img={jateImg}
          title={'JATE'}
          date={'May 2022'}
          desc={'This is a text editor built as a PWA avaiable for offline access.'}
          repo={'https://github.com/Blec333/pwa-text-editor'}
          deploy={'https://blec-jate.herokuapp.com/'}
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
