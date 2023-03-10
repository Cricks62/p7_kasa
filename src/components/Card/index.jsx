import React from "react";
import data from '../../datas/logements.json'



function Card({ item }) {
  return (
    <div className="contenaire_card">
      <a href={`/logement/${item.id}`}>
        <div className="card">
          <img className='img_card' src={item.cover} alt="appartement" />
          <div className="overlay"> 
            <h3 className="titre_card">{item.title}</h3>
          </div>
        </div>
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
