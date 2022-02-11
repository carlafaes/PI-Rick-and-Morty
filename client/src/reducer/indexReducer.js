import { orderFil } from "../actions/indexActions";
import { GET_ALL, FILTER,FILTER_CREATED, GET_EPISODE,SEARCH_BY_NAME, ORDER,ADD_CHAR,GET_DETAILS,FILTER_ORIGIN, CLEAN_Q} from "../actions/types";

const initialState = {
    characters: [],//todos los personajes
    filtered:[],//filtrados q renderizamos
    details:[],// renderiza detalles
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
        case GET_DETAILS:
            return{
                ...state,
                details: action.payload,
            };
        case FILTER_ORIGIN:
            const allEpi= state.characters;
            let filterEpi=[]
            if(action.payload === 'all'){
                filterEpi=allEpi;
                // console.log(filterEpi,'filter epi if')
            }
            else{
                filterEpi= allEpi.filter(el => el.origin.includes( action.payload))
            console.log(filterEpi,'filter epi')
            }
            return{
                ...state,
                filtered:filterEpi,
            }    
        
        case CLEAN_Q:
                return {
                  ...state,
                  details: action.payload,
                }
        case FILTER_CREATED:{
            const allCh= state.characters;
            console.log(allCh,'allch')

            let createdFilter= action.payload === 'createdInDb' ?
            allCh.filter((el)=> el.createdInDb) : allCh.filter((el)=> !el.createdInDb);
            console.log(createdFilter,'created filter')

            let allRec= action.payload === 'all'? allCh : createdFilter;
            console.log(allRec,'allRec')
            
              return{
                ...state,
                   filtered:allRec
         }
        }
         default:
            return state;
}
}