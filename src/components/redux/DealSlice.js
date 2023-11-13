
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value:[]
}
const dealsSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    addDeal: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { addDeal } = dealsSlice.actions;
export default dealsSlice.reducer;

