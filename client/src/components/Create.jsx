import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getEpisodes } from '../actions/indexActions';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'



export default function Create(){
 const dispatch= useDispatch();
 const stateEpisodes = useSelector(state => state.episodes)
 const history= useNavigate();

const [char,setChar]= useState({
    name: "",
    species: "",
    origin: "",
    image: "",
    episode:[],
})
function handleSelect(e){
    setChar({
        ...char,
        episode: [...char.episode, e.target.value]
    })
    console.log(char)
}

async function handleSubmit(e){
    e.preventDefault();
    await axios.post('http://localhost:3001/character/create/', char);//solicitud al back de tipo 
    alert('Character created succesfully!');
    history('/home') //redireccion al home
}

function handleChange(e){
  setChar({
      ...char,
      [e.target.name]: e.target.value, //se va modificando la prop name del estado a medida que se vaya lenando el input
  })
}

useEffect(()=>{
    dispatch(getEpisodes());
},[dispatch])

return(
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name='name' value={char.name} onChange={handleChange} />

        <label>Specie</label>
        <input name='species' value={char.specie} onChange={handleChange} />

        <label>Origin</label>
        <input name='origin' value={char.origin} onChange={handleChange} />

        <label>Image</label>
        <input name='image' value={char.image} onChange={handleChange} />

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