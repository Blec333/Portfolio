import React, { useState, useEffect } from "react";
import ProjectBlock from './component-blocks/ProjectBlock';
import dynamoImg from "../../../img/dynamo.jpg";
import revitImg from "../../../img/revit.jpg";

export default function CarouselAutodesk() {



  const [dynamoScripts, setDynamoScripts] = useState([]);

  useEffect(() => {
    setDynamoArray();
  }, [])

  const setDynamoArray = () => {
    setDynamoScripts([
      "Elements_sorting_algorithm",
      "Expose Fabrication Properties",
      "Extract Pipe Segments",
      "Fabrication MEP Colors",
      "Fabrication MEP Pipe Colors by Active View",
      "Rename-Revit-Sheet-Number",
      "UserSelect_AutoNumber_AssemblyNumber",
      "UserSelect_AutoNumber_Mark & Part Level",
      "UserSelect_AutoNumber_Mark",
      "UserSelect_AutoNumber_Part Level-Color_Part Main-Number",
      "UserSelect_AutoNumber_ServiceAbbreviation"
    ])
  }



  return (
    <>
      <div className='flex border rounded-box items-center w-full bt-1 p-4 mb-8'>
        <span class="text-3xl">{'<'}</span>
        <div className="carousel carousel-center space-x-4 bg-transparent w-full overflow-x-auto">
          <ProjectBlock
            img={revitImg}
            title={'Revit'}
            date={'2019'}
            desc={'Dynamo scripts to assist your Revit workflow'}
            repo={'https://github.com/Blec333/autodesk-revit'}
          />
          {dynamoScripts.map((script, i) =>
            <ProjectBlock
              key={i + 1}
              img={dynamoImg}
              title={`CADmep Custom Command #${i + 1}`}
              date={'2018'}
              desc={`Command Name: ${script} -- reminder: may require utility functions (link above)`}
              repo={`https://github.com/Blec333/autodesk-revit/tree/main/dynamo/${script}.dyn`}
            />
          )}
        </div>
        <span class="text-3xl">{'>'}</span>
      </div>
    </>
  );
}


