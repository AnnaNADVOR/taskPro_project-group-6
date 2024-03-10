import { createSlice } from "@reduxjs/toolkit";
import { addColumn } from "../columns/operation";

export const columnsSlice = createSlice({
    name: 'columns',
    initialState: {
        columnsList: [],
        error: null,
        isLoading: false,
    },
    extraReducers: builder => {
        builder
        .addCase(addColumn.pending, state => {
            state.isLoading = true;
        })
        .addCase(addColumn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.columnsList.push(action.payload);
        })
    },
 
});
