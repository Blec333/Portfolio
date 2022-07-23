import React, { useState, useEffect } from "react";
import ProjectBlock from './component-blocks/ProjectBlock';
import VBCodImg from "../../../img/acad-cod-script.png";

export default function CarouselVBCod() {



  const [VBCods, setVBCods] = useState([]);

  useEffect(() => {
    setVBCodArray();
  }, [])

  const setVBCodArray = () => {
    setVBCods([
      "Bought_Out_Off",
      "C1_to_1 Flg Out",
      "DSF_Dimside Off",
      "itemupdate",
      "SD_SizeDown",
      "SD_SizeUp",
      "Update_Existing_Dampers"
    ])
  }



  return (
    <>
      <div className='flex border rounded-box items-center w-full bt-1 p-4 mb-8'>
        <span class="text-3xl">{'<'}</span>
        <div className="carousel carousel-center space-x-4 bg-transparent w-full overflow-x-auto">
          {VBCods.map((cod, i) =>
            <ProjectBlock
              key={i + 1}
              img={VBCodImg}
              title={`Visual Basic COD #${i + 1} of ${VBCods.length}`}
              date={'2016'}
              desc={`Script Name: ${cod} -- use Execute Script command to access`}
              repo={`https://github.com/Blec333/autodesk-autocad/tree/main/VB.COD${cod}.cod`}
            />
          )}
        </div>
        <span class="text-3xl">{'>'}</span>
      </div>
    </>
  );
}


