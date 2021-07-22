import { useState } from 'react';
import { useSelector } from 'react-redux';
import Responsive from 'react-responsive';

import TrainingForm from './TrainingForm/TrainingForm';
import TrainingList from './TrainingList';
import StartTrainingBtn from './StartTrainingBtn/StartTrainingBtn';
import ChartModal from '../Chart/ChartModal/ChartModal';
import MyGoals from '../Statistics/MyGoals/MyGoals';
import Timer from '../Timer/Timer';
import Results from '../Statistics/Results/Results';
import CircuitButton from '../common/CirciutButton/CircuitButton';
import TrainingModal from './TrainingModal/TrainingModal';
import styles from './TrainingWrapper.module.scss';
import trainingSelectors from '../../redux/training/trainingSelectors';

const TrainingWrapper = () => {
  const Mobile = props => <Responsive {...props} maxWidth={767} />;

  const Tablet = props => (
    <Responsive {...props} minWidth={768} maxWidth={1279} />
  );

  const Desktop = props => <Responsive {...props} minWidth={1280} />;

  const [isTrainingModalShown, setIsTrainingModalShown] = useState(false);

  const start = useSelector(trainingSelectors.selectStartDate);
  const end = useSelector(trainingSelectors.selectEndDate);
  const startUnix = new Date(start.split('.').reverse().join('.')).getTime();
  const endUnix = new Date(end.split('.').reverse().join('.')).getTime();
  const days = (endUnix - startUnix) / 1000 / 60 / 60 / 24 || 0;

  const openModal = () => {
    setIsTrainingModalShown(!isTrainingModalShown);
  };

  const books = useSelector(trainingSelectors.getSelectBooks);
  // const isTrainingStarted = useSelector(trainingSelectors.getIsStarted)
  const isTrainingStarted = false;

  return (
    <div className={styles.wrapper}>
      <Mobile>
        {isTrainingStarted ? (
          <>
            <Timer />
            <MyGoals books={books.length} days={days} />
            <TrainingList />
            <ChartModal />
            <Results />
          </>
        ) : (
          <>
            <MyGoals books={books.length} days={days} />
            <TrainingList />
            {books.length && days >= 0 && <StartTrainingBtn />}
            <ChartModal />
            <CircuitButton openModal={openModal} />
            <TrainingModal
              isTrainingModalShown={isTrainingModalShown}
              setIsTrainingModalShown={setIsTrainingModalShown}
            >
              <TrainingForm />
            </TrainingModal>
          </>
        )}
      </Mobile>

      <Tablet>
        {isTrainingStarted ? (
          <>
            <Timer />
            <MyGoals books={books.length} days={days} />
            <TrainingForm />
            <TrainingList />
            <ChartModal />
            <Results />
          </>
        ) : (
          <>
            <MyGoals books={books.length} days={days} />
            <TrainingForm />
            <TrainingList />
            {books.length && days >= 0 && <StartTrainingBtn />}
            <ChartModal />
          </>
        )}
      </Tablet>

      <Desktop>
        {isTrainingStarted ? (
          <>
            <div className={styles.rightPart}>
              <Timer />
              <TrainingList />
              <ChartModal />
            </div>

            <div className={styles.leftPart}>
              <MyGoals books={books.length} days={days} />
              <Results />
            </div>
          </>
        ) : (
          <>
            <div>
              <TrainingForm />
              <TrainingList />
              {books.length && days >= 0 && <StartTrainingBtn />}
              <ChartModal />
            </div>
            <div>
              <MyGoals books={books.length} days={days} />
            </div>
          </>
        )}
      </Desktop>
    </div>
  );
};

export default TrainingWrapper;
