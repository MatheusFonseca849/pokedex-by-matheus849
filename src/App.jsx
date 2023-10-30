import { useEffect, useState } from "react"
import { api } from "./services/api"
import { Header } from "./components/Header"
import { PokemonList } from "./components/PokemonList"

function App() {

  const [pokemonDatabase, setPokemonDatabase] = useState([])
  const [loadingDatabase, setLoadingDatabase] = useState(false)

  const [pokemonRequest, setPokemnonRequest] = useState({})

    useEffect(() => {

        async function requestPokemonList(){
            try {
                const response = await api.get('pokemon', {
                    params: {
                        limit: 30,
                        offset: 0
                    }
                    
                })
                console.log(response)
                
                setPokemnonRequest(response.data)
                
              } catch (error) {
                console.log(error)
              }
              
            }
            requestPokemonList()
          }, [])
          
          console.log(pokemonRequest)
  useEffect(() => {

    async function loadPokemonDatabase() {
      
      setLoadingDatabase(true)

      try {

        const response = await api.get('pokemon', {

          params: {

            limit: 10000,
            offset: 0

          }

        })

        // console.log(response.data)
        setPokemonDatabase(response.data.results)
        return response

      } catch (e) {

        console.log(e)

      } finally {

        setLoadingDatabase(false)

      }

    }

    loadPokemonDatabase()

  }, [])




  return (
    <div className="App">
      {loadingDatabase ? (
        <h1>CARREGANDO</h1>
      ) : (

<main>

        <Header/>
        <PokemonList pokemonDatabase={pokemonDatabase} setPokemonDatabase={setPokemonDatabase} pokemonRequest={pokemonRequest} setPokemnonRequest={setPokemnonRequest}/>
</main>

      )}
    </div>
  )
}

export default App