import React from 'react';

const Star = ({ selected }) => (
    <img
      src={selected ? require('../../assets/EtoileRouge.png') : require('../../assets/EtoileGrise.png')}
      alt="star"
      style={{ width: '30px', height: '30px' }}
    />
  );

const Stars = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Star key={i} selected={i < rating} />);
  }
  return (
    <div style={{ display: 'flex', paddingTop: '10px'}}>
      {stars}
    </div>
  );
};

export default Stars;