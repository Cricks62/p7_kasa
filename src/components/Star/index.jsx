import React from 'react';
import './index.css'

const Star = ({ selected }) => (
    <img
      className='imgStars'
      src={selected ? require('../../assets/EtoileRouge.png') : require('../../assets/EtoileGrise.png')}
      alt="star"
    />
  );

const Stars = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Star key={i} selected={i < rating} />);
  }
  return (
    <div  className='containerStars'>
      {stars}
    </div>
  );
};

export default Stars;