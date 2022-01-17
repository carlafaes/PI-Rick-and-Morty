import React from 'react';

export default function Card({name,image,species}){
    return(
        <div>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
            <img src={image} alt="imgCard" />
            </div>
            <div>
            <p>{species}</p>
            </div>
        </div>
    )
}