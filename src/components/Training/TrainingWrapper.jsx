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
import countDaysNumber from '../../helpers/countDaysNumber';

const TrainingWrapper = () => {
  const Mobile = props => <Responsive {...props} maxWidth={767} />;

  const Tablet = props => (
    <Responsive {...props} minWidth={768} maxWidth={1279} />
  );

  const Desktop = props => <Responsive {...props} minWidth={1280} />;

  const [isTrainingModalShown, setIsTrainingModalShown] = useState(false);

  const start = useSelector(trainingSelectors.selectStartDate);
  const end = useSelector(trainingSelectors.selectEndDate);
  // const startUnix = new Date(start.split('.').reverse().join('.')).getTime();
  // const endUnix = new Date(end.split('.').reverse().join('.')).getTime();
  // const days = (endUnix - startUnix) / 1000 / 60 / 60 / 24 + 1 || 0;

  const days = countDaysNumber(start, end);

  const openModal = () => {
    setIsTrainingModalShown(!isTrainingModalShown);
  };

  const books = useSelector(trainingSelectors.getSelectBooks);
  const isTrainingStarted = useSelector(trainingSelectors.getIsStarted);

  return (
    <div className={styles.wrapper}>
      <Mobile>
        {isTrainingStarted ? (
          <>
            <Timer />
            <MyGoals days={days} />
            <TrainingList />
            <ChartModal />
            <Results />
          </>
        ) : (
          <>
            <MyGoals days={days} />
            <TrainingList />
            {!!books.length && !!days && <StartTrainingBtn />}
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
            <MyGoals days={days} />
            <TrainingList />
            <ChartModal />
            <Results />
          </>
        ) : (
          <>
            <MyGoals days={days} />
            <TrainingForm />
            <TrainingList />
            {!!books.length && !!days && <StartTrainingBtn />}
            <ChartModal />
          </>
        )}
      </Tablet>

      <Desktop>
        {isTrainingStarted ? (
          <div className={styles.innerWrapper}>
            <div className={styles.upperPart}>
              <div className={styles.trainingInfo}>
                <Timer />
                <TrainingList />
              </div>
              <MyGoals days={days} />
            </div>

            <div className={styles.lowerPart}>
              <ChartModal />
              <Results />
            </div>
          </div>
        ) : (
          <div className={styles.innerWrapper}>
            <div className={styles.upperPart}>
              <div className={styles.trainingInfo}>
                <TrainingForm />
                <TrainingList />
                {!!books.length && !!days && <StartTrainingBtn />}
              </div>
              <MyGoals days={days} />
            </div>
            <div className={styles.lowerPart}>
              <ChartModal />
            </div>
          </div>
        )}
      </Desktop>
    </div>
  );
};

export default TrainingWrapper;
