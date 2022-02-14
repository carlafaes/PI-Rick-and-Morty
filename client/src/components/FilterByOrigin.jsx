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
         <label className="label-listas">Filter By Origins <br/></label>
         <select className="select-filters" onChange={e => handlerFilterEpisodes(e)}>
         <option className="option-value-filters" value='all'> All Origins</option>
         <option className="option-value-filters" value='unknown'>Unknown</option>
         <option className="option-value-filters" value='Abadango'>Abadango</option>
         <option className="option-value-filters" value='Earth (C-137)'>Earth (C-137)</option>
         <option className="option-value-filters" value='Earth (Replacement Dimension)'>Earth (Replacement Dimension)</option>
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