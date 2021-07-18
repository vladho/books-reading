import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HiChevronDown } from 'react-icons/hi';
import ResultItem from './ResultItem';
import styles from './Results.module.scss';

const Results = () => {
  const data = [
    { date: '22.02.2019', time: '08:10:23', pages: '40' },
    { date: '11.11.2011', time: '11:11:11', pages: '111' },
    { date: '30.10.2000', time: '00:00:00', pages: '200' },
  ];

  const [resultDate, setResultDate] = useState(null);
  const [resultPages, setResultPages] = useState(null);

  return (
    <div className={styles.resultsMainBox}>
      <h3 className={styles.resultsHeading}>Results</h3>
      <div className={styles.inputLabelBox}>
        <p className={styles.inputLabel}>Date</p>
        <p className={styles.inputLabel}>Amount of pages</p>
      </div>

      <div>
        <form className={styles.form} autoComplete="off">
          <div className={styles.inputsBox}>
            <DatePicker
              selected={resultDate}
              onChange={date => setResultDate(date)}
              dateFormat="dd.MM.yyyy"
              minDate={new Date()}
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
      <div>
        <h3 className={styles.statisticsHeading}>
          <span className={styles.horizontalBarLeft}></span>Statistics
          <span className={styles.horizontalBarRight}></span>
        </h3>
        <ul>
          {data.map(item => (
            <ResultItem date={item.date} time={item.time} pages={item.pages} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;
