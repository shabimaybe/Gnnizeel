import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
