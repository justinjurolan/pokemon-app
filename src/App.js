import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Cards from './components/Cards';
import Description from './components/Description';
import Pokeball from './components/assets/pokeball.png';

const App = () => {
  return (
    <main>
      <Link to="/" className="Header-Title">
        <h1 className="Header">
          Pokedex
          <span>
            <img
              src={Pokeball}
              alt="pokeball"
              width="40px"
              className="pokeball"
            ></img>
          </span>
        </h1>
      </Link>
      <nav className="Nav-Btn">
        <Nav />
      </nav>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/Types/:type" element={<Cards />} />
        <Route path="/Types/:type/:name" element={<Description />} />
      </Routes>
    </main>
  );
};

export default App;
