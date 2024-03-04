import CSS from './HeaderBurger.module.css';
import sprite from '../../../assets/images/sprite.svg';
const HeaderBurger = () => {
  return (
    <>
      <button type="button" className={CSS.btnBurger}>
        <svg className={CSS.burgerIcon}>
          <use href={`${sprite}#menu-burger`} />
        </svg>
      </button>
    </>
  );
};
export default HeaderBurger;
