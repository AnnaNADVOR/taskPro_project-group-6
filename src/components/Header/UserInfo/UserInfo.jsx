import CSS from './UserInfo.module.css';
import sprite from '../../../assets/images/sprite.svg';
const UserInfo = ({ selectedTheme }) => {
  let iconId;
  switch (selectedTheme) {
    case 'dark':
      iconId = '#default-user-icon-dark-68';
      break;
    case 'light':
      iconId = '#default-user-icon-light-68';
      break;
    case 'violet':
      iconId = '#default-user-icon-violet-68';
      break;
    default:
      iconId = '#default-user-icon-dark-68';
  }

  return (
    <div className={CSS.userInfo}>
      <p className={CSS.userName}>Name</p>
      <svg className={CSS.userIcon}>
        <use href={sprite + iconId} />
      </svg>
    </div>
  );
};
export default UserInfo;
