import * as API from '../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

//import toast
/*//import axios from 'axios';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

axios.defaults.baseURL = 'https://project-team-6-backend.onrender.com';
export const register = createAsyncThunk('auth/register', async (credentials, {rejectWithValue}) => {
  try {
    const response = await axios.post('api/users/register', credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});/*/

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await API.registration(credentials);
      return response;
    } catch (error) {
      //toast.error(error.response.data.message)
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await API.logIn(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await API.logOut();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const updateUser = createAsyncThunk(
    'users/update',
    async(credentials, {rejectWithValue}) => {
        try {
          const response = await API.editUser(credentials)
          return response;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    API.setAuthHeader(token);
    try {
      const response = await API.refresh();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, { rejectWithValue }) => {
    try {
      const response = await API.deleteBoard(boardId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.addBoard(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  'boards/editBoard',
  async (boardId, data, { rejectWithValue }) => {
    try {
      const response = await API.editBoard(boardId, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
