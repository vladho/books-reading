import React from 'react';
import {
    HiOutlineArrowNarrowLeft,
    HiOutlineCalendar,
    HiChevronDown,
} from 'react-icons/hi';

import styles from './TrainingForm.module.scss';

const TrainingForm = () => {
    return (
        <form className={styles.form} autoComplete="off">
            <HiOutlineArrowNarrowLeft fontSize="32" className={styles.goBack} />
            <h1 className={styles.formTitle}>My training</h1>
            <div className={styles.calendarsContainer}>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        name="StartDate"
                        placeholder="Start"
                        className={styles.formInput}
                    />
                    <HiOutlineCalendar className={styles.calendarIcon} />
                    <HiChevronDown className={styles.chevronDownIcon} />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        name="FinishDate"
                        placeholder="Finish"
                        className={styles.formInput}
                    />
                    <HiOutlineCalendar className={styles.calendarIcon} />
                    <HiChevronDown className={styles.chevronDownIcon} />
                </div>
            </div>

            <div className={styles.selectAndButton}>
                <div className={styles.selectContainer}>
                    <input
                        type="text"
                        name="booksSelect"
                        placeholder="Choose books from the library"
                        className={styles.formSelect}
                    />
                    <HiChevronDown className={styles.chevronDownIcon} />
                </div>

                <button type="submit" className={styles.formButton}>
                    Add
                </button>
            </div>
        </form>
    );
};

export default TrainingForm;
