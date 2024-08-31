import { useCallback, useState } from 'react'
import './Search.css'
import useDebounce from '../../hooks/useDebounce'
function Search({updateSearchTerm}){

    const debounceCallback=useDebounce((e)=>{updateSearchTerm(e.target.value)})

    return(
        <div className='search-wrapper'>
            <input
             type="text" 
             placeholder="Search Pokemon Name...." 
             id='pokemon-name-search'
             onChange={debounceCallback}
             ></input>
        </div>
    )
}

export default Search