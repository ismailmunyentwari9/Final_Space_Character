import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; // add this import
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import CharacterDetails from '../../components/characterdetails';
import store from '../../store';

it('matches snapshot', () => {
  const mockCharacter = {
    name: 'John Doe',
    gender: 'Male',
    species: 'Human',
  };

  const tree = renderer.create(
    <Router>
      {/* wrap Provider with Router */}
      <Provider store={store}>
        <CharacterDetails selectedCharacter={mockCharacter} />
      </Provider>
    </Router>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
