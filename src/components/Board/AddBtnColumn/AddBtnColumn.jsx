import { useState } from 'react';

import Modal from 'components/Modal/Modal';
import AddColumnForm from '../../Forms/BoardForms/AddColumnForm/AddColumnForm';
import sprite from 'assets/images/sprite.svg';

import css from './AddBtnColumn.module.css';

const AddBtnColumn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <button className={css.btnAddColumn} type="button" onClick={toggleModal}>
        <div className={css.btnPlus}>
          <svg aria-label="plus">
            <use href={`${sprite}#plus-20`}></use>
          </svg>
        </div>
        <p className={css.btnText}>Add another column</p>
      </button>
      {isOpen && (
        <Modal closeModal={toggleModal}>
          <AddColumnForm
            title="Add column"
            action="Add"
            handleClose={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};

export default AddBtnColumn;
