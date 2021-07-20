import { createAction } from '@reduxjs/toolkit';

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
  addSelectedId,
  delSelectedId,
  clearSelectedIds,
  trainingStartDate,
  trainingEndDate,
  addResult,
};
export default trainingActions;
