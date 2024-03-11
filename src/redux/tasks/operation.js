import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tasksAPI from "../services/api";

export const addTask = createAsyncThunk(
  "tasks/addTasks",
  async ({ column, title, description, priority, deadline }, { rejectWithValue }) => {
    try {
      const response = await tasksAPI.addTask({ column, title, description, priority, deadline });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTask = createAsyncThunk(
  "tasks/editTasks",
  async ({ _id, column, title, description, priority, deadline }, { rejectWithValue }) => {
    try {
      const response = await tasksAPI.editTaskById(_id, { column, title, description, priority, deadline });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, { rejectWithValue }) => {
    try {
      const deleteContact = await tasksAPI.deleteTaskById(taskId); 
      return deleteContact;
    } 
    catch (error) {
      return rejectWithValue(error.message);
    }
  }
)