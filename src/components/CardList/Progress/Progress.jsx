import React from 'react';
import css from './Progress.module.css';
import sprite from 'assets/images/sprite.svg';
import { useEffect } from "react"; 
import { selectAllColumns } from "../../../redux/columns/selectors";
import { useSelector } from 'react-redux';

const Progress = ({closeMenu}) => {
  const columnList = useSelector(selectAllColumns);
  
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
  
  return (
    <div className={css.popupMenu}>
      <ul className={css.progressList}>
        {columnList.map(column => <li key={column.title}>
          <button className={css.progressListBtn}>
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
