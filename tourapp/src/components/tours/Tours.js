import React from 'react';
import toursData from './data.json';

function Tours() {
  return (
    <div>
      {toursData.map((tour, index) => (
        <div key={index}>
          <h3>{tour.name}</h3>
          <img src={tour.image} alt={tour.name} />
        </div>
      ))}
    </div>
  );
}

export default Tours;
