import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import LibraryBookEditor from '../LibraryBookEditor/LibraryBookEditor';
import booksOperations from '../../../redux/books/booksOperations';
import styles from './LibraryForm.module.scss';

const initialState = {
  title: '',
  author: '',
  year: '',
  totalPages: '',
};

// const schema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Min значение 2')
//     .max(100, 'Max значение 100')
//     .required('Заполните поле "Название книги"')
//     .typeError('Введите наименование от 2х символов'),
//   author: Yup.string()
//     .min(2, 'Min значение 2')
//     .max(100, 'Max значение 100')
//     .required('Заполните поле "Автор книги"')
//     .typeError('Введите наименование от 2х символов'),
//   year: Yup.number()
//     .min(1000, 'Min значение 1000')
//     .max(2021, 'Max значение 2021')
//     .required('Заполните поле "Год"')
//     .typeError('Введите число от 1000 до 2021'),
//   pages: Yup.number()
//     .min(2, 'Min значение 2')
//     .max(10000, 'Max значение 10000')
//     .required('Заполните поле "Pages"')
//     .typeError('Введите число от 2 до 10000'),
// });

class LibraryForm extends Component {
  //   static defaultProps = {};

  //   static propTypes = {};

  state = { ...initialState };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onAddBook(this.state);
    this.setState({ ...initialState });
  };

  render() {
    const { title, author, year, totalPages } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
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
      </>
    );
  }
}

const mapDispatchToProps = {
  onAddBook: booksOperations.addBook,
};

export default connect(null, mapDispatchToProps)(LibraryForm);
