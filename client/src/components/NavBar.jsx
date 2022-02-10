import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getChar } from '../actions/indexActions';
import './styles/Navbar.css';


export default function NavBar(){
    const dispatch= useDispatch();
    // const [search,setsearch]= useState('')

    function handleClick(e){
        e.preventDefault();
        dispatch(getChar());
    }

    return(
        <div className='navbar'>
            <div onClick={handleClick}>
            <Link to='/home'>
                <ul>
                    <li value='home'>Home</li>
                </ul>
            </Link>
        </div>
            <h2>
                Rick and Morty
            </h2>
        <div>
            <Link to='/create'>
            <ul>
                <li value='createchar'>Create</li>
            </ul>
            </Link>
        </div>
        
        </div>
        
    )
}