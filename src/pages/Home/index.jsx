import React from 'react';
import img from '../../assets/img.png'
import '../Home/index.css'
import '../../components/Card/index.css'
import Card from '../../components/Card/index'





function Home() {
  return (
    <main className='main'>
      <div className="imgtoppages">
        <img  className='imagetitre' src={img} alt="bord de mer"></img>
        <h1 className='titletop'>Chez vous, partout et ailleurs</h1>
      </div>
      <section>
        <div className='div_card'>
          <Card />
        </div>
      </section>
    </main>

  );
}

export default Home;
