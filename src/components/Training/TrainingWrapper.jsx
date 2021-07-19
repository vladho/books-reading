import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import TrainingForm from './TrainingForm/TrainingForm';
import TrainingList from './TrainingList';
import StartTrainingBtn from './StartTrainingBtn/StartTrainingBtn';
import ChartModal from '../Chart/ChartModal/ChartModal';
import MyGoals from '../Statistics/MyGoals/MyGoals';
import CircuitButton from '../common/CirciutButton/CircuitButton';
import TrainingModal from './TrainingModal/TrainingModal';
import styles from './TrainingWrapper.module.scss';
import trainingSelectors from '../../redux/training/trainingSelectors';

const TrainingWrapper = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 767px)',
  });

  const [isTrainingModalShown, setIsTrainingModalShown] = useState(false);

  const openModal = () => {
    setIsTrainingModalShown(!isTrainingModalShown);
  };

  const books = useSelector(trainingSelectors.getSelectBooks);

  return (
    <div className={styles.wrapper}>
      <div className={styles.myGoals}>
        <MyGoals />
      </div>

      <div className={styles.myTraining}>
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
        {books.length && <StartTrainingBtn />}
        <ChartModal />
        {isMobile && <CircuitButton openModal={openModal} />}
      </div>
    </div>
  );
};

export default TrainingWrapper;
