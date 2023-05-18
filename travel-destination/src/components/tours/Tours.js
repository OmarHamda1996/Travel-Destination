import React from 'react';
import toursData from 'travel-destination/src/data/db.json';

function Tours() {
  return (
    <div className="tours">
      {toursData.map((tour) => (
        <div key={tour.id} className="tour">
          <h2>{tour.name}</h2>
          <img src={tour.image} alt={tour.name} />
        </div>
      ))}
    </div>
  );
}

export default Tours;
