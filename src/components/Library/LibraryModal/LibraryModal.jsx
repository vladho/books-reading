import React from 'react';
import Responsive from 'react-responsive';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import LibraryFormMob from '../LibraryForm/LibraryFormMob';
import styles from './LibraryModal.module.scss';

const LibraryModal = ({ isBookModal, setIsBookModal }) => {
  const Mobile = props => <Responsive {...props} maxWidth={767} />;
  return (
    <>
      <Mobile>
        {isBookModal && (
          <div className={styles.modalBody}>
            <div className={styles.modalContent}>
              <HiOutlineArrowNarrowLeft
                fontSize="32"
                arial-label="go back button"
                onClick={() => setIsBookModal(!isBookModal)}
                className={styles.goBack}
              />
              <LibraryFormMob />
            </div>
          </div>
        )}
      </Mobile>
    </>
  );
};

export default LibraryModal;
