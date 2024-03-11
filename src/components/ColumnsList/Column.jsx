import { useState } from 'react';
import sprite from '../../assets/images/sprite.svg';
import css from '../ColumnsList/ColumnsList.module.css';
import CardList from '../CardList/CradList';
import MainAddButton from '../Buttons/MainAddButton/MainAddButton';
import Modal from '../Modal/Modal';
import CardForm from '../Forms/BoardForms/CardForm/CardForm';

const Column = ({ id, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };
    return (
         <>
              <p className={css.columnTitle}>{title}
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
               <CardList columnId={id}/>
              </div>
              <MainAddButton text="Add another card" click={toggleModal} />   
                     {isOpen && (
        
        <Modal closeModal={toggleModal}>
          <CardForm title="Add card" action="Add" columnId={id} />
        </Modal>
      )}

            </>
    )
}

export default Column; 