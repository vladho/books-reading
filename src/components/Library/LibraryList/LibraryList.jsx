import React from 'react';
import { connect } from 'react-redux';
import styles from './LibraryList.module.scss';

function LibraryList({ books }) {
  console.log(books);
  return (
    <div className={styles.container}>
      {books.some(book => book.status === 'done') && (
        <ul>
          <p className={styles.categoryTitle}>Прочитано</p>
          <ul className={styles.categoryListTitle}>
            <li className={styles.categoryListTitleItemName}>Назва книги</li>
            <li className={styles.categoryListTitleItemAuthor}>Автор</li>
            <li className={styles.categoryListTitleItemYear}>Рік</li>
            <li className={styles.categoryListTitleItemPage}>Стор.</li>
          </ul>
          <ul className={styles.bookList}>
            {books.map(
              ({ _id, title, author, year, totalPages, status }) =>
                status === 'done' && (
                  <li key={_id} className={styles.bookListItem}>
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
      {books.some(book => book.status === 'read') && (
        <ul>
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
        <ul>
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
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books.items,
});

export default connect(mapStateToProps)(LibraryList);
