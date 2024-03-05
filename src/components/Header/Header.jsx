import HeaderBurger from './HeaderBurger/HeaderBurger';
import Theme from './ThemePicker/ThemePicker';
import CSS from './Header.module.css';

export const Header = ({ toggleSidebar }) => {
  return (
    <div className={CSS.headerContainer}>
      <HeaderBurger toggleSidebar={toggleSidebar} />
      <div className={CSS.userBlock}>
        <Theme />
      </div>
    </div>
  );
};
