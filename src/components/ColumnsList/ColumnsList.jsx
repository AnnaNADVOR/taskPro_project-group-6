import { useState } from 'react';
import MainAddButton from '../Buttons/MainAddButton/MainAddButton';
import Modal from '../Modal/Modal';
import CardForm from '../Forms/BoardForms/CardForm/CardForm';
import css from './ColumnsList.module.css';
import sprite from '../../assets/images/sprite.svg';
import CardList from 'components/CardList/CradList';

const ColumnsList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <div className={css.columnsListContainer}>
        <ul className={css.columnList}>
          {/* <li className={css.columnItem}>
            <div>
              
              <p className={css.columnTitle}>
                To do
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
              <MainAddButton text="Add another card" click={toggleModal} />
            </div>
          </li>
          <li className={css.columnItem}>
            <div>
              <p className={css.columnTitle}>
                In progress
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
                {/* <Card /> */}
              {/* </div>
              <MainAddButton text="Add another card" click={toggleModal} />
            </div> */}
          {/* </li> */} 
        </ul>
      </div>
      {isOpen && (
        <Modal closeModal={toggleModal}>
          <CardForm title="Add card" action="Add" columnId="gjfjfkfelkfelkfwekwfelk1" />
        </Modal>
      )}
    </>
  );
};

export default ColumnsList;
