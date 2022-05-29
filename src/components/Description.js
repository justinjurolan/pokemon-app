import { useParams } from 'react-router-dom';
import Pokemons from './Pokemons';

const Description = () => {
  const { name } = useParams();

  return (
    <div>
      {Pokemons.pokemons
        .filter((pokemon) => pokemon.name === name)
        .map((poke) => {
          return (
            <div key={poke.ntnlnum} className="Nav-Btn">
              <p>{poke.ntnlnum}</p>
              <h1>{poke.name}</h1>
              <img src={poke.img} width="120" alt={poke.ntnlnum} />
              <p className="description__border">{poke.types}</p>
              <p>{poke.Description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Description;
