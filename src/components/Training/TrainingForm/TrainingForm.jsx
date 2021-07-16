import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormik } from 'formik';
import moment from 'moment';
import { HiOutlineCalendar, HiChevronDown } from 'react-icons/hi';

import DatePickerInput from '../DatePicker/DatePicker';
import trainingListBooks from '../../../json/trainingListBooks.json';
import trainingFormSchema from '../../../helpers/validation/trainingFormSchema';
import styles from './TrainingForm.module.scss';

const TrainingForm = () => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [isBooksListShown, setIsBooksListShown] = useState(false);

  const formik = useFormik({
    initialValues: {
      start: '',
      end: '',
      book: '',
    },
    validationSchema: trainingFormSchema,
    onSubmit: values => {
      setSelectedBooks(prev => [...prev, values.book]);
    },
  });

  const handleStartDate = date => {
    const start = moment(date).format('YYYY-MM-DD');
    formik.setFieldValue('start', start);
    setStart(start);
  };
  const handleEndDate = date => {
    const end = moment(date).format('YYYY-MM-DD');
    formik.setFieldValue('end', end);
    setEnd(end);
  };

  return (
    <form className={styles.form} autoComplete="off">
      <h1 className={styles.formTitle}>My training</h1>
      <div className={styles.calendarsContainer}>
        <div className={styles.datePickerWrapper}>
          <DatePickerInput
            value={formik.values.start}
            placeholderText="Start"
            onChange={handleStartDate}
            pickedDate={start ? new Date(start) : ''}
          />
        </div>
        <div className={styles.datePickerWrapper}>
          <DatePickerInput
            value={formik.values.start}
            placeholderText="Finish"
            onChange={handleEndDate}
            pickedDate={end ? new Date(end) : ''}
          />
        </div>
      </div>

      <div className={styles.selectAndButton}>
        <div className={styles.selectContainer}>
          <input
            type="text"
            name="booksSelect"
            // value={selectedBook.title}
            placeholder="Choose books from the library"
            onClick={() => setIsBooksListShown(!isBooksListShown)}
            className={styles.formSelect}
          />
          <HiChevronDown className={styles.chevronDownIcon} />

          {isBooksListShown && (
            <ul className={styles.booksList}>
              {trainingListBooks.map(book => (
                <li
                  key={book.id}
                  className={styles.book}
                  onClick={() => {
                    // setSelectedBook(book);
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
