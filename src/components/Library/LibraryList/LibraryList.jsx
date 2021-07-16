import React from 'react';
import { connect } from 'react-redux';
import styles from './LibraryList.module.scss';

function LibraryList({ books }) {
  return (
    <div className={styles.container}>
      {books.length > 0 && (
        <ul>
          <p className={styles.categoryTitle}>Маю намір прочитати</p>
          <ul className={styles.categoryListTitle}>
            <li className={styles.categoryListTitleItemName}>Назва книги</li>
            <li className={styles.categoryListTitleItemAuthor}>Автор</li>
            <li className={styles.categoryListTitleItemYear}>Рік</li>
            <li className={styles.categoryListTitleItemPage}>Стор.</li>
          </ul>
          <ul className={styles.bookList}>
            {books.map(({ id, name, author, year, page }) => (
              <li key={id} className={styles.bookListItem}>
                <p className={styles.bookListItemName}>{name}</p>
                <p className={styles.bookListItemAuthor}>{author}</p>
                <p className={styles.bookListItemYear}>{year}</p>
                <p className={styles.bookListItemPage}>{page}</p>
              </li>
            ))}
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
