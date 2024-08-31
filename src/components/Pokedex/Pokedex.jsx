import Search from "../Search/Search";
import PokedexList from '../PokemonList/PokemonList'
import './Pokedex.css'
function Pokedex(){
    return(
        <div className="pokedex-wrapper">
            <Search/>
            <PokedexList/>
        </div>
    )
}

export default Pokedex;