import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import moment from 'moment';

import trainingFormSchema from '../../../helpers/validation/trainingFormSchema';
import DatePickerInput from '../DatePicker/DatePicker';
import BooksSelector from '../Select/BooksSelector';
import styles from './TrainingForm.module.scss';
import trainingActions from '../../../redux/training/trainingActions';

const TrainingForm = () => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      start: '',
      end: '',
      book: '',
    },
    validationSchema: trainingFormSchema,
    onSubmit: values => {
      dispatch(trainingActions.addSelectedId(values.book._id));
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

  const handleBook = value => {
    formik.setFieldValue('book', value);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={styles.form}
      autoComplete="off"
    >
      <h1 className={styles.formTitle}>My training</h1>
      <div className={styles.calendarsContainer}>
        <div className={styles.datePickerWrapper}>
          <DatePickerInput
            value={formik.values.start}
            placeholderText="Start"
            onChange={handleStartDate}
            pickedDate={start ? new Date(start) : ''}
          />
          {formik.touched.start && formik.errors.start ? (
            <p className={styles.error}>{formik.errors.start}</p>
          ) : null}
        </div>
        <div className={styles.datePickerWrapper}>
          <DatePickerInput
            value={formik.values.start}
            placeholderText="Finish"
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
          <BooksSelector value={formik.values.book} onChange={handleBook} />
          {formik.touched.book && formik.errors.book ? (
            <p className={styles.error}>{formik.errors.book}</p>
          ) : null}
        </div>

        <button type="submit" className={styles.formButton}>
          Add
        </button>
      </div>
    </form>
  );
};

export default TrainingForm;
