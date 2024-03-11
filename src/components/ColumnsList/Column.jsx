import { useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from '../../assets/images/sprite.svg';
import css from '../ColumnsList/ColumnsList.module.css';
import CardList from '../CardList/CradList';
import MainAddButton from '../Buttons/MainAddButton/MainAddButton';
import Modal from '../Modal/Modal';
import CardForm from '../Forms/BoardForms/CardForm/CardForm';
import EditColumnForm from 'components/Forms/BoardForms/EditColumnForm/EditColumnForm';
import { deleteColumn } from '../../redux/columns/operation';

const Column = ({ id, title, column }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalColumnEditOpen, setIsModalColumnEditOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };
  const handleModalColumnEditOpen = () => {
    setIsModalColumnEditOpen(isModalColumnEditOpen => !isModalColumnEditOpen);
  };

  const handleDeleteColumn = columnId => {
    dispatch(deleteColumn(columnId));
  };
  return (
    <>
      <p className={css.columnTitle}>
        {title}
        <button
          className={css.btnIcon}
          onClick={() => {
            // columnId = column._id;
            handleModalColumnEditOpen();
          }}
        >
          <svg className={css.columnTitleIcon} width={16} height={16}>
            <use href={`${sprite}#pencil-16`}></use>
          </svg>
        </button>
        <button
          className={css.btnIcon}
          onClick={() => handleDeleteColumn(column._id)}
        >
          <svg className={css.columnTitleIcon} width={16} height={16}>
            <use href={`${sprite}#trash-16`}></use>
          </svg>
        </button>
      </p>
      <div>
        <CardList columnId={id} />
      </div>
      <MainAddButton text="Add another card" click={toggleModal} />
      {isOpen && (
        <Modal closeModal={toggleModal}>
          <CardForm title="Add card" action="Add" columnId={id} />
        </Modal>
      )}
      {isModalColumnEditOpen && (
        <Modal closeModal={handleModalColumnEditOpen}>
          <EditColumnForm
            columnId={column._id}
            title={column.title}
            column={column}
          />
        </Modal>
      )}
    </>
  );
};

export default Column;
