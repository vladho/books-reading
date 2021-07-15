import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HiOutlineCalendar, HiChevronDown } from 'react-icons/hi';

import trainingListBooks from '../../../json/trainingListBooks.json';
import styles from './TrainingForm.module.scss';

const TrainingForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [isBooksListShown, setIsBooksListShown] = useState(false);
  const [selectedBook, setSelectedBook] = useState('');

  return (
    <form className={styles.form} autoComplete="off">
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
            value={selectedBook.title}
            placeholder="Choose books from the library"
            onClick={e => setIsBooksListShown(!isBooksListShown)}
            className={styles.formSelect}
          />
          <HiChevronDown className={styles.chevronDownIcon} />

          {isBooksListShown && (
            <ul className={styles.booksList}>
              {trainingListBooks.map(book => (
                <li
                  key={book.id}
                  className={styles.book}
                  onClick={e => {
                    setSelectedBook(book);
                    setIsBooksListShown(!isBooksListShown);
                  }}
                >
                  {book.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" className={styles.formButton}>
          Add
        </button>
      </div>
    </form>
  );
};

export default TrainingForm;
