import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { CSSTransition } from 'react-transition-group';
import booksSelectors from '../../../redux/books/booksSelectors';
import booksOperations from '../../../redux/books/booksOperations';
import RatingReadOnly from '../../ModalComponents/RatingBook/ChooseRating/RatingReadOnly';
import LibraryModal from '../LibraryModal/LibraryModal';
import RatingBook from '../../ModalComponents/RatingBook/RatingBook';
import { LangContext } from '../../App/App';

import styles from './LibraryList.module.scss';
import book from '../../../assets/icons/book.svg';
import trash from '../../../assets/icons/delete.svg';

import '../../../styles/animation.scss';

const LibraryList = () => {
  const { language } = useContext(LangContext);

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [resume, setResume] = useState('');
  const [rating, setRating] = useState(0);

  const books = useSelector(booksSelectors.getAllBooks);
  const onRemove = _id => {
    dispatch(booksOperations.removeBook(_id));
  };

  const [id, setId] = useState(null);

  const isShowModal = ({ _id: id, resume, rating }) => {
    setId(id);
    setResume(resume);
    setRating(rating);
    setShowModal(!showModal);
  };

  const [isBookModal, setIsBookModal] = useState(false);
  const openAddBookModal = () => setIsBookModal(!isBookModal);

  return (
    <>
      <CSSTransition
        classNames="option"
        timeout={600}
        in={showModal}
        unmountOnExit
      >
        <RatingBook
          id={id}
          showModal={showModal}
          setShowModal={setShowModal}
          resume={resume}
          rating={rating}
        />
      </CSSTransition>

      {books.some(book => book.status === 'done') && (
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>
            {language.libraryPage.readList.title}
          </h2>
          <div className={styles.categoryListTitle}>
            <h3 className={styles.categoryListTitleItemNameDone}>
              {language.libraryPage.tableHeader.book_title}
            </h3>
            <h3 className={styles.categoryListTitleItemAuthorDone}>
              {language.libraryPage.tableHeader.book_author}
            </h3>
            <h3 className={styles.categoryListTitleItemYearDone}>
              {language.libraryPage.tableHeader.book_year}
            </h3>
            <h3 className={styles.categoryListTitleItemPageDone}>
              {language.libraryPage.tableHeader.book_pages}
            </h3>
            <h3 className={styles.categoryListTitleItemRateDone}>
              {language.libraryPage.tableHeader.book_rating}
            </h3>
          </div>
          <ul>
            {books.map(
              ({
                _id,
                title,
                author,
                year,
                totalPages,
                status,
                rating,
                resume,
              }) =>
                status === 'done' && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={book} className={styles.iconDone} />
                    <div className={styles.bookListItemNameDone}>
                      <span>
                        <ReactSVG src={book} className={styles.iconDoneMob} />
                      </span>
                      <span className={styles.titleBookName}>{title}</span>
                    </div>
                    <p className={styles.bookListItemAuthorDone}>
                      <span className={styles.bookListItemMob}>
                        {language.libraryPage.tableHeader.book_author}:
                      </span>
                      {author}
                    </p>
                    <p className={styles.bookListItemYearDone}>
                      <span className={styles.bookListItemMob}>
                        {language.libraryPage.tableHeader.book_year}:
                      </span>
                      {year}
                    </p>
                    <p className={styles.bookListItemPageDone}>
                      <span className={styles.bookListItemMob}>
                        {language.libraryPage.tableHeader.book_pages}:
                      </span>
                      {totalPages}
                    </p>
                    <div className={styles.stars}>
                      <span className={styles.bookListItemMob}>
                        {language.libraryPage.tableHeader.book_rating}:
                      </span>
                      <RatingReadOnly rating={rating} />
                    </div>

                    <button
                      type="button"
                      className={styles.buttonRezume}
                      onClick={() => isShowModal({ _id, resume, rating })}
                    >
                      {language.libraryPage.readList.button}
                    </button>
                  </li>
                ),
            )}
          </ul>
        </div>
      )}
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

export default LibraryList;
