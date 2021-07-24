import React, { useEffect, useState } from 'react';
import NestingModal from '../NestingModal/NestingModal';
// import './ModalHoc.scss';
// import sprite from '../../../assets/icons/sprite.svg';
// import SidebarModal from '../sidebarModal/SidebarModal';

const withShowModal = WrappedComponent => props => {
  const { children: Component, ...rest } = props;
  // console.log('props', props);

  const [showModal, setShowModal] = useState(true);

  // console.log('toogleModal 3', showModal);

  const toogleModal = () => {
    console.log('toogleModal 5', showModal);
    setShowModal(prev => !prev);
    // setShowModal(false);

    // setShowModal(!showModal);

    console.log('toogleModal 6', showModal);
  };

  // const showModalTrue = () => {
  //   console.log("showModalTrue");
  //   setShowModal(true);
  // };

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
      {/* <button type="button" className="add-button" onClick={toogleModal}>
        TESSSSSSSSSSSSSSSST
      </button> */}
      {showModal && (
        <WrappedComponent
          {...rest}
          component={() => (
            <Component
              toogleModal={toogleModal}
              // showModalTrue={showModalTrue}
            />
          )}
          handleBackdropClick={handleBackdropClick}
          toogleModal={toogleModal}
          // showModalTrue={showModalTrue}
        />
      )}
    </>
  );
};

export default withShowModal;
