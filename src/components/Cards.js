import Pokemons from './Pokemons';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Cards = () => {
  const { type } = useParams();

  return (
    <>
      <div className="Poke-Cards">
        {Pokemons.pokemons
          .filter((types) => types.types[0] === type || types.types[1] === type)
          .map((pokemon) => {
            return (
              <Link
                to={'/Types/' + pokemon.types[0] + '/' + pokemon.name}
                className="Poke-Cards"
                key={pokemon.ntnlnum}
              >
                <div className="pokemon-cards">
                  <p>{pokemon.ntnlnum}</p>
                  <h1>{pokemon.name}</h1>
                  <img src={pokemon.img} width="80" alt={pokemon.ntnlnum} />
                  <p className="border__">{pokemon.types}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Cards;
