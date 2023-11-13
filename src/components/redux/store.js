import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';
import dealsSlice from './DealSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    deals: dealsSlice
  },
});

export default store;
