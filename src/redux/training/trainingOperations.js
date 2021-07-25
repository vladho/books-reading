import { api } from '../../services';
import { trainingActions, trainingSelectors } from '.';
import { booksOperations } from '../books';

const {
  getCurrTrainingRequest,
  getCurrTrainingSuccess,
  getCurrTrainingError,
  startTrainingRequest,
  startTrainingSuccess,
  startTrainingError,
  addResultRequest,
  addResultSuccess,
  addResultError,
} = trainingActions;

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

const startTraining = details => async dispatch => {
  dispatch(startTrainingRequest());

  try {
    const data = await api.startTraining(details);

    dispatch(startTrainingSuccess(data));
  } catch (error) {
    dispatch(startTrainingError(api.formatError(error)));
  }
};

const addResult = body => async dispatch => {
  dispatch(addResultRequest());
  try {
    const data = await api.addResult(body);

    dispatch(addResultSuccess(data));
  } catch (error) {
    dispatch(addResultError(api.formatError(error)));
  }
};

const trainingOperations = {
  getCurrTraining,
  getTrainingPageData,
  startTraining,
  addResult,
};
export default trainingOperations;
