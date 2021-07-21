import { useEffect, useState } from 'react';
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

  const [isRequestBooks, setIsRequestBooks] = useState(false);

  const isTrainStarted = useSelector(trainingSelectors.getIsStarted);

  useEffect(() => {
    dispatch(trainingOperations.getCurrTraining()).then(() =>
      setIsRequestBooks(true),
    );

    return () => {
      // Очищаем список тренировки перед уходом
      dispatch(trainingActions.clearSelectedIds());
      console.log('размонтирование');
    };
  }, [dispatch]);

  if (isRequestBooks) {
    console.log('in condition:', isTrainStarted);
    if (!isTrainStarted) dispatch(booksOperations.fetchBooks());

    setIsRequestBooks(false);
  }

  return <TrainingWrapper />;
};

export default TrainingPage;
