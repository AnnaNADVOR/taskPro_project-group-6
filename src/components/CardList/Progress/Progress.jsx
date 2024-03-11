import React from 'react';
import css from './Progress.module.css';
import sprite from 'assets/images/sprite.svg';
import { useEffect } from "react"; 
// import { selectAllColumns } from "../../../redux/columns/selectors";
import { useDispatch, useSelector } from 'react-redux';
import { replaceTask } from '../../../redux/boards/operation';

import { selecColumnList } from "../../../redux/boards/selectors";

const Progress = ({closeMenu, columnId, currentTask}) => {
  const columnsList = useSelector(selecColumnList)
  // const columnList = [
  //   { id: "27397520852ogegldknvdvdnlk", title: "To to" },
  //   { id: "327530janalal", title: "Done" },
  //   {id: "gjfjfkfelkfelkfwekwfelk1", title: "Cuttent"}
  // ]

  const columnsWithoutCurrent = columnsList.filter(column => column._id !== columnId)

  useEffect(() => {
    const onEscClick = (event) => {
      if (event.code === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", onEscClick);
    return () => {
      window.removeEventListener('keydown', onEscClick);
    };  
  }, [closeMenu]);
 const dispatch = useDispatch()
  const handleClick = (newColumnId) => {
    console.log("handleClick", currentTask._id, columnId)
    dispatch(replaceTask({
      taskId: currentTask._id,
      columnId: newColumnId,
      currentColumnId: columnId
    }))
// dispatch(replaceTask(currentTask._id, columnId))
  }
  
  return (
    <div className={css.popupMenu}>
      <ul className={css.progressList}>
        {columnsWithoutCurrent.map(column => <li key={column.title}>
          <button className={css.progressListBtn} onClick={() => handleClick(column._id)} type="button">
            {column.title}
            <svg className={css.progressBtnSvg}>
                <use href={`${sprite}#remove-16`}></use>
            </svg>            
          </button>
        </li>)}         
      </ul>
    </div>
  )
};

export default Progress;
