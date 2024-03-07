import { createSlice } from '@reduxjs/toolkit';

export const boardsSlice = createSlice({
    name: 'boards',
    initialState: {
        boardsList: [],
        board: {},
        background: null,
        error: null,
        isLoading: false,
    },
    // extraReducers: builder => {
    //     builder
    //         .addCase()
    // },
 
});
