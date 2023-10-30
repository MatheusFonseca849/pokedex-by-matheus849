import './style.js'
import { v4 as uuid } from 'uuid'

export const PokeCard = ({name, url}) => {

    return (

        <li key={uuid()}>

                <span>{url.slice(34, -1)}</span>
                <h2>{name}</h2>

              </li>

    )

}