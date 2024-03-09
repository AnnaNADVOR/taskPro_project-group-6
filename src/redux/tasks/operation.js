import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tasksAPI from "../services/api";

export const addTask = createAsyncThunk(
  "tasks/addTasks",
  async ({ columnId, title, description, priority, deadline }, { rejectWithValue }) => {
    try {
      const response = await tasksAPI.addTask({ columnId, title, description, priority, deadline });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const editTask = createAsyncThunk(
//   "tasks/editTask",
//   async({taskId, })
// )