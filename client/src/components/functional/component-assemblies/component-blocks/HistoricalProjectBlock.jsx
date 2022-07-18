import React from 'react';

function HistoricalProjectBlock({ projectName, category, type, industry, scale, oversight, client }) {
  return (
    <tr className='hover:bg-base-300'>
      <td className="text-left p-4 border-collapse border border-slate-400">{projectName ? (projectName) : ("")}</td>
      <td className="text-left p-4 border-collapse border border-slate-400">{category ? (category) : ("")}</td>
      <td className="text-left p-4 border-collapse border border-slate-400">{type ? (type) : ("")}</td>
      <td className="text-left p-4 border-collapse border border-slate-400">{industry ? (industry) : ("")}</td>
      <td className="text-left p-4 border-collapse border border-slate-400">{scale ? (scale) : ("")}</td>
      <td className="text-left p-4 border-collapse border border-slate-400">{oversight ? (oversight) : ("")}</td>
      <td className="text-left p-4 border-collapse border border-slate-400">{client ? (client) : ("")}</td>
    </tr>
  );
}

export default HistoricalProjectBlock;
