import { createSlice } from '@reduxjs/toolkit';
import { addBoard } from './operation';

export const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    boardsList: [],
    board: {},
    background: null,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addBoard.pending, state => {
        state.isLoading = true;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boardsList.push(action.payload);
      })
      .addCase(addBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const boardsReducer = boardsSlice.reducer;
