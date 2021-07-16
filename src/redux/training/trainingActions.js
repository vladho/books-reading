import { createAction } from '@reduxjs/toolkit';

// Добавление книги в список тренировки
const addSelectedId = createAction('training/addSelectedId');

// Удаление книги из списка тренировки
const delSelectedId = createAction('training/delSelectedId');

// Очистка списка тренировки (при размонтировании страницы)
const clearSelectedIds = createAction('training/clearSelectedIds');

const trainingActions = {
  addSelectedId,
  delSelectedId,
  clearSelectedIds,
};
export default trainingActions;
