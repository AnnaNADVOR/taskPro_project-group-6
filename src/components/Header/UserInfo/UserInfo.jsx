import CSS from './UserInfo.module.css';
import sprite from '../../../assets/images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
const UserInfo = ({ selectedTheme }) => {
  const { user } = useSelector(selectUser);

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

  if (!user) {
    return null;
  }

  return (
    <div className={CSS.userInfo}>
      <p className={CSS.userName}>{user.name}</p>
      {user.avatarURL ? (
        <img src={user.avatarURL} alt="User Avatar" className={CSS.userIcon} />
      ) : (
        <svg className={CSS.userIcon}>
          <use href={sprite + iconId} />
        </svg>
      )}
    </div>
  );
};
export default UserInfo;
