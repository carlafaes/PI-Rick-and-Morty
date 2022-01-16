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
            <select onChange={handleSelect}>
                <option value="default">All</option>
                <option value="Alien">Alien</option>
                <option value="Human">Human</option>
            </select>
        </div>
    );
}
