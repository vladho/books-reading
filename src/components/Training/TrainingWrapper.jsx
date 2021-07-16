
import  {useState}  from 'react';
import { useMediaQuery } from 'react-responsive';

import TrainingForm from './TrainingForm/TrainingForm';
import TrainingList from './TrainingList';
import MyGoals from '../Statistics/MyGoals/MyGoals';
import CircuitButton from '../common/CirciutButton/CircuitButton';
import TrainingModal from './TrainingModal/TrainingModal';
import styles from './TrainingWrapper.module.scss';

const TrainingWrapper = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 767px)',
  });

  const [selectedBooks, setSelectedBooks] = useState([]);
  const [isTrainingModalShown, setIsTrainingModalShown] = useState(false);

  const openModal = () => {
    setIsTrainingModalShown(!isTrainingModalShown);
  };

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
            <TrainingForm setSelectedBooks={setSelectedBooks} />
          </TrainingModal>
        ) : (
          <TrainingForm setSelectedBooks={setSelectedBooks} />
        )}
        <TrainingList selectedBooks={selectedBooks} />
        {isMobile && <CircuitButton openModal={openModal} />}
      </div>

      {/* <Chart/> */}
    </div>
  );
};

export default TrainingWrapper;