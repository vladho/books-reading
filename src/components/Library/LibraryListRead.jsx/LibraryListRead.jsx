import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';

import booksSelectors from '../../../redux/books/booksSelectors';
import { LangContext } from '../../App/App';

import styles from '../LibraryList/LibraryList.module.scss';
import book from '../../../assets/icons/book.svg';

const LibraryListRead = () => {
  const { language } = useContext(LangContext);

  const books = useSelector(booksSelectors.getAllBooks);

  return (
    <>
      {books.some(book => book.status === 'read') && (
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>
            {language.libraryPage.readingList.title}
          </h2>
          <div className={styles.categoryListTitle}>
            <h3 className={styles.categoryListTitleItemName}>
              {language.libraryPage.tableHeader.book_title}
            </h3>
            <h3 className={styles.categoryListTitleItemAuthor}>
              {language.libraryPage.tableHeader.book_author}
            </h3>
            <h3 className={styles.categoryListTitleItemYear}>
              {language.libraryPage.tableHeader.book_year}
            </h3>
            <h3 className={styles.categoryListTitleItemPage}>
              {language.libraryPage.tableHeader.book_pages}
            </h3>
          </div>
          <ul>
            {books.map(
              ({ _id, title, author, year, totalPages, status }) =>
                status === 'read' && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={book} className={styles.iconRead} />
                    <div className={styles.bookListItemName}>
                      <span>
                        <ReactSVG src={book} className={styles.iconReadMob} />
                      </span>
                      <span className={styles.titleBookName}>{title}</span>
                    </div>
                    <p className={styles.bookListItemAuthor}>
                      <span className={styles.bookListItemMob}>
                        {language.libraryPage.tableHeader.book_author}:
                      </span>
                      {author}
                    </p>
                    <p className={styles.bookListItemYear}>
                      <span className={styles.bookListItemMob}>
                        {language.libraryPage.tableHeader.book_year}:
                      </span>
                      {year}
                    </p>
                    <p className={styles.bookListItemPage}>
                      <span className={styles.bookListItemMob}>
                        {language.libraryPage.tableHeader.book_pages}:
                      </span>
                      {totalPages}
                    </p>
                  </li>
                ),
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default LibraryListRead;
