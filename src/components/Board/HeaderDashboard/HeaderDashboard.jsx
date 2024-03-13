import { useState } from 'react';

import Filter from 'components/Filter/Filter';
import Modal from 'components/Modal/Modal';
import sprite from 'assets/images/sprite.svg';

import css from './HeaderDashboard.module.css';

const HeaderDashboard = ({ title }) => {
  const [isOpen, setIsOpen] = useState();
  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <div className={css.container}>
      <h2 className={css.projectTitle}>{title}</h2>
      <button className={css.buttonFilter} type=" button" onClick={toggleModal}>
        <svg
          className={css.filterIcon}
          aria-label="filter icon"
          width="16"
          height="16"
        >
          <use href={`${sprite}#filter-16`}></use>
        </svg>
        <p className={css.filterTitle}>Filters</p>
      </button>
      {isOpen && (
        <Modal
          style={css.modalStyle}
          closeModal={toggleModal}
          children={<Filter />}
        />
      )}
    </div>
  );
};

export default HeaderDashboard;
