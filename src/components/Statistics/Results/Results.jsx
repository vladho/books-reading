import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HiChevronDown } from 'react-icons/hi';
import moment from 'moment';

import { LangContext } from '../../App/App';
import ResultItem from './ResultItem';
import styles from './Results.module.scss';
import trainingActions from '../../../redux/training/trainingActions';
import trainingSelectors from '../../../redux/training/trainingSelectors';

const Results = () => {
  const { language } = useContext(LangContext);
  const dispatch = useDispatch();

  const start = useSelector(trainingSelectors.selectStartDate);
  const end = useSelector(trainingSelectors.selectEndDate);
  const results = useSelector(trainingSelectors.getResults);

  const [resultDate, setResultDate] = useState(null);
  const [resultPages, setResultPages] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const date = e.target.resultDate.value;
    const time = moment().format('h:mm:ss');
    const pages = e.target.resultPages.value;
    dispatch(trainingActions.addResult({ date, time, pages }));
  };

  return (
    <div className={styles.resultsMainBox}>
      <h3 className={styles.resultsHeading}>
        {language.trainingPage.resultsCard.title}
      </h3>
      <div className={styles.inputLabelBox}>
        <p className={styles.inputLabel}>
          {language.trainingPage.resultsCard.date}
        </p>
        <p className={styles.inputLabel}>
          {language.trainingPage.resultsCard.pages}
        </p>
      </div>

      <div>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <div className={styles.inputsBox}>
            <DatePicker
              name="resultDate"
              selected={resultDate}
              onChange={date => setResultDate(date)}
              dateFormat="dd.MM.yyyy"
              minDate={start}
              maxDate={end}
              className={styles.formInput}
            />
            <HiChevronDown className={styles.chevronDownIcon} />
            <input
              type="number"
              name="resultPages"
              onChange={pages => setResultPages(pages)}
              className={styles.formInput}
            />
          </div>
          <button type="submit" className={styles.formButton}>
            {language.trainingPage.resultsCard.addBtn}
          </button>
        </form>
      </div>
      {results.length > 0 && (
        <div>
          <h3 className={styles.statisticsHeading}>
            <span className={styles.horizontalBarLeft}></span>
            {language.trainingPage.statisticsCard.title}
            <span className={styles.horizontalBarRight}></span>
          </h3>
          <ul>
            {results.map(item => (
              <ResultItem
                date={item.date}
                time={item.time}
                pages={item.pages}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Results;
