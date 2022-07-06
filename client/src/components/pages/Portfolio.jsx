import React from 'react';
import CarouselAutodesk from '../CarouselAutodesk';
import CarouselMERNStack from '../CarouselMERNStack';
import CarouselWorkbooks from '../CarouselWorkbooks';
import CarouselOther from '../CarouselOther';

export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col items-center max-w-5xl">
        <h1 className="text-center text-3xl text-neutral-content fontsize-bold">MERN Stack</h1>
        <CarouselMERNStack />
        <h1 className="text-center text-3xl text-neutral-content fontsize-bold">Autodesk</h1>
        <CarouselAutodesk />
        <h1 className="text-center text-3xl text-neutral-content fontsize-bold">Workbooks</h1>
        <CarouselWorkbooks />
        <h1 className="text-center text-3xl text-neutral-content fontsize-bold">Other</h1>
        <CarouselOther />
      </div>
    </>
  );
}