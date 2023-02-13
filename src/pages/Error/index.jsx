import React from "react";
import styled from "styled-components";
import img from '../../assets/404.png'
import color from "../../styles/color";
import './index.css'

const ContainerError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
`

const LienAcceuil = styled.a`
    color: ${color.red};
    text-decoration: none;
    text-decoration-line: underline;
    font-weight: 500;
    font-size: 18px;
`


const Error = () => {
    return (
        <ContainerError>
            <img className="imgerror" src={img} alt="Erreur" />
            <h2 className="titleError">Oups! La page que vous demandez n'existe pas.</h2>
            <LienAcceuil href="/">Retourner sur la page d'acceuil</LienAcceuil>
        </ContainerError>
    );
};

export default Error;