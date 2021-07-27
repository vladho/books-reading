import React, { useEffect } from 'react';
import { createPortal } from 'react-dom/cjs/react-dom.development';
import NestingModal from '../NestingModal/NestingModal';

const modalRoot = document.querySelector('#modal_root');

const withModal = WrappedComponent => props => {
  const { setShowModal, showModal } = props;

  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        setShowModal(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [setShowModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setShowModal(prev => !prev);
    }
  };

  const isShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <NestingModal handleBackdropClick={handleBackdropClick}>
          <WrappedComponent
            {...props}
            handleBackdropClick={handleBackdropClick}
            toogleModal={isShowModal}
          />
        </NestingModal>
      )}
    </>
  );
};

export default withModal;
