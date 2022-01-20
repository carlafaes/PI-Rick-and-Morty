import { orderFil } from "../actions/indexActions";
import { GET_ALL, FILTER, GET_EPISODE,SEARCH_BY_NAME, ORDER,ADD_CHAR} from "../actions/types";

const initialState = {
    characters: [],//todos los personajes
    filtered:[],//filtrados q renderizamos
    details:{},// renderiza detalles
    episodes:[], // estado de los episodios
}

export default function rootReducer(state=initialState,action){
  switch(action.type){
        case GET_ALL:
          return{
              ...state,
              characters: action.payload,//se guarda el arreglo de personajes en ambos estados
              filtered: action.payload,
          }
        case FILTER:
            if(action.payload === 'default'){
                return{
                    ...state,
                    filtered:state.characters, //vuelvo a cargar todos los personajes
                }
            }
            else if(action.payload){
                return{
                    ...state,
                    filtered: state.characters.filter(char => 
                        char.species === action.payload
                    ) // Human o Alien
                }
            }
            else{
                return state;
            }
        case GET_EPISODE:
            return{
                ...state,
                episodes:action.payload,
            }

        case SEARCH_BY_NAME:
                return {
                  ...state,
                  filtered: action.payload,
                };

        case ORDER:
                let stateC= state.characters;
                console.log(stateC, 'este es el stateC')
                let orderAlf= action.payload === 'az' ? stateC.sort(function(a,b){
                    console.log(a,b)
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return -1;
                    }
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1;
                    }
                    else{
                        return 0;
                    }
                }):
                stateC.sort(function(a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return -1
                    }
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1;
                    }
                    else{
                        return 0;
                    }
                })
                console.log('es el orderAlf',orderAlf)
            return{
                ...state,
                filtered:orderAlf
            }

        case ADD_CHAR:
            return{
                ...state,
            }
          default:
              return state;
  }
}