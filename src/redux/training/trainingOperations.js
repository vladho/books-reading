import { api } from '../../services';
import { trainingActions, trainingSelectors } from '.';
import { booksOperations } from '../books';

const { getCurrTrainingRequest, getCurrTrainingSuccess, getCurrTrainingError } =
  trainingActions;

const getCurrTraining = () => async dispatch => {
  dispatch(getCurrTrainingRequest());

  try {
    const data = await api.getCurrTraining();

    dispatch(getCurrTrainingSuccess(data));
  } catch (error) {
    dispatch(getCurrTrainingError(api.formatError(error)));
  }
};

const getTrainingPageData = () => async (dispatch, getState) => {
  await dispatch(getCurrTraining());

  const isTrainStarted = trainingSelectors.getIsStarted(getState());

  if (!isTrainStarted) dispatch(booksOperations.fetchBooks());
};

const trainingOperations = {
  getCurrTraining,
  getTrainingPageData,
};
export default trainingOperations;
