
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    addCard: (state, _action: PayloadAction<{ code: string }>) => {
      state.isLoading = true;
    },
  },
});

export const { 
    fetch,
    addCard
} = cardsSlices.actions;
export default cardsSlices.reducer;