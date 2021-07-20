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
  data,
  closeBtn,
  saveBtn,
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

  console.log(closeBtn);
  console.log(saveBtn);

  return createPortal(
    showModal && (
      <div
        className={styles.modal}
        // ref={modalRef}
        onClick={handleBackdropClick}
      >
        <div className={styles.container}>
          {closeBtn && <form onSubmit={closeModal}>{children}</form>}
          {saveBtn && <form onSubmit={onSave}>{children}</form>}
        </div>
      </div>
    ),
    modalRoot,
  );
};

export default NestingModal;
