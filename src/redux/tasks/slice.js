import { createSlice } from "@reduxjs/toolkit";
import { addTask, editTask, deleteTask } from "./operation";


export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasksList: [],
        error: null,
        isLoading: false,
        deleteTaskId: null
        // isLoadingAdd: false,
    },
    extraReducers: builder => {
        builder
            .addCase(addTask.pending, state => {
                state.isLoading = true;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.tasksList.push(action.payload);                
            })
            .addCase(addTask.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(editTask.pending, state => {
                state.isLoading = true;
            })
            .addCase(editTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const taskIndex = state.tasksList.findIndex(task => task._id === action.payload._id);
                console.log(taskIndex)
                state.tasksList[taskIndex] = action.payload;  
                // const editedTask = state.tasksList.map((card) =>
                //     card._id === action.payload._id ? action.payload : card
                // );
                // state.tasksList = editedTask;
            })
            .addCase(editTask.rejected, (state, action) => {
                
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteTask.pending, (state, action) => {
                state.isLoading = true;
                state.deletetaskId = action.meta.arg;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.tasksList = state.tasksList.filter(task => task._id !== action.payload._id);
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })      
            
    },
 
});

