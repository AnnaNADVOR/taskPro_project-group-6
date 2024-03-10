import React from 'react';
import css from './Progress.module.css';
import sprite from 'assets/images/sprite.svg';
// import { useEffect } from "react"; 

const Progress = () => {

  const columnList = [
    { id: "27397520852ogegldknvdvdnlk", title: "To to" },
    { id: "327530janalal", title: "Done" },
    {id: "gjfjfkfelkfelkfwekwfelk1", title: "Cuttent"}
  ]
  return (

    <div className={css.popupMenu } onClick={onPopupClick}>
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
