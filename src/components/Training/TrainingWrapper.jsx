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

  const start = useSelector(trainingSelectors.selectStartDate);
  const end = useSelector(trainingSelectors.selectEndDate);
  const startUnix = new Date(start.split('.').reverse().join('.')).getTime();
  const endUnix = new Date(end.split('.').reverse().join('.')).getTime();
  const days = (endUnix - startUnix) / 1000 / 60 / 60 / 24;

  const openModal = () => {
    setIsTrainingModalShown(!isTrainingModalShown);
  };

  const books = useSelector(trainingSelectors.getSelectBooks);

  return (
    <div className={styles.wrapper}>
      <div className={styles.myGoals}>
        <MyGoals books={books.length} days={days} />
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
        {books.length && days >= 0 && <StartTrainingBtn />}
        <ChartModal />
        {isMobile && <CircuitButton openModal={openModal} />}
      </div>
    </div>
  );
};

export default TrainingWrapper;
