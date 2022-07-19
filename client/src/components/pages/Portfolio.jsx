import React from 'react';
import CarouselDynamo from '../functional/component-assemblies/CarouselDynamo';
import CarouselMERNStack from '../functional/component-assemblies/CarouselMERNStack';
import CarouselWorkbooks from '../functional/component-assemblies/CarouselWorkbooks';
import CarouselOther from '../functional/component-assemblies/CarouselOther';
import CarouselLisp from '../functional/component-assemblies/CarouselLisp';
import CarouselCSharp from '../functional/component-assemblies/CarouselCSharp';

export default function Portfolio() {






  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-y-auto m-3">

        <h1 className="text-center text-3xl text-neutral-content fontsize-bold mt-4">MERN Stack</h1>
        <CarouselMERNStack />

        <h1 className="text-center text-3xl text-neutral-content fontsize-bold mt-4">C# ASP.NET</h1>
        <CarouselCSharp />

        <div className='flex gap-4 items-center mt-4'>
        <h1 className="text-center text-3xl text-neutral-content fontsize-bold">LISP</h1>
            <a href={"https://github.com/Blec333/autodesk-autocad/tree/main/Lisp/utils/utilityFunctions.lsp"} rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Utils</button></a>
        </div>
        <CarouselLisp />

        <h1 className="text-center text-3xl text-neutral-content fontsize-bold mt-4">DYNAMO</h1>
        <CarouselDynamo />

        <h1 className="text-center text-3xl text-neutral-content fontsize-bold mt-4">WORKBOOKS</h1>
        <CarouselWorkbooks />

        <h1 className="text-center text-3xl text-neutral-content fontsize-bold mt-4">Other</h1>
        <CarouselOther />

      </div>
    </>
  );
}