import { createSlice } from '@reduxjs/toolkit';

import {
  // addBoard,
  getBoard,
  // editBoard,
  deleteTask,
  addColumn,
  addTask,
  editTask,
  replaceTask,
  deleteColumn,
  editColumn,

} from './operation';


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


export const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
     board: [],
    background: null,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // .addCase(addBoard.pending, state => {
      //   state.isLoading = true;
      // })
      // .addCase(addBoard.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.boardList.push(action.payload);
      // })
      // .addCase(addBoard.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      .addCase(getBoard.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board = action.payload;
      })
      .addCase(getBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // .addCase(deleteBoard.pending, handlePending)
      // // .addCase(deleteBoard.fulfilled, (state, action) => {
      // //   state.isLoading = false;
      // //   state.error = null;
      // //   const index = state.boardList.findIndex(
      // //     board => board._id === action.payload._id
      // //   );
      // //   state.boardList.splice(index, 1);
      // // })
      // .addCase(deleteBoard.rejected, handleRejected)
      // .addCase(editBoard.pending, handlePending)
      // .addCase(editBoard.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   const index = state.boardList.findIndex(
      //     el => el._id === action.payload._id
      //   );
      //   state.boardList[index] = action.payload;
      // })
      // .addCase(editBoard.rejected, handleRejected)

      //-------------Columns case ------------------//  
      
      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board.columns.push(action.payload);
      })
      .addCase(addColumn.rejected, handleRejected)
      .addCase(deleteColumn.fulfilled, (state, action) => {
       
        state.isLoading = false;
        state.error = null;
        state.board.columns = state.board.columns.filter(
              column => column._id !== action.payload.id
            );
      })
       .addCase(editColumn.fulfilled, (state, action) => {
            state.isLoading = false;
         state.error = null;
          
            const index = state.board.columns.findIndex(
              column => column._id === action.payload._id
            );
            state.board.columns[index].title = action.payload.title;
          })
     
      //-------------Tasks case ------------------//

       .addCase(addTask.pending, handlePending)
            .addCase(addTask.fulfilled, (state, action) => {
                state.isLoading = false;
              state.error = null;
              let columnId = action.payload.columnId 
              
              state.board.columns = state.board.columns.map(column => {
                if (column._id === columnId) {
                  column.tasks.push(action.payload)
                }
                return column

              })
                      
            })
            .addCase(addTask.rejected, handleRejected)
       
      .addCase(deleteTask.fulfilled, (state, action) => {
        let taskId = action.payload._id 
        state.board.columns = state.board.columns.map((column) => {
          return {
            ...column,
            tasks: column.tasks.filter(task => task._id !== taskId)
          }
        })
      })

      .addCase(editTask.pending, handlePending)
      .addCase(editTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.board.columns = state.board.columns.map(column => {
          if (column._id === action.payload.columnId) {
            column.tasks = column.tasks.map(task => {
              if (task._id === action.payload._id) {
                return action.payload
              }

              return task;
            })
          }

          return column
        })
                
      })
      .addCase(editTask.rejected, handleRejected)
    

      .addCase(replaceTask.pending, handlePending)
      .addCase(replaceTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log("boardsSlice:replaceTask:action", action)

        const columnIdx = state.board.columns.findIndex(column => column._id === action.payload.columnId)
        const currentColumnIdx = state.board.columns.findIndex(column => column._id === action.payload.currentColumnId)
        const currentCardIdx = state.board.columns[currentColumnIdx].tasks.findIndex(task => task._id === action.payload.taskId)
        const currentCard = state.board.columns[currentColumnIdx].tasks[currentCardIdx]

        currentCard.columnId = action.payload.columnId

        state.board.columns[columnIdx].tasks.push(currentCard)
        state.board.columns[currentColumnIdx].tasks = state.board.columns[currentColumnIdx].tasks.filter(task => task._id !== action.payload.taskId)
             
      })
      .addCase(replaceTask.rejected, handleRejected)
    
    }

});

// export const boardsReducer = boardsSlice.reducer;