import { useDispatch, useSelector } from 'react-redux';
import styles from './StartTrainingBtn.module.scss';
import {
  trainingOperations as ops,
  trainingSelectors as sls,
} from '../../../redux/training';

const StartTrainingBtn = () => {
  const dispatch = useDispatch();

  const startDate = useSelector(sls.selectStartDate);
  const finishDate = useSelector(sls.selectEndDate);
  const books = useSelector(sls.getSelectIds);

  return (
    <button
      onClick={() =>
        dispatch(ops.startTraining({ startDate, finishDate, books }))
      }
      type="submit"
      className={styles.button}
    >
      Start training
    </button>
  );
};

export default StartTrainingBtn;
