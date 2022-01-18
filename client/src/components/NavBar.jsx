import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getChar } from '../actions/indexActions';
import SearchBar from './SearchBar'

export default function NavBar(){
    const dispatch= useDispatch();

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
        <div>
            <SearchBar/>
        </div>
        </div>
        
    )
}