import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LangContext } from '../../App/App';
import {
  trainingOperations as ops,
  trainingSelectors as sls,
} from '../../../redux/training';

import styles from './StartTrainingBtn.module.scss';

const StartTrainingBtn = () => {
  const { language } = useContext(LangContext);
  const dispatch = useDispatch();

  const startDate = useSelector(sls.selectStartDate);
  const finishDate = useSelector(sls.selectEndDate);
  const books = useSelector(sls.getSelectIds);

  return (
    <button
      onClick={() =>
        dispatch(ops.startTraining({ startDate, finishDate, books }))
      }
      type="submit"
      className={styles.button}
    >
      {language.trainingPage.startBtn}
    </button>
  );
};

export default StartTrainingBtn;
