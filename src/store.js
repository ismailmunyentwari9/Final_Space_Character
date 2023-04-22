import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './Redux/finalspace/finalspaceSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export default store;
