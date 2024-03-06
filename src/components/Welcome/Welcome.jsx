import { NavLink } from 'react-router-dom';
import avatar  from '../../assets/images/logo-image-162.png';
import sprite  from '../../assets/images/sprite.svg';
import style from './Welcome.module.css'
import Wrapper from 'components/Forms/AuthForms/Wrapper/Wrapper';

export default function Welcome() {
    return (
<Wrapper>
<div className={style.section}>
   <img src={avatar} alt="Avatar" className={style.image} />
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
