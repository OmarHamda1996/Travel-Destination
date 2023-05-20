import React from 'react';
import { useParams } from 'react-router-dom';
import tourData from '../../data/db.json';

const TourDetails = () => {
  const { id } = useParams();
  const tour = tourData.find(tour => tour.id === id);

  if (!tour) {
    return <div>Tour not found.</div>;
  }

  const { name, description } = tour;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TourDetails;
