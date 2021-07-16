import React, { Component } from 'react';
import { connect } from 'react-redux';
import LibraryBookEditor from '../LibraryBookEditor/LibraryBookEditor';
import booksActions from '../../../redux/books/booksActions';
import styles from './LibraryForm.module.scss';

const initialState = {
  title: '',
  author: '',
  year: '',
  totalPages: '',
};

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
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.labelName}>
          <p className={styles.labelNameTitle}>Назва книги</p>
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
          <p className={styles.labelAuthorTitle}>Автор книги</p>
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
          <p className={styles.labelYearTitle}>Рік випуску</p>
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
          <p className={styles.labelPageTitle}>Кількість сторінок</p>
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
    );
  }
}

const mapDispatchToProps = {
  onAddBook: booksActions.addBooksSuccess,
};

export default connect(null, mapDispatchToProps)(LibraryForm);
