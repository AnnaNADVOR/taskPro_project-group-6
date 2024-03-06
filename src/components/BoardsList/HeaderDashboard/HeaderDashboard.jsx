import Filter from 'components/Filter/Filter';
import { useState } from 'react';
import css from './HeaderDashboard.module.css';
import sprite from 'assets/images/sprite.svg';
import Modal from 'components/Modal/Modal';

const HeaderDashboard = () => {
  const [isOpen, setIsOpen] = useState();
  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <div className={css.container}>
      <h2 className={css.projectTitle}>Name of project</h2>
      <button className={css.buttonFilter} type=" button" onClick={toggleModal}>
        <svg aria-label="filter icon" width="16" height="16">
          <use className={css.filterIcon} href={`${sprite}#filter-16`}></use>
        </svg>
        <p className={css.filterTitle}>Filters</p>
      </button>
      {isOpen && <Modal closeModal={toggleModal} children={<Filter />} />}
    </div>
  );
};

export default HeaderDashboard;
