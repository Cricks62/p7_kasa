import React, { useState, useEffect } from 'react';
import './index.css'
import arrowsB from '../../assets/arrow_back.png'
import arrowsF from '../../assets/arrow_forward.png'

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index === items.length - 1 ? 0 : index + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [index, items.length]);

  const handleNext = () => {
    setIndex(index === items.length - 1 ? 0 : index + 1);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? items.length - 1 : index - 1);
  };



  return (
    <div className='container-carrousel'>
      
      <div className="carousel-item">
        <img className='imagecarou' src={items[index]} alt="" />
        { items.length > 1 ? <div className="carousel-number">{index + 1}/{items.length}</div>: null } 
      </div>
      { items.length > 1 ? <div className='carrousel-arrows'>
        <div className='container-arrows'>
          <button className="carousel-button-back" onClick={handlePrev}><img className='imgarrows' src={arrowsB} alt="fleche" /></button>
        </div>
        <div className='container-arrows'>
          <button className="carousel-button-forward" onClick={handleNext}><img className='imgarrows' src={arrowsF} alt="fleche" /></button>
        </div>
      </div> : null }
    </div>
  );
};

export default Carousel;