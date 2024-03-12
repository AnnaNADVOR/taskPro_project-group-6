import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  addBoard,
  editBoard,
  deleteBoard,
} from './operation';

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
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoadingRegister = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoadingRegister = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.user.token;
      })
      .addCase(register.rejected, state => {
        state.isLoadingRegister = false;
      })

      .addCase(logIn.pending, state => {
        state.isLoadingLogin = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoadingLogin = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.token = action.payload.user.token;
      })
      .addCase(logIn.rejected, state => {
        state.isLoadingLogin = false;
      })

      .addCase(logOut.pending, state => {
        state.isLoadingLogout = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoadingLogout = false;
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
      })
      .addCase(logOut.rejected, state => {
        state.isLoadingLogout = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

      .addCase(deleteBoard.pending, state => {
        //  state.isRefreshing = true;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.user.user.boards = state.user.user.boards.filter(
          board => board._id !== action.payload.id
        );
      })
      .addCase(deleteBoard.rejected, state => {
        //  state.isRefreshing = false;
      })
      .addCase(addBoard.pending, state => {})
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.user.boards.push(action.payload);
      })
      .addCase(addBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editBoard.pending, state => {
        state.isLoading = true;
      })
      .addCase(editBoard.fulfilled, (state, action) => {
        state.isLoading = false;
          state.error = null;
          console.log(action);
        const index = state.user.user.boards.findIndex(
          board => board._id === action.payload._id
        );
          state.user.user.boards[index].title = action.payload.title;
          state.user.user.boards[index].icon = action.payload.icon;
           state.user.user.boards[index].background =
             action.payload.background;
      })
      .addCase(editBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
