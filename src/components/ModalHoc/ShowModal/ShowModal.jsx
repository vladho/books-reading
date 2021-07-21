import React, { useState } from 'react';
import NestingModal from '../NestingModal/NestingModal';
// import './ModalHoc.scss';
// import sprite from '../../../assets/icons/sprite.svg';
// import SidebarModal from '../sidebarModal/SidebarModal';

const ShowModal = ({
  children,
  title,
  addOperation,
  titleModal,
  data,
  closeBtn,
  saveBtn,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <button
        type="button"
        aria-label="add button"
        className="add-button"
        onClick={toogleModal}
      >
        {/* <svg className="icon-plus">
          <use href={sprite + '#plus'}></use>
        </svg> */}
        TESSSSSSSSSSSSSSSST
      </button>

      <NestingModal
        data={data}
        titleModal={titleModal}
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
