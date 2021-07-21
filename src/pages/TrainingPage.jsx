import { useEffect } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import TrainingWrapper from '../components/Training/TrainingWrapper';
import {
  // trainingOperations,
  trainingActions,
  // trainingSelectors,
} from '../redux/training';
// import { booksOperations } from '../redux/books';

// import axios from 'axios';
// axios.defaults.headers.common.Authorization =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjdhYzQwYjNhNjUxMzM0MGY2ZDNkMiIsImlhdCI6MTYyNjg0NDIyNCwiZXhwIjoxNjI2ODczMDI0fQ.kRM4aCqHJXCYtlslHWVtrQgfux4sDp23EOX5-1UeGTk';

const TrainingPage = () => {
  const dispatch = useDispatch();

  // const isTrainStarted = useSelector(trainingSelectors.getIsStarted);
  // console.log(isTrainStarted);

  useEffect(() => {
    // const fff = async () => {
    //   await dispatch(trainingOperations.getCurrTraining());

    //   console.log('next operation');
    //   dispatch(booksOperations.fetchBooks());
    // };

    // fff();

    return () => {
      // Очищаем список тренировки перед уходом
      dispatch(trainingActions.clearSelectedIds());
    };
  }, [dispatch]);

  return <TrainingWrapper />;
};

export default TrainingPage;
