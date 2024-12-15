
import { CardDbResponse } from '@/interfaces/card';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardsState {
  myCards: CardDbResponse[]
  isLoading: boolean;
}

const initialState: CardsState = { 
  myCards: [],
  isLoading: false
}

const cardsSlices = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetch(state){
        state.isLoading = true
    },
    fetchSuccessfull(state, action:  PayloadAction<{ list: CardDbResponse[] }>){
      state.myCards = action.payload.list
      state.isLoading = false
    },
    addCard: (state, _action: PayloadAction<{ code: string }>) => {
      state.isLoading = true;
    },
  },
});

export const { 
    fetch,
    fetchSuccessfull,
    addCard
} = cardsSlices.actions;
export default cardsSlices.reducer;