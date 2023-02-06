import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index === items.length - 1 ? 0 : index + 1);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? items.length - 1 : index - 1);
  };

  return (
    <div>
      <button onClick={handlePrev}>Précédent</button>
      <div><img src={items[index]} alt="" /></div>
      <button onClick={handleNext}>Suivant</button>
    </div>
  );
};

export default Carousel;