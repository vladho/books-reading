import React from 'react';
import styles from './Results.module.scss';

const resultItem = ({ date, time, pages }) => {
  return (
    <li className={styles.statiscicsListItem}>
      <p className={styles.statisticsText}>{date}</p>
      <p className={styles.statisticsTextSecondary}>{time}</p>
      <p className={styles.statisticsText}>
        {pages}
        <span className={styles.statisticsTextSecondary}> pages</span>
      </p>
    </li>
  );
};

export default resultItem;
