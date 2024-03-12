const { createSlice } = require('@reduxjs/toolkit');
const { updateUser } = require('./operation');
import { requestHelp } from './operation.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: null,
      email: null,
      theme: null,
      avatarURL: '',
    },
  },

  extraReducers: builder => {
    builder
      .addCase(updateUser.rejected, handleRejected)
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log(action.payload);
        const { name, email, password, avatarURL } = action.payload;
        state.user.name = name;
        state.user.email = email;
        state.user.password = password;
        state.user.avatarURL = avatarURL;
        state.isLoading = false;
      });
  },
});

export const userReducer = userSlice.reducer;

export const helpSlice = createSlice({
  name: 'help',
  initialState: {
    email: '',
    comment: '',
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(requestHelp.pending, state => {
        state.isLoading = true;
      })
      .addCase(requestHelp.fulfilled, (state, { payload }) => {
        state.email = payload;
        state.comment = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(requestHelp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const requestHelpReducer = helpSlice.reducer;
