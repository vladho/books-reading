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
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjZjZmZkOTg1OGE2MzYyODE5YWIxZiIsImlhdCI6MTYyNjc4NzgzOCwiZXhwIjoxNjI2ODE2NjM4fQ.fgNk8VXXB9mvaRw9eo4LvTv0l59ZGpdArbcVxCBEZ6E';
