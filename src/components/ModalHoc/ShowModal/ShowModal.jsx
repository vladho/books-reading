import React, { useState } from 'react';
import NestingModal from '../NestingModal/NestingModal';
// import './ModalHoc.scss';
// import sprite from '../../../assets/icons/sprite.svg';
// import SidebarModal from '../sidebarModal/SidebarModal';

const ShowModal = ({ children, addOperation, data, closeBtn, saveBtn }) => {
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <button type="button" className="add-button" onClick={toogleModal}>
        TESSSSSSSSSSSSSSSST
      </button>

      <NestingModal
        data={data}
        showModal={showModal}
        setShowModal={setShowModal}
        addOperation={addOperation}
        closeBtn={closeBtn}
        saveBtn={saveBtn}
      >
        {children}
      </NestingModal>
    </>
  );
};

export default ShowModal;
