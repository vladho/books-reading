import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import LibraryForm from '../LibraryForm/LibraryForm';
import styles from '../../Training/TrainingModal/TrainingModal.module.scss';

const TrainingModal = ({ isTrainingModalShown, setIsTrainingModalShown }) => {
  return (
    <>
      {isTrainingModalShown && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalWrapper}>
            <HiOutlineArrowNarrowLeft
              fontSize="32"
              arial-label="go back button"
              onClick={() => setIsTrainingModalShown(!isTrainingModalShown)}
              className={styles.goBack}
            />
            <LibraryForm />
          </div>
        </div>
      )}
    </>
  );
};

export default TrainingModal;
