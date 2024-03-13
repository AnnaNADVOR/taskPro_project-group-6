import { createSlice } from '@reduxjs/toolkit';
import { requestHelp } from './operation.js';

export const helpSlice = createSlice({
  name: 'help',
  initialState: {
    email: '',
    comment: '',
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(requestHelp.pending, state => {
        state.isLoading = true;
      })
      .addCase(requestHelp.fulfilled, (state, action) => {
        state.email = action.meta.arg.email;
        state.comment = action.meta.arg.comment;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(requestHelp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const requestHelpReducer = helpSlice.reducer;
