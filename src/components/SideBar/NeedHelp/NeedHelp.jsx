import React, { useState } from 'react';
import plant from 'assets/images/plant-54x78.png';
import plant2x from 'assets/images/plant-2x-54x78.png';
import sprite from 'assets/images/sprite.svg';
// import Modal from 'components/Modal/Modal';
import css from './NeedHelp.module.css';

const NeedHelp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    if (isOpen) {
    } else {
    }

    setIsOpen(!isOpen);
  };

  const dpr = window.devicePixelRatio || 1;

  const plantImage = dpr > 1 ? plant2x : plant;

  return (
    <div className={css.helpBlock}>
      <img
        src={plantImage}
        alt="Plant as a helper image"
        className={css.plant}
      />
      <p className={css.helpText}>
        If you need help with <span>TaskPro</span>, check out our support
        resources or reach out to our customer support team.
      </p>
      <button
        className={css.helpOpenModal}
        type="button"
        onClick={handleOpenModal}
      >
        <span>
          <svg className={css.helpOpenModalIcon}>
            <use href={`${sprite}#help-circle-20`}></use>
          </svg>
        </span>
        Need help?
      </button>
      {/* <Modal></Modal> */}
    </div>
  );
};

export default NeedHelp;
