import React from "react";
import { useParams } from "react-router-dom";
import data from '../../datas/logements.json'


export default function Location() {
    
    const {idLogement} = useParams()

    return (
        <>
        <h1>{idLogement}</h1>
        </>
    )
}

