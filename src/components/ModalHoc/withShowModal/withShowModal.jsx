import React, { useEffect, useState } from 'react';
import NestingModal from '../NestingModal/NestingModal';
// import './ModalHoc.scss';
// import sprite from '../../../assets/icons/sprite.svg';
// import SidebarModal from '../sidebarModal/SidebarModal';

const withShowModal = WrappedComponent => props => {
  // { addOperation, data, closeBtn, saveBtn })
  const { children: Component, ...rest } = props;
  console.log(Component);

  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(prev => !prev);
  };

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

  return (
    <>
      <button type="button" className="add-button" onClick={toogleModal}>
        TESSSSSSSSSSSSSSSST
      </button>
      {showModal && (
        <WrappedComponent
          {...rest}
          component={() => <Component toogleModal={toogleModal} />}
          handleBackdropClick={handleBackdropClick}
          toogleModal={toogleModal}
        />
      )}
      {/* 
      <NestingModal
        data={data}
        showModal={showModal}
        setShowModal={setShowModal}
        addOperation={addOperation}
        closeBtn={closeBtn}
        saveBtn={saveBtn}
      >
        {children}
      </NestingModal> */}
    </>
  );
};

export default withShowModal;
