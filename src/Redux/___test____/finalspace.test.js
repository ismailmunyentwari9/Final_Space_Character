import CharactersReducer, { fetchCharacters } from '../finalspace/finalspaceSlice';

describe('charactersSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      characters: [],
      status: 'idle',
      error: null,
    };
  });

  it('sets the status to "loading" when fetchCharacters.pending is dispatched', () => {
    const action = { type: fetchCharacters.pending.type };
    const newState = CharactersReducer(initialState, action);
    expect(newState.status).toEqual('loading');
  });

  it('sets the status to "failed" and updates the error message when fetchCharacters.rejected is dispatched', () => {
    const errorMessage = 'Failed to fetch characters.';
    const action = { type: fetchCharacters.rejected.type, error: { message: errorMessage } };
    const newState = CharactersReducer(initialState, action);
    expect(newState.status).toEqual('failed');
    expect(newState.error).toEqual(errorMessage);
  });
});
