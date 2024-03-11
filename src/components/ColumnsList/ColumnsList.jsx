// import { useState } from 'react';
// import MainAddButton from '../Buttons/MainAddButton/MainAddButton';
// import Modal from '../Modal/Modal';
// import CardForm from '../Forms/BoardForms/CardForm/CardForm';
import css from './ColumnsList.module.css';
// import sprite from '../../assets/images/sprite.svg';
// import CardList from 'components/CardList/CradList';
import { useSelector } from 'react-redux';
import { selectAllColumns } from '../../redux/columns/selectors';
import Column from './Column';

const ColumnsList = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const allColumns = useSelector(selectAllColumns);

  // const toggleModal = () => {
  //   setIsOpen(isOpen => !isOpen);
  // };

  return (
    <>
      <div className={css.columnsListContainer}>
        <ul className={css.columnList}>
          {allColumns.map(column => (
            <li key={column._id}>
              <Column id={column._id} title={column.title} column={column} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ColumnsList;
