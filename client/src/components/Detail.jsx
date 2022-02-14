import React from "react";
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getDetails,cleanQ} from '../actions/indexActions';
import {useParams} from 'react-router';
import { Link } from "react-router-dom";
import personajeImg from '../img/rick_create.gif'
import loading from './../img/giphy_loading.gif'
import './styles/Detail.css'


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
        <div className="contenedor_total">
            {/* <Link to='/home'>
            <button className="back">Go Back</button>
            </Link> */}
            <div className="container_details">
                {Object.values(personaje).length > 0 ?
                <div>
                     <div>
                    <h1 className="titulos_detail">{personaje.name}</h1>
                     <h4 className="titulos_detail">Species: {personaje.species}</h4>
                    <h4 className="titulos_detail">Origin: {personaje.origin.name ? personaje.origin.name : personaje.origin }</h4> 
                </div>
                <div>
                    <img className="img_details" src={personaje.image? personaje.image : personajeImg} alt="rickandmortyChar" />
                </div>
                <div className="container_episodes">
                      <h4 className="episodes">Episodes: {personaje.episode ? personaje.episode : personaje.episodes.map((e)=> e.name + ' ') }<br/></h4> 
                </div>
                </div> 
                :   
                   <div className="container_loading">
                       <img className='gif_loading' src={loading}  />
                       <div className="loading"> 
                       Loading...
                       </div>
                   </div> 
               
            }
            </div>
        </div>
    )
}