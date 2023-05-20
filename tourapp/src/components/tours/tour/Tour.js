import React, { useState } from 'react';

const Tour = ({ tour }) => {
  const { id, name, image, description } = tour;
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        {showDescription ? description : `${description.slice(0, 3)}...`}
        <button onClick={toggleDescription}>
          {showDescription ? 'See Less' : 'See More'}
        </button>
      </p>
    </div>
  );
};

export default Tour;
