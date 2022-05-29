import Pokemons from './Pokemons';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div>
        {Pokemons.types.map((type) => {
          return (
            <Link to={'/Types/' + type.name} key={type.name}>
              <button className="btn-style">{type.name}</button>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Nav;
