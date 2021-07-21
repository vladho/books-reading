import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import booksSelectors from '../../../redux/books/booksSelectors';
import booksOperations from '../../../redux/books/booksOperations';

import styles from './LibraryList.module.scss';
import bookUnRead from '../../../assets/icons/bookUnRead.svg';
import bookRead from '../../../assets/icons/bookRead.svg';
import bookReadDone from '../../../assets/icons/bookReadDone.svg';
import trash from '../../../assets/icons/delete.svg';

function LibraryList({ books, onRemove }) {
  return (
    <>
      {books.some(book => book.status === 'done') && (
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Прочитано</h2>
          <div className={styles.categoryListTitle}>
            <h3 className={styles.categoryListTitleItemNameDone}>
              Назва книги
            </h3>
            <h3 className={styles.categoryListTitleItemAuthorDone}>Автор</h3>
            <h3 className={styles.categoryListTitleItemYearDone}>Рік</h3>
            <h3 className={styles.categoryListTitleItemPageDone}>Стор.</h3>
            <h3 className={styles.categoryListTitleItemRateDone}>
              Рейтинг книги
            </h3>
          </div>
          <ul>
            {books.map(
              ({ _id, title, author, year, totalPages, status }) =>
                status === 'done' && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={bookReadDone} className={styles.icons} />
                    <p className={styles.bookListItemNameDone}>{title}</p>
                    <p className={styles.bookListItemAuthorDone}>{author}</p>
                    <p className={styles.bookListItemYearDone}>{year}</p>
                    <p className={styles.bookListItemPageDone}>{totalPages}</p>
                    <div className={styles.stars}></div>
                    <button type="button" className={styles.buttonRezume}>
                      Резюме
                    </button>
                  </li>
                ),
            )}
          </ul>
        </div>
      )}
      {books.some(book => book.status === 'read') && (
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Читаю</h2>
          <div className={styles.categoryListTitle}>
            <h3 className={styles.categoryListTitleItemName}>Назва книги</h3>
            <h3 className={styles.categoryListTitleItemAuthor}>Автор</h3>
            <h3 className={styles.categoryListTitleItemYear}>Рік</h3>
            <h3 className={styles.categoryListTitleItemPage}>Стор.</h3>
          </div>
          <ul>
            {books.map(
              ({ _id, title, author, year, totalPages, status }) =>
                status === 'read' && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={bookRead} className={styles.icons} />
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
          <h2 className={styles.categoryTitle}>Маю намір прочитати</h2>
          <div className={styles.categoryListTitle}>
            <h3 className={styles.categoryListTitleItemName}>Назва книги</h3>
            <h3 className={styles.categoryListTitleItemAuthor}>Автор</h3>
            <h3 className={styles.categoryListTitleItemYear}>Рік</h3>
            <h3 className={styles.categoryListTitleItemPage}>Стор.</h3>
          </div>
          <ul>
            {books.map(
              ({ _id, title, author, year, totalPages, status }) =>
                status === 'plan' && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={bookUnRead} className={styles.icons} />
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
              Далі
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
