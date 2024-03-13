import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import sprite from '../../assets/images/sprite.svg';

import css from './Modal.module.css';

function Modal({ closeModal, children, style }) {
  useEffect(() => {
    const onEscClick = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onEscClick);
    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [closeModal]);

  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={onOverlayClick}>
      <div className={style || css.modal}>
        <button className={css.closeButton} onClick={closeModal}>
          <svg className={css.closeButtonSvg}>
            <use href={`${sprite}#close-18`} />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;
