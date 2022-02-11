import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { filterByOrigin } from "../actions/indexActions";

export default function FilterByOrigin(){
    const dispatch= useDispatch();
    const allEpis= useSelector((state)=> state.characters)
    // console.log(allEpis,'allEpis')


    function handlerFilterEpisodes(e){
        e.preventDefault();
        dispatch(filterByOrigin(e.target.value));
    }

    return(
        <>
        <div>
         <label>Filter By Origins</label>
         <select onChange={e => handlerFilterEpisodes(e)}>
         <option value='all'> All Origins</option>
         <option value='unknown'>Unknown</option>
         <option value='Abadango'>Abadango</option>
         <option value='Earth (C-137)'>Earth (C-137)</option>
         <option value='Earth (Replacement Dimension)'>Earth (Replacement Dimension)</option>
         {/* {allEpis && allEpis.map((e)=>(
             <option value={e.name} key={e.id}>
                 {e.origin}
             </option>
         ))} */}
         </select>
        </div>
        </>
    )
}