import React from "react";
import { useDispatch } from "react-redux";
import {filter} from '../actions/indexActions';

export default function Filter(){
    const dispatch= useDispatch();

    function handleSelect(e){
        dispatch(filter(e.target.value))//dispatch(filter("default"/"alien"/"human"))
    }


    return(
        <div>
            <label className="label-listas" >Filter By Species<br/></label>
            <select className="select-filters" onChange={handleSelect}>
                <option className="option-value-filters" value="default">All</option>
                <option className="option-value-filters" value="Alien">Alien</option>
                <option className="option-value-filters" value="Human">Human</option>
            </select>
        </div>
    );
}
