import React, {useEffect,useState} from 'react';
import Card from './Card';
import Filter from './Filter';
import {useDispatch, useSelector} from 'react-redux';
import { getChar, getEpisodes } from '../actions/indexActions';
import Order from './Order';
import SearchBar from './SearchBar'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import './styles/Cards.css';





export default function Cards(){
    const dispatch = useDispatch();
    const renderChar= useSelector((state)=> state.filtered);//arreglo de objetos
    console.log(renderChar)
    const [order,setOrder]= useState('');
    const [current,setCurrent]= useState(0);
    const large= renderChar.length;

    const nextSlide= ()=>{
        setCurrent(current === large - 1? 0 : current + 1);
    }
    
    const prevSlide= ()=>{
        setCurrent(current === 0? large - 1 : current - 1);
    }
    console.log(current)

    useEffect(() => {
        dispatch(getChar())
        dispatch(getEpisodes())
    }, [dispatch])

    
    if(!Array.isArray(renderChar) || renderChar.length <= 0){
        return null;
    }
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
       <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {
                renderChar.length >0?(
                renderChar.map((char,index)=>(
                    <div key={index} className={index === current ? 'slide_active' : 'slide'}>
                    {index === current && (
                        <Card
                        id={char.id}
                        name={char.name}
                        image={char.image}
                        species={char.species}
                        />
                    )}
                    
                    </div>
                ))
                ):
                (
                    <h1>Loading</h1>
                )                
            }
        </section>
        </div>
    )
}