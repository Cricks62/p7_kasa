import React from "react";
import data from '../../datas/logements.json'



function Card({ item }) {
    return (
      <div className="card">
        <a href={`/logement/${item.id}`}>
        <h3 className="titre_card">{item.title}</h3>
        <img className='img_card' src={item.cover} alt="appartement" />
        </a>
      </div>
    );
  }
  
  export default function App() {
    return (
      <>
        {data.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </>
    );
  }
