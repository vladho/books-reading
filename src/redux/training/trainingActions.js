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

// Очистка списка тренировки (при размонтировании страницы)
const clearSelectedIds = createAction('training/clearSelectedIds');

// Добавление даты начала и конца тренировки
const trainingStartDate = createAction('training/trainingStartDate');
const trainingEndDate = createAction('training/trainingEndDate');

// Добавление результата
const addResult = createAction('training/addResult');

const trainingActions = {
  getCurrTrainingRequest,
  getCurrTrainingSuccess,
  getCurrTrainingError,
  startTrainingRequest,
  startTrainingSuccess,
  startTrainingError,
  addSelectedId,
  delSelectedId,
  clearSelectedIds,
  trainingStartDate,
  trainingEndDate,
  addResult,
};
export default trainingActions;
