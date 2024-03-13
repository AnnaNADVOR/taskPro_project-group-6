import * as API from '../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await API.registration(credentials);
      toast.success('Welcome in TaskPro App!')
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await API.logIn(credentials);
      const promises = response.user.boards.map(
        board =>
          new Promise(function (resolve, reject) {
            const fullBoard = API.getBoardById(board._id);
            resolve(fullBoard);
          })
      );
      response.user.boards = await Promise.all(promises);
      return response;
    } catch (error) {
      toast.error('Something went wrong');
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
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await API.editUser(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
      const promises = response.user.boards.map(
        board =>
          new Promise(function (resolve, reject) {
            const fullBoard = API.getBoardById(board._id);
            resolve(fullBoard);
          })
      );
      response.user.boards = await Promise.all(promises);
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
  async ({ boardId, title, background, icon }, { rejectWithValue }) => {
    try {
      const response = await API.editBoard(boardId, {
        title,
        background,
        icon,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
