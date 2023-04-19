import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useState } from 'react';
import Home from './components/home';
import CharacterDetails from './components/characterdetails';
import store from './store';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <Provider store={store}>
      <div className="body">

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home handleCharacterClick={handleCharacterClick} />} />
            <Route path="/details" element={<CharacterDetails selectedCharacter={selectedCharacter} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
