import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import booksOperations from '../../../redux/books/booksOperations';
import styles from './LibraryForm.module.scss';

const initialState = {
  title: '',
  author: '',
  year: '',
  totalPages: '',
};

const schemaValidAddBook = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too short title !')
    .max(100, 'Too long title, no more than 100 letters!')
    .required('Fill Book Title, please!'),
  author: Yup.string()
    .min(2, 'Too short author"s name!')
    .max(50, 'Too long author"s name, no more than 50 letters!')
    .required('Fill Book Author, please!'),
  year: Yup.number()
    .min(1445, 'Too old! Typographic printing in Europe invented in 1445!')
    .max(2022, 'Not yet printed!')
    .required('Fill year, please!'),
  totalPages: Yup.number()
    .min(2, 'Too Short Book!')
    .max(10000, 'Too Long Book!')
    .required('Enter pages!'),
});

class LibraryForm extends Component {
  state = { ...initialState };

  // handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   this.props.onAddBook(this.state);
  //   this.setState({ ...initialState });
  // };

  render() {
    // const { title, author, year, totalPages } = this.state;

    const onHandleSubmit = values => {
      console.log('onHandleSubmit values:', values);
      this.props.onAddBook(values);
    };

    return (
      <>
        <Formik
          initialValues={initialState}
          validationSchema={schemaValidAddBook}
          validateOnBlur
          onSubmit={(values, actions) => {
            // console.log('Formik onSubmit:', values, actions);
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
                  <ErrorMessage name="title" />
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
                  <ErrorMessage name="author" className={styles.formError} />
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
                  <ErrorMessage name="year" />
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
                  <ErrorMessage name="totalPages" />
                </label>
                <button type="submit" className={styles.btnAddForm}>
                  Add
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.labelName}>
            <p className={styles.labelNameTitle}>Book title</p>
            <input
              type="text"
              placeholder="..."
              name="title"
              value={title}
              onChange={this.handleChange}
              className={styles.labelNameInput}
            />
          </label>
          <label className={styles.labelAuthor}>
            <p className={styles.labelAuthorTitle}>Author</p>
            <input
              type="text"
              placeholder="..."
              name="author"
              value={author}
              onChange={this.handleChange}
              className={styles.labelAuthorInput}
            />
          </label>
          <label className={styles.labelYear}>
            <p className={styles.labelYearTitle}>Publication date</p>
            <input
              type="text"
              placeholder="..."
              name="year"
              value={year}
              onChange={this.handleChange}
              className={styles.labelYearInput}
            />
          </label>
          <label className={styles.labelPage}>
            <p className={styles.labelPageTitle}>Amount of pages</p>
            <input
              type="text"
              placeholder="..."
              name="totalPages"
              value={totalPages}
              onChange={this.handleChange}
              className={styles.labelPageInput}
            />
          </label>
          <LibraryBookEditor onAddBook={this.handleSubmit} />
        </form>
      </> */}
      </>
    );
  }
}

const mapDispatchToProps = {
  onAddBook: booksOperations.addBook,
};

export default connect(null, mapDispatchToProps)(LibraryForm);
