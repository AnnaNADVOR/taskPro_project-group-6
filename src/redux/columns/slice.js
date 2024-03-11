import { createSlice } from "@reduxjs/toolkit";
import { addColumn, deleteCard, editCardOnColumn  } from "../columns/operation";

export const columnsSlice = createSlice({
    name: 'columns',
    initialState: {
        columnsList: [],
        error: null,
        isLoading: false,
    },
    extraReducers: builder => {
        builder
        .addCase(addColumn.pending, state => {
            state.isLoading = true;
        })
        .addCase(addColumn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.columnsList.push(action.payload);
        })
            
    //-------------Tasks case ------------------//
        .addCase(deleteCard.fulfilled, (state, action) => {
            let taskId = action.payload; 
            state.columnsList = state.columnsList.map((column) => {        
             return {
                ...column,
                tasks: column.tasks.filter(task => task._id !== taskId)
                }
            })
        })
        .addCase(editCardOnColumn.fulfilled, (state, action) => {
            console.log("payload in columnSlice", action.payload)
            //     const { column, _id, title, description, priority, deadline } = action.payload;
            // let taskId = action.payload._id;
            // const index = state.columnsList.findIndex(column => column._id === action.payload.column);
            // const indexTask = state.columnsList[index].tasks.findIndex(el => el._id === taskId);
            // state.columnsList[index].tasks[indexTask] = {
            //     ...state.columnsList[index].tasks[indexTask],
            //     title,
            //     description,
            //     deadline,

                
            // };
        }
              
        )
         
           
        
        
    },
 
});
