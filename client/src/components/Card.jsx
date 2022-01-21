import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import personajeIMG from '../img/Rick-morty-1.jpeg'

export default function Card({name,image,species,id}){
    

    return(
        <div>
            <div>
            <div>
                <h1>Name: {name}</h1>
            </div>
            <div>
            <img src={image? image : personajeIMG} alt="imgCard" />
            </div>
            <div>
            <p>Specie: {species}</p>
            </div>
        </div>
        
        <div>
            <Link to={`/home/${id}`}>
            <button  >
            Info
           </button>
            </Link>
        </div>
        </div>
        
    )
}