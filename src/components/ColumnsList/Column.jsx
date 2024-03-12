import { useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from '../../assets/images/sprite.svg';
import css from '../ColumnsList/ColumnsList.module.css';
import CardList from '../CardList/CradList';
import MainAddButton from '../Buttons/MainAddButton/MainAddButton';
import Modal from '../Modal/Modal';
import CardForm from '../Forms/BoardForms/CardForm/CardForm';
import { deleteColumn } from '../../redux/boards/operation';
import AddColumnForm from '../Forms/BoardForms/AddColumnForm/AddColumnForm';

const Column = ({ id, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalColumnEditOpen, setIsModalColumnEditOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };
  const handleModalColumnEditOpen = () => {
    setIsModalColumnEditOpen(isModalColumnEditOpen => !isModalColumnEditOpen);
  };

  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(deleteColumn(id));
  };

  return (
    <>
      <p className={css.columnTitle}>
        {title}
        <button
          className={css.btnIcon}
          onClick={handleModalColumnEditOpen}
          type="button"
        >
          <svg className={css.columnTitleIcon} width={16} height={16}>
            <use href={`${sprite}#pencil-16`}></use>
          </svg>
        </button>
        <button
          className={css.btnIcon}
          onClick={handleRemoveClick}
          type="button"
        >
          <svg className={css.columnTitleIcon} width={16} height={16}>
            <use href={`${sprite}#trash-16`}></use>
          </svg>
        </button>
      </p>
      <div className={css.cardContainer}>
        <CardList columnId={id} />
      </div>
      <MainAddButton text="Add another card" click={toggleModal} />
      {isOpen && (
        <Modal closeModal={toggleModal}>
          <CardForm
            title="Add card"
            action="Add"
            columnId={id}
            handleClose={toggleModal}
          />
        </Modal>
      )}
      {isModalColumnEditOpen && (
        <Modal closeModal={handleModalColumnEditOpen}>
          <AddColumnForm
            title="Edit column"
            action="Edit"
            columnId={id}
            columnTitle={title}
          />
        </Modal>
      )}
    </>
  );
};

export default Column;
