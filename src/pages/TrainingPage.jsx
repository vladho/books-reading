import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TrainingWrapper from '../components/Training/TrainingWrapper';
import { trainingActions } from '../redux/training';

const TrainingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 📌 Здесь будет получение книг с бэка

    return () => {
      // Очищаем список тренировки перед уходом
      dispatch(trainingActions.clearSelectedIds());
    };
  }, [dispatch]);

  return <TrainingWrapper />;
};

export default TrainingPage;
