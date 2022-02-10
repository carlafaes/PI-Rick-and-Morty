import React, {useEffect,useState} from 'react';
import Card from './Card';
import Filter from './Filter';
import FilterByOrigin from './FilterByOrigin'
import Pagination from './Pagination';
import OrderCreated from './OrderCreated';
import { filterByOrigin } from '../actions/indexActions';
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
    // const [currentPage,setCurrentPage]= useState(1)
    // const [recXPage,setRecXPage]= useState(1);
    // console.log(recXPage,'recXpage')
    const max= Math.ceil(renderChar.length);
    

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
           <div>
           <SearchBar value={setOrder}/>
           </div>
       
        <div className='menu-listas'>
            <ul className='ul-menu'>
                <li className='li-menu'>
                <Order set={setOrder}/>
                </li>
                <li className='li-menu'>
                <Filter/>
                </li>
                <li className='li-menu'>
                <FilterByOrigin set={setOrder} set={setCurrent}/>
                </li>
                <li  className='li-menu'>
                <OrderCreated set={setOrder}  />
                </li>
            </ul>    
        </div>
        
        <div>
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
                        species={char.species}
                        image={char.image}
                        
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
        
             <Pagination 
                current= {current}
                setCurrent={setCurrent}
                max= {max} />
        </div>      
        </div>
    )
}