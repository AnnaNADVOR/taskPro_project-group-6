import { useState } from 'react';
import MainAddButton from '../Buttons/MainAddButton/MainAddButton';
import Modal from '../Modal/Modal';
import EditColumnForm from '../Forms/BoardForms/EditColumnForm/EditColumnForm';
import css from './ColumnsList.module.css';
import sprite from '../../assets/images/sprite.svg';

const ColumnsList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <div className={css.columnsListContainer}>
        <ul className={css.columnList}>
          <li className={css.columnItem}>
            <div>
              <p className={css.columnTitle}>
                To do
                <button className={css.btnIcon} onClick={toggleModal}>
                  <svg className={css.columnTitleIcon} width={16} height={16}>
                    <use href={`${sprite}#pencil-16`}></use>
                  </svg>
                </button>
                <button className={css.btnIcon}>
                  <svg className={css.columnTitleIcon} width={16} height={16}>
                    <use href={`${sprite}#trash-16`}></use>
                  </svg>
                </button>
              </p>
              <div>{/* CARDS */}</div>
              <MainAddButton text="Add another card" />
            </div>
          </li>
          <li className={css.columnItem}>
            <div>
              <p className={css.columnTitle}>
                In progress
                <button className={css.btnIcon} onClick={toggleModal}>
                  <svg className={css.columnTitleIcon} width={16} height={16}>
                    <use href={`${sprite}#pencil-16`}></use>
                  </svg>
                </button>
                <button className={css.btnIcon}>
                  <svg className={css.columnTitleIcon} width={16} height={16}>
                    <use href={`${sprite}#trash-16`}></use>
                  </svg>
                </button>
              </p>
              <div>{/* CARDS */}</div>
              <MainAddButton
                text="Add another card"
                className={css.addCardBtn}
              />
            </div>
          </li>
        </ul>
      </div>
      {isOpen && (
        <Modal closeModal={toggleModal}>
          <EditColumnForm />
        </Modal>
      )}
    </>
  );
};

export default ColumnsList;
