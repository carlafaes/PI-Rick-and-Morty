import { GET_ALL,FILTER, GET_EPISODE,SEARCH_BY_NAME, ORDER, ADD_CHAR } from "./types";
import axios from 'axios';

export const ROUT_GET = `http://localhost:3001/character/getCharacters`
export const ROUT_GET_EPISODE= 'http://localhost:3001/episode/getEpisodes'

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

export function getEpisodes(){
    return async (dispatch)=>{
        let infoEpisodes = await axios.get(ROUT_GET_EPISODE)
        return dispatch({
            type:GET_EPISODE,
            payload: infoEpisodes.data,
        })
    }
}
export function orderFil(value){
        return(dispatch)=>{
             dispatch({
                type:ORDER,
                payload: value,
             })
            
     }
}

export const searchByName= (name)=>{
    return async (dispatch)=>{
        try{
            const getName= await axios.get(`http://localhost:3001/character/getCharacters?name=${name}`)

            // console.log(getName.data, 'error getname')
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
      export function addChar(payload){
        return async function(dispatch){
            const created= await axios.post('http://localhost:3001/character/create/',payload);
            // console.log(created)
            return created;
        }
    }
    export const addCharType = () => ({type: ADD_CHAR})
    