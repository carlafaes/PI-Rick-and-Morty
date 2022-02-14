import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import './styles/Card.css'
import personajeIMG from '../img/rick_create.gif'
// import Modal from './Modal';
// import Detail from './Detail';

export default function Card({name,image,species,id}){
    
    // const [seeModal,setSeeModal]= useState(false)
    return(
        <>
        {/* <Modal
        seeModal={seeModal}
        setSeeModal={setSeeModal}
        >
            <h1>detail</h1>
           
        </Modal> */}
        <div className='container-card'>
            <div>
            <div>
                <h1 className='titulo-card'>Name: {name}</h1>
            </div>
            <div>
            <p  className='titulo-card'>Specie: {species}</p>
            </div>
            <div>
            <img src={image? image : personajeIMG} alt="imgCard" className='imgCard'/>
            </div>
            
        </div>
        
        <div>
            
            
            <Link to={`/home/${id}`}>
            <button className='btn-info'  >
            Learn More
           </button>
            </Link>
            {/* <button onClick={()=> setSeeModal(true)}>mod</button> */}
        </div>
        </div>
        </>
    )
}