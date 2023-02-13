import React from "react";
import img from "../../assets/Mask_Group.png"
import '../../components/Collapse/index.css'
import Collapse from "../../components/Collapse";


const About = () => {
    return (
        <><div className="imgtoppages">
            <img className="imghead" src={img} alt="fond de titre"></img>
        </div>
        <section className="containerCollapse">
            <div className="containercol">
                <Collapse title="Fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</Collapse>
            </div>
            <div className="containercol">
                <Collapse title="Respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Collapse>
            </div>
            <div className="containercol">
                <Collapse title="Service">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</Collapse>
            </div>
            <div className="containercol">
                <Collapse title="Responsabilité">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Collapse>
        </div>
        </section></>
            
        
    );
};

export default About;