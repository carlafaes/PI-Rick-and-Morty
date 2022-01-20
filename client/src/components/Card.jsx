import React from 'react';
import personaje from '../img/Rick-morty-1.jpeg'

export default function Card({name,image,species}){
    return(
        <div>
            <div>
                <h1>Name: {name}</h1>
            </div>
            <div>
            <img src={image? image : personaje} alt="imgCard" />
            </div>
            <div>
            <p>Specie: {species}</p>
            </div>
        </div>
    )
}