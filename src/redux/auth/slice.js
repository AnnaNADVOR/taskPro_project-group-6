import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoadingRegister: false,
        isLoadingLogin: false,
        isLoadingLogout: false,
        isLoggedIn: false,
        isRefreshing: false,
    },
    // extraReducers: builder => {
    //     builder.addCase()
    // },
});

const persistConfig = {
    key: 'auth', 
    storage,
    whitelist: ['token'],
} 

export const authReducer = persistReducer(persistConfig, authSlice.reducer); 