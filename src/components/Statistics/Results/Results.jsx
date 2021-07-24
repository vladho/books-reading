import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HiChevronDown } from 'react-icons/hi';
import moment from 'moment';

import ResultItem from './ResultItem';
import styles from './Results.module.scss';
import trainingActions from '../../../redux/training/trainingActions';
import trainingSelectors from '../../../redux/training/trainingSelectors';

const Results = () => {
  const dispatch = useDispatch();

  const start = useSelector(trainingSelectors.getStartDate);
  const end = useSelector(trainingSelectors.getEndDate);
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
      <h3 className={styles.resultsHeading}>Results</h3>
      <div className={styles.inputLabelBox}>
        <p className={styles.inputLabel}>Date</p>
        <p className={styles.inputLabel}>Amount of pages</p>
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
              minDate={new Date(start)}
              maxDate={new Date(end)}
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
            Add results
          </button>
        </form>
      </div>
      {results.length > 0 && (
        <div>
          <h3 className={styles.statisticsHeading}>
            <span className={styles.horizontalBarLeft}></span>Statistics
            <span className={styles.horizontalBarRight}></span>
          </h3>
          <ul className={styles.statiscicsList}>
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

// const test = results
//   .map(day => {
//     const date = day.date;
//     const res = day.stats.map(({ time, pages }) => {
//       return { date, time, pages };
//     });
//     return res;
//   })
//   .flat();
