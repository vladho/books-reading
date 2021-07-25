import { createAction } from '@reduxjs/toolkit';

const getCurrTrainingRequest = createAction('training/getCurrTraining/request');
const getCurrTrainingSuccess = createAction('training/getCurrTraining/success');
const getCurrTrainingError = createAction('training/getCurrTraining/error');

const startTrainingRequest = createAction('training/startTraining/request');
const startTrainingSuccess = createAction('training/startTraining/success');
const startTrainingError = createAction('training/startTraining/error');

// Добавление книги в список тренировки
const addSelectedId = createAction('training/addSelectedId');

// Удаление книги из списка тренировки
const delSelectedId = createAction('training/delSelectedId');

// Добавление даты начала и конца тренировки
const trainingStartDate = createAction('training/trainingStartDate');
const trainingEndDate = createAction('training/trainingEndDate');

// Добавление результата
const addResultRequest = createAction('training/addResult/request');
const addResultSuccess = createAction('training/addResult/success');
const addResultError = createAction('training/addResult/error');

const trainingActions = {
  getCurrTrainingRequest,
  getCurrTrainingSuccess,
  getCurrTrainingError,
  startTrainingRequest,
  startTrainingSuccess,
  startTrainingError,
  addSelectedId,
  delSelectedId,
  trainingStartDate,
  trainingEndDate,
  addResultRequest,
  addResultSuccess,
  addResultError,
};
export default trainingActions;
