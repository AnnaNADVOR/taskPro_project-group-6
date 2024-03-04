import { useState } from 'react';
import sprite from 'assets/images/sprite.svg';
import css from './AddBtnColumn.module.css';
import Modal from 'components/Modal/Modal';

const AddBtnColumn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <button className={css.btnAddColumn} type="button" onClick={toggleModal}>
        <svg aria-label="plus" width="28" height="28">
          <use href={`${sprite}#plus-white-background`}></use>
        </svg>
        <p>Add another column</p>
      </button>
      {isOpen && <Modal closeModal={toggleModal} />}
    </>
  );
};

export default AddBtnColumn;
