import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/operation';
import BoardList from './BoardList/BoardList';
import NeedHelp from './NeedHelp/NeedHelp';
import Modal from 'components/Modal/Modal';
import AddBoardForm from 'components/Forms/BoardForms/AddBoardForm/AddBoardForm';
import sprite from 'assets/images/sprite.svg';

import css from './SideBar.module.css';

const SideBar = ({ showSidebar }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  return (
    <aside className={`${css.sidebar} ${showSidebar ? css.showSidebar : ''}`}>
      <div className={css.sidebarHeader}>
        <Link to="/home" className={css.logoBlock}>
          <div className={css.logoIcon}>
            <svg className={css.logoFlashIcon}>
              <use href={`${sprite}#flash`}></use>
            </svg>
          </div>
          <p className={css.logo}>Task Pro</p>
        </Link>
      </div>
      <div className={css.sidebarWrapper}>
        <h2 className={css.sidebarBoardsHeading}>My boards</h2>
        <div className={css.createBoardBlock}>
          <h3 className={css.createBoardText}>Create a new board</h3>
          <button className={css.button} onClick={toggleModal} type="button">
            <svg className={css.plusIcon}>
              <use href={`${sprite}#plus-20`}></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={css.sidebarBoardsList}>
        <BoardList />
      </div>
      <div className={css.sidebarWrapper}>
        <NeedHelp />
      </div>
      <div className={css.logoutBlock}>
        <Link
          to="/"
          className={css.logoutLink}
          onClick={() => dispatch(logOut())}
        >
          <span>
            <svg className={css.logoutIcon}>
              <use href={`${sprite}#logOut-32`}></use>
            </svg>
          </span>
          <p className={css.logoutText}>Log out</p>
        </Link>
      </div>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddBoardForm handleClose={toggleModal} />
        </Modal>
      )}
    </aside>
  );
};

export default SideBar;
