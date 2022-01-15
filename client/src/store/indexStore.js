import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer/indexReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

export  const store= createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))//sin applyMiddleware no se pueden realizar pedidos asincronos
);