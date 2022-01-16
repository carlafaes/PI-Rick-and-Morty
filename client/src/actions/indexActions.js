import { GET_ALL,FILTER } from "./types";
import axios from 'axios';

export const ROUT_GET = 'http://localhost:3001/character/getCharacters'

export function getChar(){
    return async function get(dispatch){
        let infoGet= await axios.get(ROUT_GET);
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