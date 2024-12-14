import { Area } from '@/interfaces/common';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AreasState {
  list: Area[];
  isLoading: boolean;
}

const initialState: AreasState = { 
  list: [],
  isLoading: false
}

const areasSlices = createSlice({
  name: 'areas',
  initialState,
  reducers: {
    fetch(state){
        state.isLoading = true
    },
    fetchSuccessfull(state, action: PayloadAction<Area[]>){
        state.isLoading = false
        state.list = action.payload
    },
  },
});

export const { 
    fetch,
    fetchSuccessfull
} = areasSlices.actions;
export default areasSlices.reducer;