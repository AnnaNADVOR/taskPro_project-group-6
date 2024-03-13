import { NavLink } from 'react-router-dom';

import Wrapper from 'components/Forms/AuthForms/Wrapper/Wrapper';
import avatar1x from '../../assets/images/logo-image-162.png';
import avatar2x from '../../assets/images/logo-image-2x-162.png';
import avatar1xmob from '../../assets/images/logo-image-124.png';
import avatar2xmob from '../../assets/images/logo-image-124-2x.png';
import sprite from '../../assets/images/sprite.svg';

import style from './Welcome.module.css';

export default function Welcome() {
  return (
    <Wrapper>
      <div className={style.section}>
        <picture className={style.image}>
          <source
            media="(max-width: 375px)"
            srcSet={`${avatar1xmob} 1x, ${avatar2xmob} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${avatar1x} 1x, ${avatar2x} 2x`}
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${avatar1x} 1x, ${avatar2x} 2x`}
          />
          <img
            src={avatar1xmob}
            srcSet={`${avatar1xmob} 1x, ${avatar2xmob} 2x`}
            alt="Avatar"
          />
        </picture>
        <div className={style.box}>
          <svg className={style.icon}>
            <use href={`${sprite}#logo-black`} />
          </svg>
          <h1 className={style.title}>Task Pro</h1>
        </div>

        <p className={style.text}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>

        <div className={style.linksBox}>
          <NavLink to="auth/register" className={style.register}>
            Registration
          </NavLink>
          <NavLink to="auth/login" className={style.login}>
            Log In
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
}
