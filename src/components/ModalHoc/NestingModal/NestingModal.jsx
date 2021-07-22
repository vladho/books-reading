import React, { useRef, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
// import sprite from '../../../assets/icons/sprite.svg';
// import FormButton from '../formButton/FormButton';
import { useDispatch } from 'react-redux';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import styles from './NestingModal.module.scss';

const modalRoot = document.querySelector('#modal_root');

const NestingModal = ({
  children,
  showModal,
  setShowModal,
  addOperation,
  data,
  closeBtn,
  saveBtn,
}) => {
  const modalRef = useRef();

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
    console.log('cancel button');
  };

  const onSave = e => {
    e.preventDefault();
    closeModal();
    console.log('save btn');

    // dispatch(addOperation(data));
  };

  // console.log(closeBtn);
  // console.log(saveBtn);

  return createPortal(
    showModal && (
      <div
        className={styles.modal}
        ref={modalRef}
        onClick={handleBackdropClick}
      >
        <div className={styles.container}>
          {/* {closeBtn && <form onClick={closeModal}>{children}</form>} */}
          {/* {closeBtn && (
            <form onSubmit={onSave} onClick={closeModal}>
              {children}
            </form>
          )}
          {saveBtn && <form onSubmit={onSave}>{children}</form>} */}
          <form onSubmit={onSave}>
            {/* {closeBtn && (
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
            )} */}
            {/* {closeBtn && (
              <CancelButton type="button" closeModal={closeModal}>
                Cancel
              </CancelButton>
            )} */}
            {children}
          </form>
        </div>
      </div>
    ),
    modalRoot,
  );
};

export default NestingModal;
