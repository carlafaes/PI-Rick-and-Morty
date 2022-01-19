import { GET_ALL,FILTER, GET_EPISODE,SEARCH_BY_NAME } from "./types";
import axios from 'axios';

// export const ROUT_GET = `http://localhost:3001/character/?order=${order}`
export const ROUT_GET_EPISODE= 'http://localhost:3001/episode/getEpisodes'

export function getChar({order}){
    return async function get(dispatch){
        let infoGet= await axios.get(`http://localhost:3001/character/getCharacters?order=${order}`);
        return dispatch({
            type: GET_ALL,
            payload:infoGet.data, //array de objetos con personajes
        })
    }
}

export function filter(value){
    return (dispatch)=>{
        dispatch({
            type:FILTER,
            payload: value,
        })
    }

}

export function getEpisodes(){
    return async (dispatch)=>{
        let infoEpisodes = await axios.get(ROUT_GET_EPISODE)
        return dispatch({
            type:GET_EPISODE,
            payload: infoEpisodes.data,
        })
    }
}

export const searchByName= (name)=>{
    return async(dispatch)=>{
        try{
            const getName= await axios.get(`http://localhost:3001/character/getCharacters?name=${name}`)

            console.log(getName.data, 'error getname')
                return dispatch({
                    type: SEARCH_BY_NAME,
                    payload: getName.data,
                })
           }
        catch(err){
          console.log(err);
        }
   }
      }
    