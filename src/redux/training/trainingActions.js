import { createAction } from '@reduxjs/toolkit';

const getCurrTrainingRequest = createAction('projects/getCurrTraining/request');
const getCurrTrainingSuccess = createAction('projects/getCurrTraining/success');
const getCurrTrainingError = createAction('projects/getCurrTraining/error');

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
  addSelectedId,
  delSelectedId,
  clearSelectedIds,
  trainingStartDate,
  trainingEndDate,
  addResult,
};
export default trainingActions;
