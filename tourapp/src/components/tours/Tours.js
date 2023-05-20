import React from 'react';
import Tour from './tour/Tour'
import tourData from '../../data/db.json';



const Tours = () => {
  return (
    <div>
      {tourData.map(tour => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </div>
  );
};

export default Tours;
