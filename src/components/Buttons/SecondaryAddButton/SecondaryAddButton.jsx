import sprite from '../../../assets/images/sprite.svg';

import css from './SecondaryAddButton.module.css';

const SecondaryAddButton = ({ click }) => {
  return (
    <button className={css.button} onClick={click} type="submit">
      <svg className={css.plusIcon}>
        <use href={`${sprite}#plus-20`}></use>
      </svg>
    </button>
  );
};

export default SecondaryAddButton;
