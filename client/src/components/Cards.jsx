import React, {useEffect,useState} from 'react';
import Card from './Card';
import Filter from './Filter';
import {useDispatch, useSelector} from 'react-redux';
import { getChar, getEpisodes } from '../actions/indexActions';
import Order from './Order';



export default function Cards({set}){
    const dispatch = useDispatch();
    const renderChar= useSelector((state)=> state.filtered);//arreglo de objetos
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

            {
                renderChar.length >0?(
                renderChar.map((char,index)=>(
                    <div key={index}>
                    <Card
                    
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