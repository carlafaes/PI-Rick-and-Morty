import React from "react";
import { useDispatch } from "react-redux";
import { filterCreated } from "../actions/indexActions";

export default function OrderCreated({set}){
    const dispatch=useDispatch();

    function handlerFilterCreated(e){
        dispatch(filterCreated(e.target.value));
        set(`ordenado ${e.target.value}`)
    }

    return(
        <div>
            <label >Order Info <br/></label>
            <select onChange={e => handlerFilterCreated(e)}> 
               <option id="created" value='createdInDb' >
                Characters Created
            </option>
               <option  id="api" value='api' >
                Characters Api
            </option>
               <option  id="all" value='all'>
                 All Characters
            </option>
            </select>
        </div>
    )
}