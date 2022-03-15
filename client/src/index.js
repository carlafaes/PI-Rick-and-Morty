import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 //import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import {Provider} from 'react-redux';
import {store} from './store/indexStore';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API_RM || 'http://localhost:3001';

ReactDOM.render(
  //para que trabaje redux hay que pasarle el provider con la store
  <Provider store={store}>  
     <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//// reportWebVitals();