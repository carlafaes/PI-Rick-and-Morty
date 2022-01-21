import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getChar } from '../actions/indexActions';


export default function NavBar(){
    const dispatch= useDispatch();
    // const [search,setsearch]= useState('')

    function handleClick(e){
        e.preventDefault();
        dispatch(getChar());
    }

    return(
        <div>
            <div onClick={handleClick}>
            <Link to='/home'>
                <ul>
                    <li value='home'>Home</li>
                </ul>
            </Link>
        </div>

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