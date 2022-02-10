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
            <label>
               <input type='checkbox' id="created" value='created' />
                Characters Created
            </label>
            <br/>
            <label>
               <input type='checkbox' id="api" value='api' />
                Characters Api
            </label>
            <br/>
            <label>
               <input type='checkbox' id="all" value='all' />
                 All Characters
            </label>
            </select>
        </div>
    )
}