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
  updateUser,
} from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      theme: null,
      avatarURL: '',
      background: '',
    },
    token: null,
    isLoadingRegister: false,
    isLoadingLogin: false,
    isLoadingLogout: false,
    isLoggedIn: false,
    isRefreshing: false,    
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoadingRegister = false;
        state.isLoggedIn = true;
        state.user.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoadingLogin = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.token = action.payload.user.token;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.isLoadingLogout = false;
        state.isLoggedIn = false;
        state.user.user = { name: null, email: null };
        state.token = null;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, handleRejected)
      .addCase(updateUser.rejected, handleRejected)
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        const { name, email, theme, avatarURL } = action.payload.user;
        state.user.user.name = name;
        state.user.user.email = email;
        state.user.user.theme = theme;
        state.user.user.avatarURL = avatarURL;
        state.isLoading = false;
      })
      .addCase(deleteBoard.pending, handlePending)
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.user.user.boards = state.user.user.boards.filter(
          board => board._id !== action.payload.id
        );
      })
      .addCase(deleteBoard.rejected, handleRejected)
      .addCase(addBoard.pending, handlePending)
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.user.boards.push(action.payload);
      })
      .addCase(addBoard.rejected, handleRejected)
      .addCase(editBoard.pending, handlePending)
      .addCase(editBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.user.user.boards.findIndex(
          board => board._id === action.payload._id
        );
        state.user.user.boards[index].title = action.payload.title;
        state.user.user.boards[index].icon = action.payload.icon;
        state.user.user.boards[index].background = action.payload.background;
        state.isUpdateBoard = true; 
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
