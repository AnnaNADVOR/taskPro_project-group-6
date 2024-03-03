import sprite from '../../../assets/images/sprite.svg';
import css from './SecondaryButton.module.css';

const SecondaryAddButton = ({ click }) => {
  return (
    <button className={css.button} onClick={click} type="submit">
      <svg>
        <use href={sprite + '#plus-20'}></use>
      </svg>
    </button>
  );
};

export default SecondaryAddButton;
