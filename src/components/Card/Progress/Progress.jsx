import React from 'react';
import css from './Progress.module.css';
import sprite from 'assets/images/sprite.svg';

const Progress = ({ showMenu, handleProgressChange, toggleMenu }) => {
  return (
    showMenu && (
      <div className={css.popupMenu}>
        <ul className={css.progressList}>
          <li>
            <button
              className={css.progressListBtn}
              onClick={() => handleProgressChange('inProgress')}
            >
              In Progress{' '}
              <span>
                <svg className={css.progressBtnSvg}>
                  <use href={`${sprite}#remove-16`}></use>
                </svg>
              </span>
            </button>
          </li>
          <li>
            <button
              className={css.progressListBtn}
              onClick={() => handleProgressChange('done')}
            >
              Done
              <span>
                <svg className={css.progressBtnSvg}>
                  <use href={`${sprite}#remove-16`}></use>
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </div>
    )
  );
};

export default Progress;
