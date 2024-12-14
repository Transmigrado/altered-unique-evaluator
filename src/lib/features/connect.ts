
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConnectState {
  isLoading: boolean;
}

const initialState: ConnectState = { 
  isLoading: false
}

const connectSlices = createSlice({
  name: 'connect',
  initialState,
  reducers: {
    fetch(state){
        state.isLoading = true
    },
    signIn: (state, _action: PayloadAction<{ email: string; password: string; }>) => {
      state.isLoading = true;
    },
    createAccount: (state, _action: PayloadAction<{ email: string; password: string; name: string; }>) => {
      state.isLoading = true;
    }
  },
});

export const { 
    fetch,
    createAccount,
    signIn
} = connectSlices.actions;
export default connectSlices.reducer;