import CSS from './UserInfo.module.css';
import sprite from '../../../assets/images/sprite.svg';
export const UserInfo = () => {
  return (
    <>
      <div className={CSS.user_info}>
        <p className={CSS.user_name}>Name</p>
        <svg className={CSS.user_icon}>
          <use href={sprite + '#default-user-icon-dark-68'} />
        </svg>
      </div>
    </>
  );
};
