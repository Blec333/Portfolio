import React from 'react';

function InterestBlock({ interest, category }) {
  return (
    <tr className='hover:bg-base-300'>
      <td className="text-left p-4 border-collapse border border-slate-400">{interest ? (interest) : ("")}</td>
      <td className="text-left p-4 border-collapse border border-slate-400">{category ? (category) : ("")}</td>
    </tr>
  );
}

export default InterestBlock;
