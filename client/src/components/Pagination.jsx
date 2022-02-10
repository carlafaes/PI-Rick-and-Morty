import React from 'react';
import { useState } from 'react';
import './styles/Pagination.css'
// import prev from './img/flechaback.png'
// import next from './img/flechanext.png'


 


export default function Pagination({current,setCurrentPage,max}){
   const [input,setInput]= useState(1);
    
//    const nextPage= ()=>{
//        setInput(parseInt(input) + 1);
//        setCurrentPage(parseInt(currentPage) + 1);
//    }
//    const previousPage=()=>{
//        setInput(parseInt(input) - 1);
//        setCurrentPage(parseInt(currentPage) - 1);
//    }
    const onKeyDown=(e)=>{
    
        if(e.keyCode === 13){
            if(parseInt(e.target.value )<= 0 || parseInt(e.target.value) > Math.ceil(max) || isNaN(parseInt(e.target.value)) ){
                setCurrentPage(1)
                setInput(1)
                
            }
            else{
                setCurrentPage(parseInt(e.target.value))
            }
        }
    }
    // const onClick=(e)=>{
    //     if(handleClickReset(e)){
    //         setInput(parseInt(1))
    //     }
    // }
    const onChange= (e)=>{
        setInput(e.target.value)
    }
     return(
         <div className='container-page'>
           {/* <button className='btn-page' onClick={previousPage} disabled={currentPage === 1 || currentPage < 1 || currentPage === NaN}>
                ⫷prev
            </button> */}

           <input className='input-page' name='page' autoComplete='off' value={current} onKeyDown={e => onKeyDown(e)} onChange={ e => onChange(e)} />

           <p className='max-page'> de {max}</p>

           {/* <button className='btn-page' onClick={nextPage} disabled={currentPage === max || currentPage > max || currentPage === NaN}>
                    ⫸next
            </button> */}
         </div>
     )
}