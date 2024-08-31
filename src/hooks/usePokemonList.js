import axios from "axios";
import { useEffect, useState } from "react";
import pokemonList from "../components/PokemonList/PokemonList";
function usePokemonList(type){
    const [pokemonListState, setPokemonListState]=useState({
        pokemonList:[],
        isLoading:true,
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
        NextUrl:'',
        PrevUrl:'',
    });
    
    async function downloadPokemons(){




        // setIsLoading(true);
        // Instead of above line we can use the below line
       
   
  
            // Iterating over the array of pokemons and using their url to create an array of promises that will download those  20 pokemons

            setPokemonListState({...pokemonListState , isLoading:true});





            const response=await axios.get(pokemonListState.pokedexUrl); // this downloads list of 20 pokemons
            const pokemonResults = response.data.results; // We get the array of pokemons from result
        
        
            //
            console.log("all data")
            console.log(response.data);
            setPokemonListState((state)=>({
                ...state,
                NextUrl : response.data.next,
                PrevUrl:response.data.previous
            }));


            const pokemonResultPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url))




            // passing that promises array to  axios.all
            const pokemonData =await axios.all(pokemonResultPromise); // array of 20 pokemon detailed data


            console.log("All 20 data")
            console.log(pokemonData);


            // Iterate on the data of each pokemon and extract , id name , image and type
            const PokeListResult = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;


                return {
                    id:pokemon.id,
                    name : pokemon.name ,
                    image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.other.dream_world.front_shiny,
                    types:pokemon.types
            
                }
            }) ;
            console.log(PokeListResult);
            // setPokemonList(PokeListResult);
            setPokemonListState((state)=>({
                ...state,
                pokemonList : PokeListResult,
                isLoading:false
        
            }));
}

    // setIsLoading(false);


    useEffect(()=>{
        downloadPokemons();
    },[pokemonListState.pokedexUrl]);


    return[pokemonListState,setPokemonListState]

}

export default usePokemonList;