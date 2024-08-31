import { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios';
import './pokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";
function pokemonList(){
   
        const [pokemonListState,setPokemonListState]=usePokemonList(false);
   
    return (
     <div className="pokemon-list-wrapper">
        <h2 style={{justifyContent:"center" , textAlign:"center"}}>Pokemon Lists...</h2>
        <div className="pokemon-wrapper">
            { (pokemonListState.isLoading) ? 'Loading....'  :pokemonListState.pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)}
        </div>
        <div className="controls">
            <button hidden={pokemonListState.PrevUrl == null } onClick={()=>   {
                const urlToSet=pokemonListState.PrevUrl;
             setPokemonListState({...pokemonListState , pokedexUrl:urlToSet})}
             
            }
             ><FaArrowCircleLeft /> Prev</button>
            <button hidden={pokemonListState.NextUrl == null } onClick={()=>
            {
                const urlToSet=pokemonListState.NextUrl;
            setPokemonListState({...pokemonListState , pokedexUrl:urlToSet})}
        }
            >Next <FaArrowCircleRight /></button>
        </div>
       
     </div>
    )
}


export default pokemonList;