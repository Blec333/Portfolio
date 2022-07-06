import React from 'react';
import ProjectBlock from './ProjectBlock';
import autocadImg from "../img/autocad.jpg";
import revitImg from "../img/revit.jpg";

export default function CarouselAutodesk() {
  return (
    <>
      <div className="carousel carousel-center p-4 space-x-4 bg-transparent rounded-box">
        <ProjectBlock
          img={autocadImg}
          title={'AutoCAD'}
          date={'2017'}
          desc={'Lisp, VB.COD & C# which add custom commands to your AutoCAD workflow'}
          repo={'https://github.com/Blec333/autodesk-autocad'}
        />
        <ProjectBlock
          img={revitImg}
          title={'Revit'}
          date={'2019'}
          desc={'Dynamo scripts to assist your Revit workflow'}
          repo={'https://github.com/Blec333/autodesk-revit'}
        />
      </div>
    </>
  );
}
