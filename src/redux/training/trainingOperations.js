import { api } from '../../services';
import trainingActions from './trainingActions';

const { getCurrTrainingRequest, getCurrTrainingSuccess, getCurrTrainingError } =
  trainingActions;

const getCurrTraining = () => async dispatch => {
  dispatch(getCurrTrainingRequest());

  try {
    const data = await api.getCurrTraining();

    dispatch(getCurrTrainingSuccess(data));

    // console.log('current operation');
  } catch (error) {
    dispatch(getCurrTrainingError(api.formatError(error)));
  }
};

const trainingOperations = {
  getCurrTraining,
};
export default trainingOperations;
