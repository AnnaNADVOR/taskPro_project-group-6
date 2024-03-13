import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'components/Modal/Modal';
import EditBoardForm from 'components/Forms/BoardForms/EditBoardForm/EditBoardForm';
import { deleteBoard } from '../../../redux/auth/operation';
import { selectBoard } from '../../../redux/boards/selectors';
import sprite from 'assets/images/sprite.svg';

import css from './BoardListItem.module.css';

const BoardListItem = ({ board }) => {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentBoard = useSelector(selectBoard);
  const handleDeleteBoard = boardId => {
    dispatch(deleteBoard(boardId)).then(action => {
      if (action.type !== 'boards/deleteBoard/fulfilled') {
        return;
      }
      if (currentBoard._id === boardId) {
        navigate('/home');
      }
    });
  };

  return (
    <>
      <NavLink
        to={`/home/${board.title}`}
        state={{ from: location }}
        className={css.boardItem}
      >
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
      </NavLink>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <EditBoardForm
            boardId={board._id}
            initialTitle={board.title}
            initialIconName={board.icon}
            initialBackgroundName={board.background}
            handleClose={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};

export default BoardListItem;
