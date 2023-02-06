import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import data from '../../datas/logements.json'
import Carousel from "../../components/Carrousel";



function Location() {
    const { idLogement } = useParams();
    let Logement = data.filter((e) => e.id === idLogement);
    const logement = Logement.shift();
    console.log(logement)

    

    return (
      <div> 
        <div>
          <Carousel items={logement.pictures} />
            <h2>{logement.title}</h2>
            <p>{logement.location} </p>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="" />
        </div>
        <div>
          <div className='tags-wrapper'>
            {logement.tags.map((tag, index) => (
              <span key={ 'tag-' && index }> { tag } </span>
              ))}
          </div>
            <p>{logement.rating}</p>
        </div>
        <div>
            <Collapse title="Description">{logement.description}</Collapse>
            <Collapse title="Equipement">
              <ul>
                {logement.equipments.map((equip, index) => (
              <li key={ 'equip' && index }> { equip } </li>
              ))}
              </ul>
            </Collapse> 
        </div>
      </div>
    );
  };

  export default Location

