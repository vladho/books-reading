import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import booksSelectors from '../../../redux/books/booksSelectors';
import booksOperations from '../../../redux/books/booksOperations';

import styles from './LibraryList.module.scss';
import book from '../../../assets/icons/book.svg';
import trash from '../../../assets/icons/delete.svg';

function LibraryList({ books, onRemove }) {
  return (
    <>
      {books.some(book => book.status === 'done') && (
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Already read</h2>
          <div className={styles.categoryListTitle}>
            <h3 className={styles.categoryListTitleItemNameDone}>Book title</h3>
            <h3 className={styles.categoryListTitleItemAuthorDone}>Author</h3>
            <h3 className={styles.categoryListTitleItemYearDone}>Year</h3>
            <h3 className={styles.categoryListTitleItemPageDone}>Pages</h3>
            <h3 className={styles.categoryListTitleItemRateDone}>Rating</h3>
          </div>
          <ul>
            {books.map(
              ({ _id, title, author, year, totalPages, status }) =>
                status === 'done' && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={book} className={styles.iconDone} />
                    <p className={styles.bookListItemNameDone}>{title}</p>
                    <span className={styles.bookListItemAuthorDoneMob}>
                      Author:
                    </span>
                    <p className={styles.bookListItemAuthorDone}>{author}</p>
                    <p className={styles.bookListItemYearDone}>{year}</p>
                    <p className={styles.bookListItemPageDone}>{totalPages}</p>
                    <div className={styles.stars}></div>
                    <button type="button" className={styles.buttonRezume}>
                      Resume
                    </button>
                  </li>
                ),
            )}
          </ul>
        </div>
      )}
      {books.some(book => book.status === 'read') && (
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Reading now</h2>
          <div className={styles.categoryListTitle}>
            <h3 className={styles.categoryListTitleItemName}>Book title</h3>
            <h3 className={styles.categoryListTitleItemAuthor}>Author</h3>
            <h3 className={styles.categoryListTitleItemYear}>Year</h3>
            <h3 className={styles.categoryListTitleItemPage}>Pages</h3>
          </div>
          <ul>
            {books.map(
              ({ _id, title, author, year, totalPages, status }) =>
                status === 'read' && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={book} className={styles.iconRead} />
                    <p className={styles.bookListItemName}>{title}</p>
                    <p className={styles.bookListItemAuthor}>{author}</p>
                    <p className={styles.bookListItemYear}>{year}</p>
                    <p className={styles.bookListItemPage}>{totalPages}</p>
                  </li>
                ),
            )}
          </ul>
        </div>
      )}
      {books.some(book => book.status === 'plan') && (
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Going to read</h2>
          <div className={styles.categoryListTitle}>
            <h3 className={styles.categoryListTitleItemName}>Book title</h3>
            <h3 className={styles.categoryListTitleItemAuthor}>Author</h3>
            <h3 className={styles.categoryListTitleItemYear}>Year</h3>
            <h3 className={styles.categoryListTitleItemPage}>Pages</h3>
          </div>
          <ul>
            {books.map(
              ({ _id, title, author, year, totalPages, status }) =>
                status === 'plan' && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={book} className={styles.iconPlan} />
                    <p className={styles.bookListItemName}>{title}</p>
                    <p className={styles.bookListItemAuthor}>{author}</p>
                    <p className={styles.bookListItemYear}>{year}</p>
                    <p className={styles.bookListItemPage}>{totalPages}</p>
                    <button
                      type="button"
                      onClick={() => onRemove(_id)}
                      className={styles.btnTrash}
                    >
                      <ReactSVG src={trash} className={styles.trash} />
                    </button>
                  </li>
                ),
            )}
          </ul>
          <NavLink to="/training" className={styles.link}>
            <button type="button" className={styles.button}>
              Next
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  books: booksSelectors.getAllBooks(state),
});

const mapDispatchToProps = {
  onRemove: booksOperations.removeBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryList);
