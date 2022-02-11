import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getEpisodes,addCharType,addChar } from '../actions/indexActions';
// import axios from 'axios';
import { useNavigate} from 'react-router-dom'
import personajeImg from '../img/imgPer.jpg'
import './styles/Create.css';



export default function Create(){
 const dispatch= useDispatch();
 const stateEpisodes = useSelector(state => state.episodes)
 const history= useNavigate();

 
useEffect(()=>{
    dispatch(getEpisodes());
    return ()=>{
        dispatch(addCharType())
    }
},[dispatch])

const [char,setChar]= useState({
    name: "",
    species: "",
    origin: "",
    image: "",
    episode:[],
})
function handleChange(e){
    setChar({
        ...char,
        [e.target.name]: e.target.value, //se va modificando la prop name del estado a medida que se vaya lenando el input
    })
  }
  

function handleSelect(e){
    setChar({
        ...char,
        episode: [...char.episode, e.target.value]
    })
    console.log(char)
}

function handleSelectOrigin(e){
    setChar({
        ...char,
        origin:[...char.origin, e.target.value]
    })
    console.log(char,'origin')
}

 function handleSubmit(e){
    e.preventDefault();
    // await axios.post('http://localhost:3001/character/create/', char);//solicitud al back de tipo 
    let checkErr=[];
    if(char.episode.length < 1){
        checkErr.push('requires at least one episode')
    }
    // alert('Character created succesfully!');
    // history('/home') //redireccion al home

 
let succesChar= {
    name: char.name,
    species: char.species,
    origin: char.origin,
    image: char.image,
    episode:char.episode,
}
console.log(succesChar)
dispatch(addChar(succesChar));
alert('Character created succesfully!');

history('/home');
}


return(
    <form onSubmit={handleSubmit} className='form-create'>
        <label>Name</label>
        <input name='name' value={char.name} onChange={handleChange} />

        <label>Specie</label>
        <input name='species' value={char.species} onChange={handleChange} />

        <label>Origin</label>
        <select onChange={handleSelectOrigin}>
         <option value='all'> All Origins</option>
         <option value='unknown'>Unknown</option>
         <option value='Abadango'>Abadango</option>
         <option value='Earth (C-137)'>Earth (C-137)</option>
         <option value='Earth (Replacement Dimension)'>Earth (Replacement Dimension)</option>
         </select>
        {/* <input name='origin' value={char.origin} onChange={handleChange} /> */}

        
        <img src={personajeImg} alt='imgPer' />

        <select onChange={handleSelect}>
            {
                stateEpisodes.length > 0 && 
                stateEpisodes.map((ep)=>{
                    return (
                    <option key={ep.id} value={ep.id}>
                        {ep.name}
                    </option>
                    )
                })

            }
        </select>
        <button type='submit' >Create</button>
    </form>
)

}