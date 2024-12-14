import { ProfessionalPosition } from '@/interfaces/common';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface PositionsState {
  list: ProfessionalPosition[];
  isLoading: boolean;
}

const initialState: PositionsState = { 
  list: [],
  isLoading: false
}

const positionsSlices = createSlice({
  name: 'positions',
  initialState,
  reducers: {
    fetch(state){
        state.isLoading = true
    },
    fetchSuccessfull(state, action: PayloadAction<ProfessionalPosition[]>){
        state.isLoading = false
        state.list = action.payload
    },
  },
});

export const { 
    fetch,
    fetchSuccessfull
} = positionsSlices.actions;
export default positionsSlices.reducer;