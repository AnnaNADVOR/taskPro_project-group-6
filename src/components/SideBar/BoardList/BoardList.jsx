import React from 'react';
import { NavLink } from 'react-router-dom';
import EditBoardForm from 'components/Forms/BoardForms/EditBoardForm/EditBoardForm';
import Modal from 'components/Modal/Modal';

const BoardList = ({
  boards,
  handleClick,
  openEditBoardModal,
  handleDelete,
  location,
}) => {
  return (
    <div>
      {boards.map(({ _id: id, icon, titleBoard }) => (
        <li key={id} onClick={() => handleClick(id)}>
          <NavLink to={`/home/${titleBoard}`} state={{ from: location }}>
            <div>
              <div>
                <svg width="18" height="18">
                  <use href={`${sprite}#${icon}-dark`} />
                </svg>
              </div>
              <h2>{titleBoard}</h2>
            </div>
            <ul>
              <button onClick={() => openEditBoardModal(id)} />
              <button onClick={() => handleDelete(id)} />
            </ul>
          </NavLink>
        </li>
      ))}
      {isOpenModalEditBoard && (
        <Modal openEditBoardModal={openEditBoardModal} boardId={boardId}>
          <EditBoardForm />
        </Modal>
      )}
    </div>
  );
};

export default BoardList;
