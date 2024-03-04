import HeaderBurger from './HeaderBurger/HeaderBurger';
import Theme from './ThemePicker/ThemePicker';
import CSS from './Header.module.css';

export const Header = () => {
  return (
    <div className={CSS.headerContainer}>
      <HeaderBurger />
      <div className={CSS.userBlock}>
        <Theme />
      </div>
    </div>
  );
};
