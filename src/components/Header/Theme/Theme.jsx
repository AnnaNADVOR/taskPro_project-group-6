import sprite from '../../../assets/images/sprite.svg';
import CSS from './Theme.module.css';
export const Theme = () => {
  return (
    <div className={CSS.theme_container}>
      <p className={CSS.theme_text}>Theme</p>
      <svg className={CSS.theme_icon}>
        <use href={sprite + '#select-menu-16'} />
      </svg>
    </div>
  );
};
