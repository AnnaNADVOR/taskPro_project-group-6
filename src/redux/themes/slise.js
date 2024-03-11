import { createSlice } from '@reduxjs/toolkit';
import { updateTheme } from './operation';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: localStorage.getItem('selectedTheme') || 'dark',
    loading: false,
    error: null,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updateTheme.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTheme.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.theme = action.payload;
      })
      .addCase(updateTheme.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const themeReducer = themeSlice.reducer;
