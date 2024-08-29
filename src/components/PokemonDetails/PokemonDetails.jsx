import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './pokemonDetails.css'
function PokemonDetails(){


  const {id}=useParams();
  const [pokemon,setPokemon]=useState({});
  console.log(id)
  async function downloadPokemon() {
    const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon({
      name:response.data.name,
      image:response.data.sprites.other.dream_world.front_default,
      weight:response.data.weight,
      height:response.data.height,
      types:response.data.types.map((t)=>t.type.name)
    });
  }


    useEffect(()=>{
      if(id){
        downloadPokemon();
      }
    },[id]);
    return(


          <div className="pokemonDetails-wrapper">
            <img className="pokemon-details-image" src={pokemon.image} alt={pokemon.name} />
            <div className="pokemon-details-name"><span>{pokemon.name}</span></div>
            <div className="pokemon-details-name">Height : {pokemon.height}</div>
            <div className="pokemon-details-name">Weight : {pokemon.weight}</div>
            <div className="pokemon-details-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
            </div>
          </div>
    );
}




export default PokemonDetails;