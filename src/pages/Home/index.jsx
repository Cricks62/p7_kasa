import React from 'react';
import styled from 'styled-components';
import img from '../../assets/img.png'
import color from '../../styles/color';
import '../../styles/css/image.css'
import '../../components/Card/index.css'
import Card from '../../components/Card/index'


const StyledTitle = styled.h1`
  color: ${color.white};
  position: absolute;
  left: 25.9%;
  right: 25.14%;
  top: 24.32%;
  bottom: 69.04%;
  font-weight: 500;
  font-size: 48px;
  display: flex;
  justify-content: center;

`


function Home() {
  return (
    <main>
      <div>
        <img className="imgtoppages" src={img} alt="bord de mer"></img>
        <StyledTitle>Chez vous, partout et ailleurs</StyledTitle>
      </div>
      <div className='div_card'>
        <Card />
      </div>
    </main>

  );
}

export default Home;
