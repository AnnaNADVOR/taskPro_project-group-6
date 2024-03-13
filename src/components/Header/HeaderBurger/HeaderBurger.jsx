import sprite from '../../../assets/images/sprite.svg';

import css from './HeaderBurger.module.css';

const HeaderBurger = ({ toggleSidebar }) => {
  return (
    <>
      <button type="button" className={css.btnBurger} onClick={toggleSidebar}>
        <svg className={css.burgerIcon}>
          <use href={`${sprite}#menu-burger`} />
        </svg>
      </button>
    </>
  );
};
export default HeaderBurger;
