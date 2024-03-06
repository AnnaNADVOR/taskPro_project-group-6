import style from "./AuthNav.module.css"
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';
export default function ActiveAuth() {
  return (
    <div className={style.box}>
    <div>
        <div className={style.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link}
            to="register"
          >
            Registration
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link}
            to= "login"
                  >
            Log In
          </NavLink>
        </div>
       </div>
    <Suspense fallback={<Loader />}>
       <Outlet />
      </Suspense>
      </div>
 );
}



