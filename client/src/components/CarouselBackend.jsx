import React from 'react';
import Project from './Project';
import socialMediaApiImg from "../img/social-media-api.gif";
import travelCenterImg from "../img/search-demo.gif";

export default function CarouselBackend() {
  return (
    <>
      <div className="carousel carousel-center p-4 space-x-4 bg-transparent rounded-box">
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
      </div>
    </>
  );
}
