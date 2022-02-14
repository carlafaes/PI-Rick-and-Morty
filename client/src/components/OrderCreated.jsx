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
            <label className="label-listas">Order Info <br/></label>
            <select className="select-filters" onChange={e => handlerFilterCreated(e)}> 
               <option className="option-value-filters" id="created" value='createdInDb' >
                Characters Created
            </option>
               <option className="option-value-filters"  id="api" value='api' >
                Characters Api
            </option>
               <option className="option-value-filters" id="all" value='all'>
                 All Characters
            </option>
            </select>
        </div>
    )
}