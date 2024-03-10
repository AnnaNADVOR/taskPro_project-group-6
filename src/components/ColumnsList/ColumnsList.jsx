import { useState } from 'react';
import MainAddButton from '../Buttons/MainAddButton/MainAddButton';
import Modal from '../Modal/Modal';
import CardForm from '../Forms/BoardForms/CardForm/CardForm';
import css from './ColumnsList.module.css';
import sprite from '../../assets/images/sprite.svg';
import CardList from 'components/CardList/CradList';
import {  useSelector } from 'react-redux';
import { selectAllColumns } from '../../redux/columns/selectors';

const ColumnsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const allColumns = useSelector(selectAllColumns); 
  
  let columnId = ""
  
  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <div className={css.columnsListContainer}>
        <ul className={css.columnList}>
          {allColumns.map(column => (
            <li key={column._id}>
              <p className={css.columnTitle}>{column.title}
                <button className={css.btnIcon}>
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
                 <div>
               <CardList/>
              </div>
              <MainAddButton text="Add another card" click={() => {
                columnId = column._id;
                toggleModal();
              }} />            
            </li>)             
          )          
          }          
        </ul>
      </div>
      {isOpen && (
        <Modal closeModal={toggleModal}>
          <CardForm title="Add card" action="Add" columnId={columnId} />
        </Modal>
      )}
    </>
  );
};

export default ColumnsList;
