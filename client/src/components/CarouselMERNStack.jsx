import React from 'react';
import ProjectBlock from './ProjectBlock';
import portfolioImg from "../img/portfolio.jpg";
import adventureQuestImg from "../img/AdventureQuest.gif";
import pokerTableImg from "../img/poker-table.gif";
import socialMediaApiImg from "../img/social-media-api.gif";
import travelCenterImg from "../img/search-demo.gif";
import jateImg from "../img/jate.gif";
import weatherDashboardImg from "../img/Weather Dashboard.gif";
import schedulerImg from "../img/Work Day Scheduler.gif";
import cssImg from "../img/CSS.gif";
import pwGeneratorImg from "../img/pwGenerator.gif";
import generateMDImg from "../img/generateMD.gif";
import rpsImg from "../img/rps.jpg";

export default function CarouselMERNStack() {
  return (
    <>
      <div className="carousel carousel-center border bt-1 p-4 mb-8 space-x-4 bg-transparent rounded-box w-screen overflow-x-auto">
        <ProjectBlock
          img={portfolioImg}
          title={'Portfolio'}
          date={'Jul 2022'}
          desc={'This is a fullstack application, peruse at your leisure.'}
          repo={'https://github.com/Blec333/portfolio'}
          deploy={'https://brennan-leclair.herokuapp.com/'}
        />
        <ProjectBlock
          img={adventureQuestImg}
          title={'Adventure Quest'}
          date={'Apr 2022'}
          desc={'Collab: Create an adventurer, choose your opponent wisely and watch the battle unfold'}
          repo={'https://github.com/Blec333/adventureQuest'}
          deploy={'https://adventurequest.herokuapp.com/'}
        />
        <ProjectBlock
          img={pokerTableImg}
          title={'Casino'}
          date={'Jun 2022'}
          desc={'Collab: Enter the casino, take a seat at the poker table and enjoy the game'}
          repo={'https://github.com/Blec333/cant-read-my-poker-face'}
          deploy={'https://blec-casino.herokuapp.com/'}
        />
        <ProjectBlock
          img={socialMediaApiImg}
          title={'Social Media API'}
          date={'May 2022'}
          desc={'This social media api is setup using Mongo DB wrapped by Mongoose.'}
          repo={'https://github.com/Blec333/social-media-api'}
          deploy={'https://blec-social-media-api.herokuapp.com/api/users/'}
        />
        <ProjectBlock
          img={jateImg}
          title={'JATE'}
          date={'May 2022'}
          desc={'This is a text editor built as a PWA avaiable for offline access.'}
          repo={'https://github.com/Blec333/pwa-text-editor'}
          deploy={'https://blec-jate.herokuapp.com/'}
        />
        <ProjectBlock
          img={travelCenterImg}
          title={'The Travel Center'}
          date={'Apr 2022'}
          desc={'Server API fetch project providing various geolocation based information in real time.'}
          repo={'https://github.com/Blec333/the-travel-center'}
          deploy={'https://Blec333.github.io/the-travel-center/'}
        />
        <ProjectBlock
          img={weatherDashboardImg}
          title={'Weather Dashboard'}
          date={'Apr 2022'}
          desc={'Weather forecasts provided per city searched.'}
          repo={'https://github.com/Blec333/weather-dashboard'}
          deploy={'https://Blec333.github.io/weather-dashboard/'}
        />
        <ProjectBlock
          img={schedulerImg}
          title={'Work Day Scheduler'}
          date={'Mar 2022'}
          desc={'Set priorities by each one hour block of your work day, memory remains persistant.'}
          repo={'https://github.com/Blec333/day-planner'}
          deploy={'https://Blec333.github.io/day-planner/'}
        />
        <ProjectBlock
          img={cssImg}
          title={'CSS Snippets'}
          date={'Mar 2022'}
          desc={'Shows a few CSS examples (I do love that visual.'}
          repo={'https://github.com/Blec333/css-snippets'}
        />
        <ProjectBlock
          img={pwGeneratorImg}
          title={'Password Generator'}
          date={'Mar 2022'}
          desc={'Generates a random password based on user response to prescribed criteria.'}
          repo={'https://github.com/Blec333/password-generator'}
        />
        <ProjectBlock
          img={generateMDImg}
          title={'Generate Markdown'}
          date={'Mar 2022'}
          desc={'Command line app that produces a markdown file based on user input.'}
          repo={'https://github.com/Blec333/generate-markdown'}
        />
        <ProjectBlock
          img={rpsImg}
          title={'Rock, Paper, Scissors'}
          date={'Mar 2022'}
          desc={'Simple window alert game with R/P/S logic.'}
          repo={'https://github.com/Blec333/rock-paper-scissors'}
        />
      </div>
    </>
  );
}
