import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import styles from './MyGoals.module.scss';
import trainingSelectors from '../../../redux/training/trainingSelectors';
import { LangContext } from '../../App/App';

const MyGoals = ({ days }) => {
  const { language } = useContext(LangContext);

  const books = useSelector(trainingSelectors.getSelectBooks);

  const booksLeft = books.filter(book => book.status === 'read');

  const isTraining = useSelector(trainingSelectors.getIsStarted);

  return (
    <>
      {!isTraining ? (
        <div className={styles.myGoalsMainBox}>
          <div className={styles.myGoalsHeadingBox}>
            <h3 className={styles.myGoalsHeading}>
              {language.trainingPage.goalsCard.title}
            </h3>
          </div>
          <div className={styles.statsBox}>
            <ul className={styles.myGoalsStatsList}>
              <li className={styles.myGoalsStatsListitem}>
                <span className={styles.myGoalsStatsDigitBox}>
                  <p className={styles.myGoalsStatsDigit}>{books.length}</p>
                </span>
                <span className={styles.myGoalsStatsText}>
                  {language.trainingPage.goalsCard.books}
                </span>
              </li>
              <li className={styles.myGoalsStatsListitem}>
                <span className={styles.myGoalsStatsDigitBox}>
                  <p className={styles.myGoalsStatsDigit}>{days}</p>
                </span>
                <span className={styles.myGoalsStatsText}>
                  {language.trainingPage.goalsCard.days}
                </span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.myGoalsMainBox_training}>
          <div className={styles.myGoalsHeadingBox_training}>
            <h3 className={styles.myGoalsHeading}>
              {language.trainingPage.goalsCard.title}
            </h3>
          </div>
          <div className={styles.statsBox}>
            <ul className={styles.myGoalsStatsList_training}>
              <li className={styles.myGoalsStatsListitem_training}>
                <span className={styles.myGoalsStatsDigitBox_training}>
                  <p className={styles.myGoalsStatsDigit_training}>{books}</p>
                </span>
                <span className={styles.myGoalsStatsText}>
                  {language.trainingPage.goalsCard.books}
                </span>
              </li>
              <li className={styles.myGoalsStatsListitem_training}>
                <span className={styles.myGoalsStatsDigitBox_training}>
                  <p className={styles.myGoalsStatsDigit_training}>{days}</p>
                </span>
                <span className={styles.myGoalsStatsText}>
                  {language.trainingPage.goalsCard.days}
                </span>
              </li>
              <li className={styles.myGoalsStatsListitem_training}>
                <span className={styles.myGoalsStatsDigitBox_training}>
                  <p className={styles.myGoalsStatsDigit_training_accent}>
                    {booksLeft.length}
                  </p>
                </span>
                <span className={styles.myGoalsStatsText}>
                  {language.trainingPage.goalsCard.remain}
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MyGoals;
