import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import booksOperations from '../../../redux/books/booksOperations';
import schemaValidAddBook from '../../../helpers/validation/schemaValidAddBook';
import styles from './LibraryForm.module.scss';

const initialState = {
  title: '',
  author: '',
  year: '',
  totalPages: '',
};

class LibraryForm extends Component {
  state = { ...initialState };

  render() {
    const onHandleSubmit = values => {
      this.props.onAddBook(values);
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
              <div className={styles.form}>
                <label className={styles.labelName}>
                  <p className={styles.labelNameTitle}>Book title</p>
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
                  <p className={styles.labelAuthorTitle}>Author</p>
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
                  <p className={styles.labelYearTitle}>Publication date</p>
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
                  <p className={styles.labelPageTitle}>Amount of pages</p>
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
                <button type="submit" className={styles.btnAddForm}>
                  Add
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapDispatchToProps = {
  onAddBook: booksOperations.addBook,
};

export default connect(null, mapDispatchToProps)(LibraryForm);
