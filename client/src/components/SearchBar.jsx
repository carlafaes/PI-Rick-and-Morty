import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../actions/indexActions';


export default function SearchBar(){
    const [search,setSearch]= useState('');
    // console.log(search,'search')
    const dispatch= useDispatch();

    function onSubmit(e){
        e.preventDefault(e);
        dispatch(searchByName(search));//searchByName(search)
        setSearch('');
    }

    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value);
        
    }

    return(
        <div className='searc-cards'>
        <div className='searchBarC'>
            <form onSubmit={onSubmit}>
                <div className='box-search'>
                    <input className='innput-box' type="text" placeholder='Search character' value={search} onChange={onInputChange} />
                    <input className='submit-in' type="submit" value='Search🔍' onSubmit={onSubmit} />
                </div>

            </form>
        </div>
        </div>
    )
}