import React, {useEffect,useState} from 'react';
import Card from './Card';
import Filter from './Filter';
import {useDispatch, useSelector} from 'react-redux';
import { getChar, getEpisodes } from '../actions/indexActions';
import Order from './Order';
import SearchBar from './SearchBar'





export default function Cards(){
    const dispatch = useDispatch();
    const renderChar= useSelector((state)=> state.filtered);//arreglo de objetos
    console.log(renderChar)
    const [order,setOrder]= useState('');
    

    useEffect(() => {
        dispatch(getChar())
        dispatch(getEpisodes())
    }, [dispatch])

   
    return(
        <div>
            <h2>
                Rick and Morty
            </h2>
        <Order set={setOrder}/>
        <Filter/>
        <div>
            
            <SearchBar value={setOrder}/>
        </div>
       

            {
                renderChar.length >0?(
                renderChar.map((char,index)=>(
                    <div key={index}>
                    <Card
                    id={char.id}
                    name={char.name}
                    image={char.image}
                    species={char.species}
                    />
                    </div>
                ))
                ):
                (
                    <h1>Loading</h1>
                )                
            }
        </div>
    )
}