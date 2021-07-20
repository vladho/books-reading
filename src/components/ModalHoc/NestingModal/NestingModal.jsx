import React, { useRef, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
// import sprite from '../../../assets/icons/sprite.svg';
// import FormButton from '../formButton/FormButton';
import { useDispatch } from 'react-redux';
import styles from './NestingModal.module.scss';

const modalRoot = document.querySelector('#modal_root');

const NestingModal = ({
  children,
  showModal,
  setShowModal,
  addOperation,
  titleModal,
  data,
}) => {

//   const modalRef = useRef();

//   const dispatch = useDispatch();

  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [setShowModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onSave = e => {
    e.preventDefault();
    closeModal();

    // dispatch(addOperation(data));
  };

  return createPortal(
    showModal && (
      <div
        className={styles.modal}
        // ref={modalRef}
        onClick={handleBackdropClick}
      >
        <div className={styles.container}>
          {/* <button
            type="button"
            className="sidebar-modal__btn"
            onClick={closeModal}
          >
            <svg className="sidebar-modal__icon">
              <use href={sprite + '#close'} />
            </svg>
            close
          </button> */}

          {/* <h2 className="form__title">{titleModal}</h2> */}
          {children}
          {/* <form onSubmit={onSave}>
            {children}
            <div>
              <FormButton>{language.sidebarModal.createButton}</FormButton>
              <button
                type="button"
                onClick={closeModal}
                className="sidebar-modal__link"
              >
                {language.sidebarModal.cancelButton}
                save
              </button>
            </div>
          </form> */}
        </div>
      </div>
    ),
    modalRoot,
  );
};

export default NestingModal;