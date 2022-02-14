import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getChar } from '../actions/indexActions';
import './styles/Navbar.css';
import portada from './../img/rick-cartel.gif'

export default function NavBar(){
    const dispatch= useDispatch();
    // const [search,setsearch]= useState('')

    function handleClick(e){
        e.preventDefault();
        dispatch(getChar());
    }

    return(
        <div className='navbar'>
             <div>
                 <img className='portada-rym' src={portada} alt='portada' />
            {/* <h2 className='titulo-nav'>
                Rick and Morty
            </h2> */}
          </div>
        <div className='enlaces'>
            <div onClick={handleClick}>
            <Link to='/home'>
                <ul className='enlaces-ul'>
                    <li className='home' value='home'>Home</li>
                </ul>
            </Link> 
            </div>
            <div>
            <Link to='/create'>
            <ul className='enlaces-ul'>
                <li className='createbtn' value='createchar'>Create</li>
            </ul>
            </Link>
        </div>
        </div>
        
        </div>
        
    )
}