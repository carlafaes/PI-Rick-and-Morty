import React from 'react';
// import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { orderFil } from '../actions/indexActions';

export default function Order({set}){
    
    const dispatch= useDispatch();



    function handleSelect(e){
        e.preventDefault();
        dispatch(orderFil(e.target.value));
        set(`${e.target.value}`)
    }


    return(
        <div>
            <label className="label-listas">Order Alphabetic<br/></label>
            <select className="select-filters" id='btn-order'  onChange={(e)=>handleSelect(e)}>
                <option className="option-value-filters" value="az">az</option>
                <option className="option-value-filters" value="za">za</option>
                {/* <option value="default">default</option> */}
            </select>
        </div>
    )
}