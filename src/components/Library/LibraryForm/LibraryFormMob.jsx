import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { LangContext } from '../../App/App';
import booksOperations from '../../../redux/books/booksOperations';
import schemaValidAddBook from '../../../helpers/validation/schemaValidAddBook';
import styles from './LibraryForm.module.scss';

const initialState = {
  title: '',
  author: '',
  year: '',
  totalPages: '',
};

const LibraryForm = () => {
  const { language } = useContext(LangContext);

  const dispatch = useDispatch();

  const onHandleSubmit = values => {
    dispatch(booksOperations.addBook(values));
  };

  return (
    <>
      <Formik
        initialValues={initialState}
        validationSchema={schemaValidAddBook}
        onSubmit={(values, actions) => {
          onHandleSubmit({ ...values });
          actions.resetForm({ initialState });
        }}
      >
        {({ values }) => (
          <Form>
            <div className={styles.formMob}>
              <label className={styles.labelName}>
                {/* <p className={styles.labelNameTitle}>Book title</p> */}
                <p className={styles.labelNameTitle}>
                  {language.libraryPage.bookForm.title}
                </p>
                <Field
                  className={styles.labelNameInput}
                  type="text"
                  placeholder="..."
                  value={values.title}
                  name="title"
                />
                <ErrorMessage
                  name="title"
                  className={styles.formError}
                  component="div"
                />
              </label>
              <label className={styles.labelAuthor}>
                {/* <p className={styles.labelAuthorTitle}>Author</p> */}
                <p className={styles.labelAuthorTitle}>
                  {language.libraryPage.bookForm.author}
                </p>
                <Field
                  className={styles.labelAuthorInput}
                  type="text"
                  placeholder="..."
                  value={values.author}
                  name="author"
                />
                <ErrorMessage
                  name="author"
                  className={styles.formError}
                  component="div"
                />
              </label>
              <label className={styles.labelYear}>
                {/* <p className={styles.labelYearTitle}>Publication date</p> */}
                <p className={styles.labelYearTitle}>
                  {language.libraryPage.bookForm.publication}
                </p>
                <Field
                  className={styles.labelYearInput}
                  type="text"
                  placeholder="..."
                  name="year"
                  value={values.year}
                />
                <ErrorMessage
                  name="year"
                  className={styles.formError}
                  component="div"
                />
              </label>
              <label className={styles.labelPage}>
                {/* <p className={styles.labelPageTitle}>Amount of pages</p> */}
                <p className={styles.labelPageTitle}>
                  {language.libraryPage.bookForm.pages}
                </p>
                <Field
                  className={styles.labelPageInput}
                  type="text"
                  placeholder="..."
                  name="totalPages"
                  value={values.totalPages}
                />
                <ErrorMessage
                  name="totalPages"
                  className={styles.formError}
                  component="div"
                />
              </label>
              {/* <button type="submit" className={styles.btnAddForm}>
                Add
              </button> */}
              <button type="submit" className={styles.btnAddForm}>
                {language.libraryPage.bookForm.button}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LibraryForm;
