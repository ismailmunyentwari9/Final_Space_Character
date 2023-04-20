import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../Redux/finalspace/finalspaceSlice';
import './home.css';

const Home = ({ handleCharacterClick }) => {
  const dispatch = useDispatch();
  const { characters, status, error } = useSelector(
    (state) => state.characters,
  );
  const [searchCharacter, setCharacter] = useState(characters);
  const [char, setChar] = useState('');

  const handleSearch = (e) => {
    setChar(e.target.value);
    setCharacter(characters.filter((character) => character.name.includes(char)));
  };

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  useEffect(() => {
    setCharacter(characters);
  }, [characters]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>

        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="container cards-holder">
      <h1>Final Space Characters</h1>
      <input type="text" name="" id="" placeholder="Search" onChange={handleSearch} value={char} />
      <div className="row">
        {searchCharacter.map((character) => (
          <div className="col-6 character-card" key={character.id}>
            <Link to="/details" onClick={() => handleCharacterClick(character)}>

              <ul>
                <li><img src={character.img_url} alt="" /></li>
                <li><i className="fa fa-arrow-right" /></li>
              </ul>
              <span className="character-name">{character.name}</span>

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  handleCharacterClick: PropTypes.func.isRequired,
};

export default Home;
