
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface PositionsState {
 
  isLoading: boolean;
}

const initialState: PositionsState = { 
  isLoading: false
}

const positionsSlices = createSlice({
  name: 'positions',
  initialState,
  reducers: {
    fetch(state){
        state.isLoading = true
    },
  },
});

export const { 
    fetch,
} = positionsSlices.actions;
export default positionsSlices.reducer;