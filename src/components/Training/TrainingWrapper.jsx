import { useMediaQuery } from 'react-responsive';

import TrainingForm from './TrainingForm/TrainingForm';
import TrainingModal from './TrainingModal/TrainingModal';
import TrainingList from './TrainingList';
import styles from './TrainingWrapper.module.scss';

const TrainingWrapper = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 767px)',
  });

  return (
    <div className={styles.wrapper}>
      {isMobile ? (
        <TrainingModal>
          <TrainingForm />
        </TrainingModal>
      ) : (
        <TrainingForm />
      )}
      <TrainingList />
    </div>
  );
};

export default TrainingWrapper;
