import React from "react";
import styled from "styled-components";
import img from '../../assets/404.png'
import color from "../../styles/color";

const ContainerError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
`
const OupsH2 = styled.h2`
    color: ${color.red};
    font-weight: 500;
    font-size: 36px;
    padding: 60px 0;
`

const LienAcceuil = styled.a`
    color: ${color.red};
    text-decoration: none;
    text-decoration-line: underline;
    font-weight: 500;
    font-size: 18px;t

`





const Error = () => {
    return (
        <ContainerError>
            <img src={img} alt="Erreur" />
            <OupsH2>Oups! La page que vous demandez n'existe pas.</OupsH2>
            <LienAcceuil href="/">Retourner sur la page d'acceuil</LienAcceuil>
        </ContainerError>
    );
};

export default Error;