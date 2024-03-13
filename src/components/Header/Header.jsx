import HeaderBurger from './HeaderBurger/HeaderBurger';
import Theme from './ThemePicker/ThemePicker';

import css from './Header.module.css';

const Header = ({ toggleSidebar }) => {
  return (
    <div className={css.headerContainer}>
      <HeaderBurger toggleSidebar={toggleSidebar} />
      <div className={css.userBlock}>
        <Theme />
      </div>
    </div>
  );
};
export default Header;
