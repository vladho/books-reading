import React, { useRef, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
// import sprite from '../../../assets/icons/sprite.svg';
// import FormButton from '../formButton/FormButton';
import { useDispatch } from 'react-redux';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import styles from './NestingModal.module.scss';
import withShowModal from '../withShowModal/withShowModal';

const modalRoot = document.querySelector('#modal_root');

const NestingModal = ({
  component: Component,
  children,
  showModal,
  toogleModal,
  handleBackdropClick,
  addOperation,
  data,
  closeBtn,
  saveBtn,
  showModalTrue,
}) => {
  const modalRef = useRef();

  //   const dispatch = useDispatch();

  // const closeModal = () => {
  //   toogleModal();
  //   console.log('cancel button');
  // };
  // console.log('toogleModalsadasdasd', showModalTrue);

  // useEffect(() => {
  //   showModalTrue();
  // }, []);

  const onSave = e => {
    e.preventDefault();
    toogleModal();
    console.log('save btn');

    // dispatch(addOperation(data));
  };

  return createPortal(
    <div className={styles.modal} ref={modalRef} onClick={handleBackdropClick}>
      <div className={styles.container}>
        <form onSubmit={onSave}>
          <Component />
        </form>
      </div>
    </div>,
    modalRoot,
  );
};

export default withShowModal(NestingModal);
