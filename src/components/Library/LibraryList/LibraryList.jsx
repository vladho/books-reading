import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import styles from './LibraryList.module.scss';
import bookUnRead from '../../../assets/icons/bookUnRead.svg';
import bookRead from '../../../assets/icons/bookRead.svg';
import bookReadDone from '../../../assets/icons/bookReadDone.svg';

function LibraryList({ books }) {
  return (
    <div className={styles.container}>
      {books.some(book => book.status === 'done') && (
        <ul className={styles.category}>
          <p className={styles.categoryTitle}>Прочитано</p>
          <ul className={styles.categoryListTitle}>
            <li className={styles.categoryListTitleItemNameDone}>
              Назва книги
            </li>
            <li className={styles.categoryListTitleItemAuthorDone}>Автор</li>
            <li className={styles.categoryListTitleItemYearDone}>Рік</li>
            <li className={styles.categoryListTitleItemPageDone}>Стор.</li>
            <li className={styles.categoryListTitleItemRate}>Рейтинг книги</li>
          </ul>
          <ul className={styles.bookList}>
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
        </ul>
      )}
      {books.some(book => book.status === 'read') && (
        <ul className={styles.category}>
          <p className={styles.categoryTitle}>Читаю</p>
          <ul className={styles.categoryListTitle}>
            <li className={styles.categoryListTitleItemName}>Назва книги</li>
            <li className={styles.categoryListTitleItemAuthor}>Автор</li>
            <li className={styles.categoryListTitleItemYear}>Рік</li>
            <li className={styles.categoryListTitleItemPage}>Стор.</li>
          </ul>
          <ul className={styles.bookList}>
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
        </ul>
      )}
      {books.some(book => book.status === 'plan') && (
        <ul className={styles.category}>
          <p className={styles.categoryTitle}>Маю намір прочитати</p>
          <ul className={styles.categoryListTitle}>
            <li className={styles.categoryListTitleItemName}>Назва книги</li>
            <li className={styles.categoryListTitleItemAuthor}>Автор</li>
            <li className={styles.categoryListTitleItemYear}>Рік</li>
            <li className={styles.categoryListTitleItemPage}>Стор.</li>
          </ul>
          <ul className={styles.bookList}>
            {books.map(
              ({ _id, title, author, year, totalPages, status }) =>
                status === 'plan' && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={bookUnRead} className={styles.icons} />
                    <p className={styles.bookListItemName}>{title}</p>
                    <p className={styles.bookListItemAuthor}>{author}</p>
                    <p className={styles.bookListItemYear}>{year}</p>
                    <p className={styles.bookListItemPage}>{totalPages}</p>
                  </li>
                ),
            )}
          </ul>
          <NavLink to="/training" className={styles.link}>
            <button type="button" className={styles.button}>
              Далі
            </button>
          </NavLink>
        </ul>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books.items,
});

export default connect(mapStateToProps)(LibraryList);
