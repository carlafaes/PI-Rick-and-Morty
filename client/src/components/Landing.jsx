import React from "react";
import { Link } from "react-router-dom";
import video from './../img/rick_and_morty.mp4';
import './styles/Landing.css';

export default function Landing(){
    return(
        <div className="container-landing">
           
             
            <div className="menu-landing">
                <div className="titulo-btn">
                    {/* <h1>
                        <span className="titulo-welc">
                            Welcome to 
                        </span>
                    </h1> */}
                <Link to='/home'>
                    <button className="btn-la">
                        Go!
                    </button>
                </Link>
                </div>
                <div>
                    <video className="video" autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>    
            </div>
            

            
        </div>
    )
}