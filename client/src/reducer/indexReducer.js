import { GET_ALL, FILTER, GET_EPISODE} from "../actions/types";

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
            
          default:
              return state;
  }
}