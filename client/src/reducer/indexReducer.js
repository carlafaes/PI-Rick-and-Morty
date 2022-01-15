import { GET_ALL } from "../actions/types";

const initialState = {
    characters: [],//todos los personajes
    filtered:[],//filtrados q renderizamos
    details:{}// renderiza detalles
}

export default function rootReducer(state=initialState,action){
  switch(action.type){
      case GET_ALL:
          return{
              ...state,
              characters: action.payload,//se guarda el arreglo de personajes en ambos estados
              filtered: action.payload,
          }
          default:
              return state;
  }
}