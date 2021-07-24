import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TrainingWrapper from '../components/Training/TrainingWrapper';
import { trainingOperations } from '../redux/training';

const TrainingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trainingOperations.getTrainingPageData());
  }, [dispatch]);

  return <TrainingWrapper />;
};

export default TrainingPage;

// const [isRequestBooks, setIsRequestBooks] = useState(false);

// useEffect(() => {
//   dispatch(trainingOperations.getCurrTraining()).then(() =>
//     setIsRequestBooks(true),
//   );
// }, [dispatch]);

// useEffect(() => {
//   if (!isRequestBooks) return;

//   if (!isTrainStarted) dispatch(booksOperations.fetchBooks());

//   setIsRequestBooks(false);
// }, [isRequestBooks, dispatch, isTrainStarted]);
