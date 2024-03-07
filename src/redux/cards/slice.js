import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cardsList: [],
        error: null,
        isLoading: false,
    },
    // extraReducers: builder => {
    //     builder
    //         .addCase()
    // },
 
});
