import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import TrainingForm from '../TrainingForm/TrainingForm';
import styles from './TrainingModal.module.scss';

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
            <TrainingForm />
          </div>
        </div>
      )}
    </>
  );
};

export default TrainingModal;
