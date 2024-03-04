import React from 'react';
import sprite from 'assets/images/sprite.svg';
// import SecondaryAddButton from 'components/Buttons/SecondaryAddButton/SecondaryAddButton';
import NeedHelp from './NeedHelp/NeedHelp';
import css from './SideBar.module.css';

const SideBar = () => {
  return (
    <aside className={css.sidebar}>
      <div className={css.sidebarHeader}>
        <a href="/" className={css.logoBlock}>
          <div className={css.logoIcon}>
            <svg className={css.logoFlashIcon}>
              <use href={`${sprite}#logo-black`}></use>
            </svg>
          </div>
          <p className={css.logo}>Task Pro</p>
        </a>
      </div>
      <div className={css.sidebarWrapper}>
        <h2 className={css.sidebarBoardsHeading}>My boards</h2>
        <div className={css.createBoardBlock}>
          <h3 className={css.createBoardText}>Create a new board</h3>
          {/* <SecondaryAddButton /> */}
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
    </aside>
  );
};

export default SideBar;
