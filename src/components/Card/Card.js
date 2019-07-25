import React from 'react';

export default function Card  ({ name, position, dateOfBirth }) {
  return (
    <div className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h2>{name}</h2>
        <p> <i>Position: </i> {position}</p>
        <p> <em>Team: </em> Manchester United </p>
        <p>Age: {dateOfBirth}</p>
      </div>
    </div>
  );
}

