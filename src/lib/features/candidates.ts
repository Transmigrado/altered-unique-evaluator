import { Candidate, FormCandidate } from '@/interfaces/common';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CandidatesState {
  list: Candidate[];
  countBatch: number;
  progressBatch: number;
  isLoadingBatch: boolean;
}

const initialState: CandidatesState = { 
  list: [],
  countBatch: 1,
  progressBatch: 0,
  isLoadingBatch: false
}

const candidatesSlices = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    batchCreate(state, action: PayloadAction<FormCandidate[]>){
      state.isLoadingBatch = true;
      state.progressBatch = 0;
      state.countBatch = action.payload.length;
    },
    create(_state, _action: PayloadAction<FormCandidate>){},
    createSuccessfull(state, action: PayloadAction<Candidate>){
      state.list = [...state.list, action.payload]
      
      if(state.isLoadingBatch){
        state.progressBatch = state.progressBatch + 1;
      }

      if(state.progressBatch >= state.countBatch){
        state.countBatch = 1
        state.progressBatch = 0
        state.isLoadingBatch = false
      }

    }
  },
});

export const { 
  batchCreate,
  create,
  createSuccessfull
} = candidatesSlices.actions;
export default candidatesSlices.reducer;