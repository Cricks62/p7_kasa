import React from "react";
import img from '../../assets/404.png'
import './index.css'




const Error = () => {
    return (
        <div classname='containerError'>
            <img className="imgerror" src={img} alt="Erreur" />
            <h2 className="titleError">Oups! La page que vous demandez n'existe pas.</h2>
            <a  className='lienAcceuil' href="/">Retourner sur la page d'acceuil</a>
        </div>
    );
};

export default Error;