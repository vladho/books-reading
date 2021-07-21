import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrainingWrapper from '../components/Training/TrainingWrapper';
import {
  trainingOperations,
  trainingActions,
  trainingSelectors,
} from '../redux/training';
import { booksOperations } from '../redux/books';

const TrainingPage = () => {
  const dispatch = useDispatch();

  const isTrainStarted = useSelector(trainingSelectors.getIsStarted);

  useEffect(() => {
    const fff = async () => {
      await dispatch(trainingOperations.getCurrTraining());

      // dispatch(booksOperations.fetchBooks());
    };

    fff();

    return () => {
      // Очищаем список тренировки перед уходом
      dispatch(trainingActions.clearSelectedIds());
    };
  }, [dispatch]);

  return <TrainingWrapper />;
};

export default TrainingPage;
