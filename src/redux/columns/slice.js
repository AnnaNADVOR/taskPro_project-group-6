import { createSlice } from "@reduxjs/toolkit";

export const columnsSlice = createSlice({
    name: 'columns',
    initialState: {
        columnsList: [],
        error: null,
        isLoading: false,
    },
    // extraReducers: builder => {
    //     builder
    //     .addCase()
    // },
 
});
