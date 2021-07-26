import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './TimerLogicOfYear.module.scss';

const TimerLogic = () => {
  const year = new Date(new Date().getFullYear() + 1, 0, 1).getTime();

  const [, setDateTime] = useState(new Date());
  const oneDay = 86400000;

  const diff = year + oneDay - new Date().getTime();

  const days = () => {
    if (Math.floor(diff / (1000 * 60 * 60 * 24)) > 99) {
      return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
    if (Math.floor(diff / (1000 * 60 * 60 * 24)) > 9) {
      return '0' + Math.floor(diff / (1000 * 60 * 60 * 24));
    }
    return '00' + Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  const hours = () => {
    if (Math.floor((diff / (1000 * 60 * 60)) % 24) > 9) {
      return Math.floor((diff / (1000 * 60 * 60)) % 24);
    }
    return '0' + Math.floor((diff / (1000 * 60 * 60)) % 24);
  };
  const minutes = () => {
    if (Math.floor((diff / 1000 / 60) % 60) > 9) {
      return Math.floor((diff / 1000 / 60) % 60);
    }
    return '0' + Math.floor((diff / 1000 / 60) % 60);
  };

  const seconds = () => {
    if (Math.floor((diff / 1000) % 60) > 9) {
      return Math.floor((diff / 1000) % 60);
    }
    return '0' + Math.floor((diff / 1000) % 60);
  };

  const time = {
    days: days(),
    hours: hours(),
    minutes: minutes(),
    seconds: seconds(),
  };

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className={styles.dateGroup}>
      <div className={classnames(styles.date, styles.days)}>{`${
        time.days || '00'
      }`}</div>
      <div className={styles.date}>{`:`}</div>
      <div className={classnames(styles.date, styles.hours)}>{`${
        time.hours || '00'
      }`}</div>
      <div className={styles.date}>{`:`}</div>
      <div className={classnames(styles.date, styles.minutes)}>{`${
        time.minutes || '00'
      }`}</div>
      <div className={styles.date}>{`:`}</div>
      <div className={classnames(styles.date, styles.seconds)}>{`${
        time.seconds || '00'
      }`}</div>
    </div>
  );
};

export default TimerLogic;
