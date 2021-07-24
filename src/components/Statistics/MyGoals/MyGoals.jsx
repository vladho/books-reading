import { useSelector } from 'react-redux';
import styles from './MyGoals.module.scss';
import trainingSelectors from '../../../redux/training/trainingSelectors';

const MyGoals = ({ days: daysSelected }) => {
  const isTraining = useSelector(trainingSelectors.getIsStarted);
  // const isTraining = false;

  const booksSelected = useSelector(trainingSelectors.getSelectBooks);

  const books = useSelector(trainingSelectors.getBooks);
  const booksLeft = books.filter(book => book.status === 'read');

  const start = useSelector(trainingSelectors.getStartDate);
  const end = useSelector(trainingSelectors.getEndDate);
  const startUnix = new Date(start.split('.').reverse().join('.')).getTime();
  const endUnix = new Date(end.split('.').reverse().join('.')).getTime();
  const days = (endUnix - startUnix) / 1000 / 60 / 60 / 24 + 1 || 0;

  return (
    <>
      {!isTraining ? (
        <div className={styles.myGoalsMainBox}>
          <div className={styles.myGoalsHeadingBox}>
            <h3 className={styles.myGoalsHeading}>My Goals</h3>
          </div>
          <div className={styles.statsBox}>
            <ul className={styles.myGoalsStatsList}>
              <li className={styles.myGoalsStatsListitem}>
                <span className={styles.myGoalsStatsDigitBox}>
                  <p className={styles.myGoalsStatsDigit}>{books.length}</p>
                </span>
                <span className={styles.myGoalsStatsText}>Amount of books</span>
              </li>
              <li className={styles.myGoalsStatsListitem}>
                <span className={styles.myGoalsStatsDigitBox}>
                  <p className={styles.myGoalsStatsDigit}>
                    {isTraining ? daysSelected : days}
                  </p>
                </span>
                <span className={styles.myGoalsStatsText}>Amount of days</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.myGoalsMainBox_training}>
          <div className={styles.myGoalsHeadingBox_training}>
            <h3 className={styles.myGoalsHeading}>My Goals</h3>
          </div>
          <div className={styles.statsBox}>
            <ul className={styles.myGoalsStatsList_training}>
              <li className={styles.myGoalsStatsListitem_training}>
                <span className={styles.myGoalsStatsDigitBox_training}>
                  <p className={styles.myGoalsStatsDigit_training}>
                    {isTraining ? books.length : booksSelected.length}
                  </p>
                </span>
                <span className={styles.myGoalsStatsText}>Amount of books</span>
              </li>
              <li className={styles.myGoalsStatsListitem_training}>
                <span className={styles.myGoalsStatsDigitBox_training}>
                  <p className={styles.myGoalsStatsDigit_training}>{days}</p>
                </span>
                <span className={styles.myGoalsStatsText}>Amount of days</span>
              </li>
              <li className={styles.myGoalsStatsListitem_training}>
                <span className={styles.myGoalsStatsDigitBox_training}>
                  <p className={styles.myGoalsStatsDigit_training_accent}>
                    {booksLeft.length}
                  </p>
                </span>
                <span className={styles.myGoalsStatsText}>Books left</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MyGoals;
