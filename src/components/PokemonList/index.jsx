import './style.js'
import { v4 as uuid } from 'uuid';
import { PokeCard } from '../PokeCard'
import { api } from "../../services/api.js";
import { useEffect, useState } from "react";


export const PokemonList = ({pokemonDatabase}) => {

    // const [pokemonRequest, setPokemnonRequest] = useState({})

    // useEffect(() => {

    //     async function requestPokemonList(){
    //         try {
    //             const response = await api.get('pokemon', {
    //                 params: {
    //                     limit: 30,
    //                     offset: 0
    //                 }
                    
    //             })
            
                
    //             setPokemnonRequest(response.data)
                
    //         } catch (error) {
    //             console.log(error)
    //         }
            
    //     }
    //     requestPokemonList()
    // }, [])
    
    return(

        <ul>
            {
                
                pokemonDatabase.map((pokemon) => (
                    <PokeCard key={uuid()} name={pokemon.name} url={pokemon.url}/>
                ))

            }
        </ul>

    )

}