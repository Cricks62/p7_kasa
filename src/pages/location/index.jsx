import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import data from '../../datas/logements.json'
import Carousel from "../../components/Carrousel";
import './index.css'



function Location() {
    const { idLogement } = useParams();
    let Logement = data.filter((e) => e.id === idLogement);
    const logement = Logement.shift();
    const host = logement.host;
    const [firstName, lastName] = host.name.split(' ');
    console.log(firstName, lastName)

    

    return (
      <section className="containersection"> 
          <Carousel items={logement.pictures} />
          <div className="containerhead">
            <div className="titlelocalisation">
              <h2 className="titlelogement">{logement.title}</h2>
              <p className="localisation">{logement.location} </p>
              <div className='tags-wrapper'>
              {logement.tags.map((tag, index) => (
                <span className="tags" key={ 'tag-' && index }> { tag } </span>
                ))}
              </div>
            </div>
            <div className="containerhost">
              <div className="host">
                <div className="name">
                  <p>{firstName}</p>
                  <p>{lastName}</p>
                </div>
                <img src={logement.host.picture} alt=""  className="imghost"/>
              </div>
              <div>
                <p>{logement.rating}</p>
              </div>
            </div>
          </div>
        <div className="containercollapse">
            <Collapse classCSS="containerdesc" title="Description">{logement.description}</Collapse>
            <Collapse classCSS="containerequip" title="Equipement">
              <ul className="liste">
                {logement.equipments.map((equip, index) => (
              <li key={ 'equip' && index }> { equip } </li>
              ))}
              </ul>
            </Collapse> 
        </div>
      </section>
    );
  };

  export default Location

