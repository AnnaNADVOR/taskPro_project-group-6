import { HeaderBurger } from './HeaderBurger/HeaderBurger';
import { Theme } from './Theme/Theme';
import { UserInfo } from './UserInfo/UserInfo';
import CSS from './Header.module.css';
export const Header = () => {
  return (
    <div className={CSS.header_container}>
      <HeaderBurger />
      <div className={CSS.userblock}>
        <Theme />
        <UserInfo />
      </div>
    </div>
  );
};
