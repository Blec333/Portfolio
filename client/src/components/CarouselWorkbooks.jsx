import React from 'react';
import Project from './Project';
import pricingManagementImg from "../img/pricing-management.gif";
import managementWorkbookImg from "../img/management-workbook.gif";
import commonEngCalcsImg from "../img/common-engineering-calcs.gif";
import budgetTemplateImg from "../img/budget-template.gif";
import quotesoftImg from "../img/quotesoft-pipe-template.jpg";

export default function CarouselWorkbook() {
  return (
    <>
      <div className="carousel carousel-center p-4 space-x-4 bg-transparent rounded-box">
        <Project
          img={pricingManagementImg}
          title={'Pricing Management Workbook'}
          date={'2021'}
          desc={'Organize all of your vendor quotes with metric analysis and auto-generated cover pages.'}
        />
        <Project
          img={managementWorkbookImg}
          title={'Management Workbook'}
          date={'2021'}
          desc={'Keep track of HR and financials for company, division, departments and sub-departments.'}
        />
        <Project
          img={commonEngCalcsImg}
          title={'Common Engineering Calcs'}
          date={'2021'}
          desc={'Easily calculate the most common formulas for any project.'}
        />
        <Project
          img={budgetTemplateImg}
          title={'Budget Template'}
          date={'2021'}
          desc={'Organize your budget for any project to understand buyout margin and produce an accurate SOV.'}
        />
        <Project
          img={quotesoftImg}
          title={'Quotesoft Custom Template'}
          date={'2021'}
          desc={'This template has a custom sheet which consolidates and organizes the raw data based on dynamic breakout assignments'}
        />
      </div>
    </>
  );
}
