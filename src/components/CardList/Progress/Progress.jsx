import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { replaceTask } from '../../../redux/boards/operation';
import { selecColumnList } from '../../../redux/boards/selectors';
import sprite from 'assets/images/sprite.svg';

import css from './Progress.module.css';

const Progress = ({ closeMenu, columnId, currentTask }) => {
  const columnsList = useSelector(selecColumnList);
  const columnsWithoutCurrent = columnsList.filter(
    column => column._id !== columnId
  );

  useEffect(() => {
    const onEscClick = event => {
      if (event.code === 'Escape') {
        closeMenu();
      }
    };
    window.addEventListener('keydown', onEscClick);
    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [closeMenu]);

  const dispatch = useDispatch();
  const handleClick = newColumnId => {
    dispatch(
      replaceTask({
        taskId: currentTask._id,
        columnId: newColumnId,
        currentColumnId: columnId,
      })
    );
  };

  return (
    <div className={css.popupMenu}>
      <ul className={css.progressList}>
        {columnsWithoutCurrent.map(column => (
          <li key={column.title}>
            <button
              className={css.progressListBtn}
              onClick={() => handleClick(column._id)}
              type="button"
            >
              {column.title}
              <svg className={css.progressBtnSvg}>
                <use href={`${sprite}#remove-16`}></use>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progress;
