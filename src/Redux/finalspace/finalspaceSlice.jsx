import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const response = await fetch('https://finalspaceapi.com/api/v0/character');
    if (!response.ok) {
      throw new Error('Failed to fetch characters.');
    }
    const data = await response.json();
    return data;
  },
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchCharacters.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        characters: action.payload,
      }))
      .addCase(fetchCharacters.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },

});

export default charactersSlice.reducer;
