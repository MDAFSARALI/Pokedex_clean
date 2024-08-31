import { Link } from 'react-router-dom';
import '../Pokemon/Pokemon.css'
function Pokemon({name , image ,id }){
    return(
        <div className='pokemon'>
            <Link to={`pokemon/${id}`}>
            <div><h2 className='pokemon-name'>{name}</h2></div>
            <div>
            <img src={image} alt={name} className='pokemon-image'/>
            </div>
            </Link>
        </div>
    )


}

export default Pokemon;
