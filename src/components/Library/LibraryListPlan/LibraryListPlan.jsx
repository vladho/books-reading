import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import booksSelectors from '../../../redux/books/booksSelectors';
import booksOperations from '../../../redux/books/booksOperations';
import LibraryModal from '../LibraryModal/LibraryModal';
import { LangContext } from '../../App/App';

import styles from '../LibraryList/LibraryList.module.scss';
import book from '../../../assets/icons/book.svg';
import trash from '../../../assets/icons/delete.svg';

const LibraryListPlan = () => {
  const dispatch = useDispatch();
  const { language } = useContext(LangContext);

  const books = useSelector(booksSelectors.getAllBooks);
  const onRemove = _id => {
    dispatch(booksOperations.removeBook(_id));
  };

  const [isBookModal, setIsBookModal] = useState(false);
  const openAddBookModal = () => setIsBookModal(!isBookModal);

  return (
    <>
      {books.some(book => book.status === 'plan') && (
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>
            {language.libraryPage.plannedList.title}
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
                status === 'plan' && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={book} className={styles.iconPlan} />
                    <div className={styles.bookListItemName}>
                      <span>
                        <ReactSVG src={book} className={styles.iconPlanMob} />
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
          <button
            type="button"
            className={styles.btnAddMob}
            onClick={openAddBookModal}
          >
            +
          </button>
          <NavLink to="/training" className={styles.link}>
            <button type="button" className={styles.btnNext}>
              {language.libraryPage.nextBtn}
            </button>
          </NavLink>
        </div>
      )}
      {!books.some(book => book.status === 'plan') && (
        <button
          type="button"
          className={styles.btnAddMobEmpty}
          onClick={openAddBookModal}
        >
          +
        </button>
      )}
      {openAddBookModal && (
        <LibraryModal
          isBookModal={isBookModal}
          setIsBookModal={setIsBookModal}
        />
      )}
    </>
  );
};

export default LibraryListPlan;
