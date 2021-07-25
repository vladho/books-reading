import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import NestingModal from '../NestingModal/NestingModal';
// import './ModalHoc.scss';
// import sprite from '../../../assets/icons/sprite.svg';
// import SidebarModal from '../sidebarModal/SidebarModal';

const withShowModal = WrappedComponent => props => {
  const { children: Component, showResume, ...rest } = props;
  const [showModal, setShowModal] = useState(true);

  const toogleModal = props => {
    setShowModal(prev => !prev);
  };

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

  const ChildrenComponent = useMemo(
    () => <Component toogleModal={toogleModal} />,
    [showModal],
  );

  return (
    <>
      {/* <button type="button" className="add-button" onClick={toogleModal}>
        TESSSSSSSSSSSSSSSST
      </button> */}
      {showModal && (
        <WrappedComponent
          {...rest}
          component={ChildrenComponent}
          handleBackdropClick={handleBackdropClick}
          // toogleModal={toogleModal}
          // showModalTrue={showModalTrue}
        />
      )}
    </>
  );
};

export default withShowModal;
