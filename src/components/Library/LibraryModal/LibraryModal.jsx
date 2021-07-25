import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import LibraryForm from '../LibraryForm/LibraryForm';
import styles from './LibraryModal.module.scss';

const LibraryModal = ({ isBookModal, setIsBookModal }) => {
  return (
    <>
      {isBookModal && (
        <div className={styles.modalBackdrop}>
          <HiOutlineArrowNarrowLeft
            fontSize="32"
            arial-label="go back button"
            onClick={() => setIsBookModal(!isBookModal)}
            className={styles.goBack}
          />
          <LibraryForm />
        </div>
      )}
    </>
  );
};

export default LibraryModal;
