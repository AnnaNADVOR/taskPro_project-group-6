import React, { useState } from 'react';

import sprite from 'assets/images/sprite.svg';
import Modal from 'components/Modal/Modal';
import EditBoardForm from 'components/Forms/BoardForms/EditBoardForm/EditBoardForm';
import { deleteBoard } from '../../../redux/auth/operation';
import { useDispatch } from 'react-redux';

import css from './BoardListItem.module.css';

const BoardListItem = ({ board }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  const dispatch = useDispatch();

  const handleDeleteBoard = boardId => {
    dispatch(deleteBoard(boardId));
  };

  return (
    <div className={css.boardItem}>
      <div className={css.boardItemTitleBlock}>
        <svg className={css.boardIcon}>
          <use href={`${sprite}#${board.icon}`}></use>
        </svg>
        <h2 className={css.boardTitle}>{board.title}</h2>
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
            <button
              onClick={() => handleDeleteBoard(board._id)}
              className={css.boardBtn}
              type="button"
            >
              <svg className={css.boardBtnSvg}>
                <use href={`${sprite}#trash-16`}></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <EditBoardForm
            board={board}
            initialTitle={board.title}
            initialIconName={board.icon}
            initialBackgroundName={board.background}
          />
        </Modal>
      )}
    </div>
  );
};

export default BoardListItem;
