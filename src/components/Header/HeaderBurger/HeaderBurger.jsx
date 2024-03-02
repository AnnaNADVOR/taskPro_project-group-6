import CSS from './HeaderBurger.module.css';
import sprite from '../../../assets/images/sprite.svg';
export const HeaderBurger = () => {
  return (
    <>
      <button type="button" className={CSS.btn_burger}>
        <svg className={CSS.burger_icon}>
          <use href={`${sprite}#menu-burger`} />
        </svg>
      </button>
    </>
  );
};
