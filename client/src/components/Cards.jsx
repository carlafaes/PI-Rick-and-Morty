import React, {useEffect} from 'react';
import Card from './Card';
import Filter from './Filter';
import {useDispatch, useSelector} from 'react-redux';
import { getChar } from '../actions/indexActions';



export default function Cards(){
    const dispatch = useDispatch();
    const renderChar= useSelector((state)=> state.filtered);//arreglo de objetos

    useEffect(() => {
        dispatch(getChar({}))
    }, [dispatch])

    return(
        <div>
            <h2>
                Rick and Morty
            </h2>

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