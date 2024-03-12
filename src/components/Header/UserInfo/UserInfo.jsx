import CSS from './UserInfo.module.css';
import sprite from '../../../assets/images/sprite.svg';
import { useState } from 'react';
import Modal from "../../Modal/Modal"
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';

const UserInfo = ({ selectedTheme }) => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector(selectUser);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <>
      <div className={CSS.userInfo}>
        <p className={CSS.userName}>{user.name}</p>
        {user.avatarURL ? (
        <img
          src={user.avatarURL}
          alt="User Avatar"
          className={CSS.userIcon}
          onClick={handleOpen}
        />
      ) : (
        <svg 
        className={CSS.userIcon}
        onClick={handleOpen}>
          <use href={sprite + iconId} />
        </svg>
      )}
      </div>
      { open && 
      <Modal 
        open={open}
        closeModal={handleClose}
        children={<UserMenu handleClose={handleClose} selectedTheme={selectedTheme}/>}
                />}
    </>
  );
};
export default UserInfo;
