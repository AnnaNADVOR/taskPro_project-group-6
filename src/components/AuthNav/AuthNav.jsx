import { NavLink } from 'react-router-dom';

import style from './AuthNav.module.css';

const ActiveAuthLink = () => {
  return (
    <div className={style.links}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.link} ${style.activelink}` : style.link
        }
        to={`/auth/register`}
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.link} ${style.activelink}` : style.link
        }
        to={`/auth/login`}
      >
        Log In
      </NavLink>
    </div>
  );
};

export default ActiveAuthLink;
