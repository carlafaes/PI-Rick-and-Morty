import React from "react";
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getDetails,cleanQ} from '../actions/indexActions';
import {useParams} from 'react-router';
import { Link } from "react-router-dom";
import personajeImg from '../img/Rick-morty-1.jpeg'


export default function Detail(){
const dispatch=useDispatch();
 const {id}=useParams();
console.log(id,'id')
useEffect(()=>{
    // dispatch(cleanQ())
    dispatch(getDetails(id));
    console.log(getDetails)
},[dispatch,id])

const personaje= useSelector((state)=> state.details);
console.log(personaje,'es el personaje')

    return(
        <div>
            <Link to='/home'>
            <button>Go Back</button>
            </Link>
            <div>
                {Object.values(personaje).length > 0 ?
                <div>
                     <div>
                    <h1>{personaje.name}</h1>
                     <h4>Species: {personaje.species}</h4>
                    <h4>Origin: {personaje ? personaje.origin.name : personaje.origin }</h4> 
                </div>
                <div>
                    <img src={personaje.image? personaje.image : personajeImg} alt="rickandmortyChar" />
                </div>
                <div>
                      <h4>Episodes: {personaje.episode ? personaje.episode : personaje.episode.map((e)=> e.name)}</h4> 
                </div>
                </div> 
                :   <div className="loading"> Loading</div>
               
            }
            </div>
        </div>
    )
}