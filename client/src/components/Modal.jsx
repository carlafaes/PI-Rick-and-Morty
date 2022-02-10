import React from 'react';
import './styles/Modal.css';


export default function Modal({children,seeModal,setSeeModal}){
    return(
        <>
        {seeModal && 
          <div className='overlay'>
                <div className='contenedorModal'>
                <h1>modal</h1>
                <button className='button-cerrar' onClick={()=> setSeeModal(false)}>
                    cerrar
                </button>
                {children}
                </div>
                <video className="video" autoPlay loop muted>
                <source src='https://rickandmortyapi.com/api/episode/25' type="video/mp4" />
            </video>
           
          </div>
        }
        
        </>
    )
}