import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    HiOutlineArrowNarrowLeft,
    HiOutlineCalendar,
    HiChevronDown,
} from 'react-icons/hi';

import styles from './TrainingForm.module.scss';

const TrainingForm = () => {
    const [startDate, setStartDate] = useState(null);
    const [finishDate, setFinishDate] = useState(null);

    return (
        <form className={styles.form} autoComplete="off">
            <HiOutlineArrowNarrowLeft fontSize="32" className={styles.goBack} />
            <h1 className={styles.formTitle}>My training</h1>
            <div className={styles.calendarsContainer}>
                <div className={styles.inputContainer}>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        placeholderText="Start"
                        dateFormat="dd.MM.yyyy"
                        minDate={new Date()}
                        className={styles.formInput}
                    />
                    <HiOutlineCalendar className={styles.calendarIcon} />
                    <HiChevronDown className={styles.chevronDownIcon} />
                </div>
                <div className={styles.inputContainer}>
                    <DatePicker
                        selected={finishDate}
                        onChange={date => setFinishDate(date)}
                        placeholderText="Finish"
                        dateFormat="dd.MM.yyyy"
                        minDate={new Date()}
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
