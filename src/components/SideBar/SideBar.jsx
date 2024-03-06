import React, { useState } from 'react';

import NeedHelp from './NeedHelp/NeedHelp';
import Modal from 'components/Modal/Modal';
import AddBoardForm from 'components/Forms/BoardForms/AddBoardForm/AddBoardForm';

import sprite from 'assets/images/sprite.svg';
import css from './SideBar.module.css';

const SideBar = ({ showSidebar }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  return (
    <aside className={`${css.sidebar} ${showSidebar ? css.showSidebar : ''}`}>
      <div className={css.sidebarHeader}>
        <a href="/" className={css.logoBlock}>
          <div className={css.logoIcon}>
            <svg className={css.logoFlashIcon}>
              <use href={`${sprite}#flash`}></use>
            </svg>
          </div>
          <p className={css.logo}>Task Pro</p>
        </a>
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
      <div className={css.sidebarBoardsList}></div>
      <div className={css.sidebarWrapper}>
        <NeedHelp />
      </div>
      <div className={css.logoutBlock}>
        <a href="/" className={css.logoutLink}>
          <span>
            <svg className={css.logoutIcon}>
              <use href={`${sprite}#logOut-32`}></use>
            </svg>
          </span>
          <p className={css.logoutText}>Log out</p>
        </a>
      </div>

      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddBoardForm />
        </Modal>
      )}
    </aside>
  );
};

export default SideBar;
