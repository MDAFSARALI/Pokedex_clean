import Search from "../Search/Search";
import PokedexList from '../PokemonList/PokemonList'
import { useEffect, useState } from "react";
import './Pokedex.css'
import PokemonDetails from "../PokemonDetails/PokemonDetails";
function Pokedex(){

    const [searchTerm,setSearchTerm] = useState('');


    return(
        <div className="pokedex-wrapper">
            <Search updateSearchTerm={setSearchTerm}/>
            {(!searchTerm) ? <PokedexList/> : <PokemonDetails pokemonName={searchTerm} key={searchTerm}/>}
        </div>
    )
}

export default Pokedex;