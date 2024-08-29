import './Search.css'
function Search(){
    return(
        <div className='search-wrapper'>
            <input type="text" placeholder="Search Pokemon Name...." id='pokemon-name-search'></input>
        </div>
    )
}

export default Search