import styles from './MyGoals.module.scss';

const MyGoals = ({
    books = 3,
    days = 14,
    booksLeft = 2,
    isTraining = true,
}) => {
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
                                    <p className={styles.myGoalsStatsDigit}>
                                        {books}
                                    </p>
                                </span>
                                <span className={styles.myGoalsStatsText}>
                                    Amount of books
                                </span>
                            </li>
                            <li className={styles.myGoalsStatsListitem}>
                                <span className={styles.myGoalsStatsDigitBox}>
                                    <p className={styles.myGoalsStatsDigit}>
                                        {days}
                                    </p>
                                </span>
                                <span className={styles.myGoalsStatsText}>
                                    Amount of days
                                </span>
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
                            <li
                                className={styles.myGoalsStatsListitem_training}
                            >
                                <span
                                    className={
                                        styles.myGoalsStatsDigitBox_training
                                    }
                                >
                                    <p
                                        className={
                                            styles.myGoalsStatsDigit_training
                                        }
                                    >
                                        {books}
                                    </p>
                                </span>
                                <span className={styles.myGoalsStatsText}>
                                    Amount of books
                                </span>
                            </li>
                            <li
                                className={styles.myGoalsStatsListitem_training}
                            >
                                <span
                                    className={
                                        styles.myGoalsStatsDigitBox_training
                                    }
                                >
                                    <p
                                        className={
                                            styles.myGoalsStatsDigit_training
                                        }
                                    >
                                        {days}
                                    </p>
                                </span>
                                <span className={styles.myGoalsStatsText}>
                                    Amount of days
                                </span>
                            </li>
                            <li
                                className={styles.myGoalsStatsListitem_training}
                            >
                                <span
                                    className={
                                        styles.myGoalsStatsDigitBox_training
                                    }
                                >
                                    <p
                                        className={
                                            styles.myGoalsStatsDigit_training_accent
                                        }
                                    >
                                        {booksLeft}
                                    </p>
                                </span>
                                <span className={styles.myGoalsStatsText}>
                                    Books left
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
