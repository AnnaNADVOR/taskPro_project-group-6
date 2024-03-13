import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../services/api';

export const getBoard = createAsyncThunk(
  'boards/getBoard',
  async (boardId, { rejectWithValue }) => {
    try {
      const response = await API.getBoardById(boardId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//-------------Column operation ------------------//
export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.addColumn(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/editColumn',
  async ({ columnId, newColumnData }, { rejectWithValue }) => {
    try {
      const response = await API.editColumn(columnId, newColumnData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (columnId, { rejectWithValue }) => {
    try {
      const response = await API.deleteColumnById(columnId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//-------------Tasks operation ------------------//
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (
    { column, title, description, priority, deadline },
    { rejectWithValue }
  ) => {
    try {
      const response = await API.addTask({
        column,
        title,
        description,
        priority,
        deadline,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, { rejectWithValue }) => {
    try {
      const response = await API.deleteTaskById(taskId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (
    { _id, column, title, description, priority, deadline },
    { rejectWithValue }
  ) => {
    try {
      const response = await API.editTaskById(_id, {
        title,
        description,
        priority,
        deadline,
      });
      response.columnId = column;
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const replaceTask = createAsyncThunk(
  'tasks/replaceTask',
  async ({ taskId, columnId, currentColumnId }, { rejectWithValue }) => {
    try {
      const response = await API.replaceTask(taskId, columnId);
      response.taskId = taskId;
      response.columnId = columnId;
      response.currentColumnId = currentColumnId;
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
