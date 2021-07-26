import React, { useContext } from 'react';

import { LangContext } from '../../App/App';
import styles from './Results.module.scss';

const ResultItem = ({ date, time, pages }) => {
  const { language } = useContext(LangContext);

  return (
    <li className={styles.statiscicsListItem}>
      <p className={styles.statisticsText}>{date}</p>
      <p className={styles.statisticsTextSecondary}>{time}</p>
      <p className={styles.statisticsText}>
        {pages}
        <span className={styles.statisticsTextSecondary}>
          {language.trainingPage.statisticsCard.pages}
        </span>
      </p>
    </li>
  );
};

export default ResultItem;
