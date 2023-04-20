import charactersSlice, { fetchCharacters } from '../finalspace/finalspaceSlice';

describe('charactersSlice', () => {
  describe('fetchCharacters', () => {
    test('action creator returns a function', () => {
      const result = fetchCharacters();
      expect(typeof result).toBe('function');
    });

    test('dispatches correct actions when fetch fails', async () => {
      jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        ok: false,
        json: () => Promise.resolve(),
      }));
    });
  });

  describe('reducer', () => {
    test('handles fetchCharacters.pending action correctly', () => {
      const initialState = { characters: [], status: 'idle', error: null };
      const action = { type: fetchCharacters.pending.type };
      const state = charactersSlice(initialState, action);
      const expectedState = { characters: [], status: 'loading', error: null };
      expect(state).toEqual(expectedState);
    });

    test('handles fetchCharacters.fulfilled action correctly', () => {
      const initialState = { characters: [], status: 'loading', error: null };
      const payload = [{ id: 1, name: 'Gary Goodspeed' }];
      const action = { type: fetchCharacters.fulfilled.type, payload };
      const state = charactersSlice(initialState, action);
      const expectedState = { characters: payload, status: 'succeeded', error: null };
      expect(state).toEqual(expectedState);
    });

    test('handles fetchCharacters.rejected action correctly', () => {
      const initialState = { characters: [], status: 'loading', error: null };
      const error = { message: 'Failed to fetch characters.' };
      const action = { type: fetchCharacters.rejected.type, error };
      const state = charactersSlice(initialState, action);
      const expectedState = { characters: [], status: 'failed', error: error.message };
      expect(state).toEqual(expectedState);
    });
  });
});
