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
      "Update_Existing_Dampers",
      "38Rod_Switch Damper to 38Rod",
      "AP_Anchor Plate",
      "Bought_Out_Off",
      "C1_to_1 Flg Out",
      "CC_Connection Cycling",
      "CF_Connection Fix",
      "DC_Damper Cycling",
      "DEdit_Dimension Edit",
      "DSF_Dimside Off",
      "DSO_Dimside On",
      "FCT_Fix Cut Type",
      "FRSC_Fix Round Straight Connectors",
      "FSD90_Rotate Motor",
      "HS_Hanger Stretch to Section",
      "IC_Insulation Cycling",
      "IG_Insulation Gauge",
      "IR_Insulation Repair",
      "ISC_Item Specification Cycle",
      "ISR_Item Specification Repair",
      "itemupdate",
      "KS7L_Switch Damper to KS7L",
      "OEdit_Option Edit",
      "Resource_DoubleWall_Inside",
      "RN_Renumber",
      "SD_SizeDown",
      "SU_SizeUp",
      "TD_Toggle Dimside",
      "TG_Toggle Grille",
      "TNF_Toggle No Fly Zone"
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
              title={`Fab COD #${i + 1} of ${VBCods.length}`}
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


