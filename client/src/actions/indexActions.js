import { GET_ALL,FILTER,FILTER_CREATED, GET_EPISODE,SEARCH_BY_NAME, ORDER, ADD_CHAR,GET_DETAILS,CLEAN_Q,FILTER_ORIGIN } from "./types";
import axios from 'axios';

export const ROUT_GET = `/character/getCharacters`
export const ROUT_GET_EPISODE= '/episode/getEpisodes'

export function getChar(){
    return async function get(dispatch){
        let infoGet= await axios.get(ROUT_GET);
        return dispatch({
            type: GET_ALL,
            payload:infoGet.data, //array de objetos con personajes
        })
    }
}
export function getDetails(id){
    return async (dispatch)=>{
        const details= await axios.get('/character/'+ id);
        const data=details.data;
        console.log(data, 'ESTE ES EL Data')
        return dispatch({
            type: GET_DETAILS,
            payload:data,
        })
    
}
}
export function cleanQ(payload) {
    return {
      type: CLEAN_Q,
      payload,
    };
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

export function filterByOrigin(payload){
    return{
        type:FILTER_ORIGIN,
        payload,
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
            const getName= await axios.get(`/character/getCharacters?name=${name}`)
            const searchName=getName.data.flat()
             console.log(searchName, 'error getname')
                return dispatch({
                    type: SEARCH_BY_NAME,
                    payload: searchName,
                })
           }
        catch(err){
          console.log(err);
        }
   }
 }
      export function addChar(payload){
        return async function(dispatch){
            const created= await axios.post('/character/create/',payload);
            // console.log(created)
            return created;
        }
    }
    export const addCharType = () => ({type: ADD_CHAR})

    export function filterCreated(payload){
        return{
            type:FILTER_CREATED,
            payload
        }
    }
    