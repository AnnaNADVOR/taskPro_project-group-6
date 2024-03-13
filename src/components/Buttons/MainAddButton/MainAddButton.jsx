import sprite from '../../../assets/images/sprite.svg';

import css from './MainAddButton.module.css';

const MainAddButton = ({ text, click }) => {
  return (
    <button className={css.button} onClick={click} type="submit">
      <div className={css.plus}>
        <svg>
          <use href={`${sprite}#plus-20`} />
        </svg>
      </div>
      {text}
    </button>
  );
};

export default MainAddButton;
