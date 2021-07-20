import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TrainingWrapper from '../components/Training/TrainingWrapper';
import { trainingActions } from '../redux/training';
// import { booksOperations } from '../redux/books';

const TrainingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(booksOperations.fetchBooks());

    return () => {
      // Очищаем список тренировки перед уходом
      dispatch(trainingActions.clearSelectedIds());
    };
  }, [dispatch]);

  return <TrainingWrapper />;
};

export default TrainingPage;

// axios.defaults.headers.common.Authorization =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjY1ZDc2ZjAwMjYzMjUyNGY1NGU0YSIsImlhdCI6MTYyNjc1ODUxOCwiZXhwIjoxNjI2Nzg3MzE4fQ.J55-jjjeAp9RkDlqw6JaEh6hYqPZFBHTRmaAOixUt4o';
