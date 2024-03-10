import { createSelector } from "@reduxjs/toolkit";
import { selectBoard } from "../boards/selectors";
export const selecColumnList = state => state.columns.columnsList;
export const selectAllColumns = createSelector([selectBoard, selecColumnList], (columnsList, board) => {
    if (!columnsList) {
        return board.columns.filter(item => !!item)
    }
    const allColumns = columnsList.columns.concat(board.columns);
    return allColumns.filter(item => !!item); 
})

