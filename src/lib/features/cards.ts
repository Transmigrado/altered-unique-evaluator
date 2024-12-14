
import { createSlice } from '@reduxjs/toolkit';

interface CardsState {
 
  isLoading: boolean;
}

const initialState: CardsState = { 
  isLoading: false
}

const cardsSlices = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetch(state){
        state.isLoading = true
    },
  },
});

export const { 
    fetch,
} = cardsSlices.actions;
export default cardsSlices.reducer;