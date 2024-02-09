import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.image} alt={card.name} />
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <p className="card-text">{card.description}</p>
      </div>
    </div>
  );
};

export default Card;
