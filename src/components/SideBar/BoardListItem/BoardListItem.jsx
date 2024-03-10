import React, { useState } from 'react';

import sprite from 'assets/images/sprite.svg';
import Modal from 'components/Modal/Modal';
import AddBoardForm from 'components/Forms/BoardForms/AddBoardForm/AddBoardForm';

import css from './BoardListItem.module.css';


const BoardListItem = ({ board }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  return (
    <div className={css.boardItem}>
      <div className={css.boardItemTitleBlock}>
        <svg className={css.boardIcon}>
          <use href={`${sprite}#${board.icon}`}></use>
        </svg>
        <h2 className={css.boardTitle}>Title:{board.title}</h2>
      </div>
      <div>
        <ul className={css.boardItemButtonsBlock}>
          <li>
            <button
              className={css.boardBtn}
              type="button"
              onClick={toggleModal}
            >
              <svg className={css.boardBtnSvg}>
                <use href={`${sprite}#pencil-16`}></use>
              </svg>
            </button>
          </li>
          <li>
            <button className={css.boardBtn} type="button">
              <svg className={css.boardBtnSvg}>
                <use href={`${sprite}#trash-16`}></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddBoardForm />
        </Modal>
      )}
    </div>
  );
};

export default BoardListItem;
