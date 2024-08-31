import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './pokemonDetails.css'
import usePokemonList from "../../hooks/usePokemonList";
import usePokemonDetails from "../../hooks/usePokemonDetails";
function PokemonDetails({pokemonName}){


  const {id}=useParams();
  const [pokemon]=usePokemonDetails(id,pokemonName);
  

   
    return(


          <div className="pokemonDetails-wrapper">
            <img className="pokemon-details-image" src={pokemon.image} alt={pokemon.name} />
            <div className="pokemon-details-name"><span>{pokemon.name}</span></div>
            <div className="pokemon-details-name">Height : {pokemon.height}</div>
            <div className="pokemon-details-name">Weight : {pokemon.weight}</div>
            <div className="pokemon-details-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
            </div>

            {/* SHOWING THE SAME TYPE POKEMON */}
      <br />

        {
         pokemon.types && pokemon.similarPokemons &&
            <div className="more"> 
              <h3>More {pokemon.types[0]} Type Pokemons</h3>
                <ul>
                  {
                    pokemon.similarPokemons.map((p)=> <li key={p.pokemon.url}>{p.pokemon.name}</li>)
                  }
                </ul>
            </div>

          }
          </div>
    );
}




export default PokemonDetails;