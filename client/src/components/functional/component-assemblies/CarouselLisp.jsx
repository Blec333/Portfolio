
import React, { useState, useEffect } from "react";
import ProjectBlock from './component-blocks/ProjectBlock';
import autocadImg from "../../../img/autocad.jpg";
import autoLispImg from "../../../img/autolisp.jpg";

export default function CarouselAutodesk() {


  const [customCommands, setCustomCommands] = useState([]);

  useEffect(() => {
    setCCarray();
  }, [])

  const setCCarray = () => {
    setCustomCommands([
      "Loop_SSET_Entities",
      "LCC_Help",
      "Open_Alias_File",
      "BlockPropertiesTable",
      "Auto_Text",
      "3D",
      "Entlast",
      "SSET",
      "Auto_Hatch_FSD",
      "Rotate_Around_Center",
      "Layer_Make_Current",
      "Layer_Off",
      "Layer_On",
      "Layer_Unlock",
      "Layer_Match",
      "Layer_Isolate",
      "Get_Entity_List",
      "Select_Entity",
      "Attacher_On",
      "Attacher_Off",
      "Toggle_Z_Snaplock ",
      "Execute_Script",
      "Rotate_3D",
      "Copy_Rotate",
      "Select_Similar_SourceFileName",
      "Select_Similar_SourceFileName&Description",
      "Select_Similar_ServiceType",
      "Select_Similar_Activity#",
      "HangerCommand",
      "Move_Rotate_Repeat",
      "Move_Rotate",
      "Move_Along_Z",
      "Connection_Cycle",
      "Insulation_Reset",
      "Connection_Fix",
      "Damper_Cycle",
      "Hanger_Stretch_to_Section",
      "Insulation_Specification_Cycle",
      "Insulation_Cycle",
      "Insulation_Gauge_Cycle",
      "Make_Text_Layer_Current",
      "FLEX_FILL",
      "Size_&_Elevation_Cycle",
      "Text_Toggle_Number",
      "Text_Toggle_Size",
      "Text_Toggle_Elevation",
      "Text_Toggle_Alias",
      "Text_Toggle_Offset",
      "Text_Toggle_Length",
      "Text_Numbers_On",
      "Text_Numbers_Off",
      "Text_Size_On",
      "Text_Size_Off",
      "Text_Elevation_On",
      "Text_Elevation_Off",
      "Text_Alias_On",
      "Text_Alias_Off",
      "Text_Offset_On",
      "Text_Offset_Off",
      "Text_Length_On",
      "Text_Length_Off",
      "Text_All_On",
      "Text_All_Off",
      "DeBug_Script",
      "Size_Down_Item",
      "Size_Up_Item",
      "Update_Existing_Dampers",
      "Switch_KS7L_to_38Rod_Damper",
      "Switch_38Rod_to_KS7L_Damper",
      "Text_Move",
      "Rotate_Text",
      "Select_Previous",
      "Select_Last_Added",
      "Move_Previous",
      "Text_Cloud",
      "Move_X_Axis",
      "Move_Y_Axis",
      "Move_Z_Axis",
      "Copy_X_Axis",
      "Copy_Y_Axis",
      "Copy_Z_Axis",
      "Split_View_Into_2",
      "Front_View",
      "Right_View",
      "Top_View",
      "Delete_All_Xclips",
      "Import_Xref_on_Custom_Layer",
      "Selection_Fix",
      "Multi_Dimension_Edit",
      "Multi_Option_Edit",
      "Fix_Cut_Type",
      "Fix_Round_Straight_Connectors",
      "FIX_LENGTHS",
      "Fix_Download",
      "Flip",
      "Rotate_FSD_Motor",
      "Rotate_Around_Attacher",
      "Toggle_Grille",
      "Add_Grille",
      "Paste_To_Original_Coordinates",
      "Improved_Section_View",
      "Last_View",
      "Last_View_WCS",
      "World_View",
      "Fix_Variables",
      "Toggle_Dimside",
      "Toggle_Clearance_Zone",
      "Dimside_Off",
      "Dimside_On",
      "MultiText_Box",
      "Dimension_at_Elevation",
      "Create_DoubleWall_Patterns",
      "Select_DoubleWall_Patterns",
      "S0",
      "S1",
      "S2",
      "S3",
      "S4",
      "S5",
      "S6",
      "S7",
      "S8",
      "S9",
      "Rotate_Reference",
      "Item_Specification_Repair",
      "Insert_ACAD_Layout_Points",
      "Item_Information_Dump",
      "Layout_Prep",
      "Improved_ReNumber",
      "Improved_Point_Export",
      "Create_2D",
      "List_All_Functions",
      "pickem",
      "Search_Specification",
      "Get_Keyboard_ASCII_Character",
      "Mark_Support_Point_Locations",
      "Label_Layout_Points",
      "XRF",
      "XRLL",
      "XRUL",
      "XRU",
      "XRR",
      "ZO",
      "UPDATE_JOB_INFO",
      "Store_Sections",
      "Update_Drawing",
      "Adjust_Dampers",
      "Item_Update",
      "Multi_Variable_Edit",
      "C1",
      "C2",
      "Blockout_Dimensions",
      "Fix_Elbows",
      "Automation1_Cdata",
      "Automation2_Cdata",
      "Tag_ID_Cdata",
      "ItemCID_Cdata",
      "Activity_#_Cdata",
      "Manufacturer_Cdata",
      "Model_Cdata",
      "Size_Tonnage_Cdata",
      "Tonnage_Cdata",
      "Set_Layer_Filters",
      "Fix_Colors",
      "Add_Tags",
      "ID#2_Cdata",
      "CFM_Cdata",
      "CFM_ID#2_Cdata",
      "Weight_Cdata",
      "Size_Cdata",
      "ALL_ATT2TEXT",
      "Blockout_Text",
      "Get_SSET",
      "Get_SSET_i"
    ])
  }



  return (
    <>
      <div className="carousel carousel-center border bt-1 p-4 mb-8 space-x-4 bg-transparent rounded-box w-screen overflow-x-auto">
        <ProjectBlock
          img={autocadImg}
          title={'AutoCAD'}
          date={'2017'}
          desc={'Lisp, VB.COD & C# which add custom commands to your AutoCAD workflow'}
          repo={'https://github.com/Blec333/autodesk-autocad'}
        />
        {customCommands.map((command, i) =>
            <ProjectBlock
              key={i + 1}
              img={autoLispImg}
              title={`CADmep Custom Command #${i + 1}`}
              date={'2018'}
              desc={`Command Name: ${command} -- reminder: may require utility functions (link above)`}
              repo={`https://github.com/Blec333/autodesk-autocad/blob/main/Lisp/customCommands/cc-${i + 1}-${command}.lsp`}
            />
        )}
      </div>
    </>
  );
}
