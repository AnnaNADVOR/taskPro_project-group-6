import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { priority: '' },
  reducers: {
    setFilter: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
