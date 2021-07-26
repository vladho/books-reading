import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import moment from 'moment';

import { LangContext } from '../../App/App';

import trainingActions from '../../../redux/training/trainingActions';
import trainingSelectors from '../../../redux/training/trainingSelectors';

import trainingFormSchema from '../../../helpers/validation/trainingFormSchema';
import DatePickerInput from '../DatePicker/DatePicker';
import BooksSelector from '../Select/BooksSelector';
import styles from './TrainingForm.module.scss';

const TrainingForm = () => {
  const { language } = useContext(LangContext);
  const start = useSelector(trainingSelectors.selectStartDate);
  const end = useSelector(trainingSelectors.selectEndDate);
  const selectedBooks = useSelector(trainingSelectors.getSelectBooks);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      start: start ? start : '',
      end: end ? end : '',
      book: '',
    },
    validationSchema: trainingFormSchema,
    onSubmit: values => {
      if (selectedBooks.some(book => book._id === values.book._id)) {
        return;
      }

      dispatch(trainingActions.addSelectedId(values.book._id));
    },
  });

  const handleStartDate = date => {
    const start = moment(date).format('YYYY-MM-DD');
    formik.setFieldValue('start', start);
    dispatch(trainingActions.trainingStartDate(start));
  };

  const handleEndDate = date => {
    const end = moment(date).format('YYYY-MM-DD');
    formik.setFieldValue('end', end);
    dispatch(trainingActions.trainingEndDate(end));
  };

  const handleBook = value => {
    formik.setFieldValue('book', value);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={styles.form}
      autoComplete="off"
    >
      <h1 className={styles.formTitle}>{language.trainingPage.form.title}</h1>
      <div className={styles.calendarsContainer}>
        <div className={styles.datePickerWrapper}>
          <DatePickerInput
            value={formik.values.start}
            placeholderText={language.trainingPage.form.startTraining}
            onChange={handleStartDate}
            pickedDate={start ? new Date(start) : ''}
          />
          {formik.touched.start && formik.errors.start ? (
            <p className={styles.error}>{formik.errors.start}</p>
          ) : null}
        </div>
        <div className={styles.datePickerWrapper}>
          <DatePickerInput
            value={formik.values.end}
            placeholderText={language.trainingPage.form.endTraining}
            onChange={handleEndDate}
            pickedDate={end ? new Date(end) : ''}
          />
          {formik.touched.end && formik.errors.end ? (
            <p className={styles.error}>{formik.errors.end}</p>
          ) : null}
        </div>
      </div>

      <div className={styles.selectAndButton}>
        <div className={styles.selectContainer}>
          <BooksSelector
            value={formik.values.book}
            onChange={handleBook}
            selectedBooks={selectedBooks}
          />
          {formik.touched.book && formik.errors.book ? (
            <p className={styles.error}>{formik.errors.book}</p>
          ) : null}
        </div>

        <button type="submit" className={styles.formButton}>
          {language.trainingPage.form.button}
        </button>
      </div>
    </form>
  );
};

export default TrainingForm;
