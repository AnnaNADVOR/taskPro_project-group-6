import CSS from './UserInfo.module.css';
import sprite from '../../../assets/images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
const UserInfo = ({ selectedTheme }) => {
  const { user, avatarURL } = useSelector(selectUser);

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

  const iconToShow = avatarURL ? avatarURL : iconId;

  return (
    <div className={CSS.userInfo}>
      <p className={CSS.userName}>{user.name}</p>
      <svg className={CSS.userIcon}>
        <use href={sprite + iconToShow} />
      </svg>
    </div>
  );
};
export default UserInfo;
