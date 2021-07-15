import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import TrainingForm from './TrainingForm/TrainingForm';
import TrainingList from './TrainingList';
import CircuitButton from '../common/CirciutButton/CircuitButton';
import TrainingModal from './TrainingModal/TrainingModal';
import styles from './TrainingWrapper.module.scss';

const TrainingWrapper = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 767px)',
  });

  const [isTrainingModalShown, setIsTrainingModalShown] = useState(false);

  const openModal = () => {
    setIsTrainingModalShown(!isTrainingModalShown);
  };

  return (
    <div className={styles.wrapper}>
      {isMobile ? (
        <TrainingModal
          isTrainingModalShown={isTrainingModalShown}
          setIsTrainingModalShown={setIsTrainingModalShown}
        >
          <TrainingForm />
        </TrainingModal>
      ) : (
        <TrainingForm />
      )}
      <TrainingList />
      {isMobile && <CircuitButton openModal={openModal} />}
    </div>
  );
};

export default TrainingWrapper;
