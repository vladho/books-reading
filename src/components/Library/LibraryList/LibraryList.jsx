import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import booksSelectors from '../../../redux/books/booksSelectors';
import booksOperations from '../../../redux/books/booksOperations';
import RatingReadOnly from '../../ModalComponents/RatingBook/ChooseRating/RatingReadOnly';

import styles from './LibraryList.module.scss';
import book from '../../../assets/icons/book.svg';
import trash from '../../../assets/icons/delete.svg';
import RatingBook from '../../ModalComponents/RatingBook/RatingBook';

function LibraryList({ books, onRemove }) {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);

  const [resumeValue, setResumeValue] = useState('');

  const dispatch = useDispatch();

  const isShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <RatingBook
          setRating={setRating}
          setResumeValue={setResumeValue}
          resumeValue={resumeValue}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
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
              ({
                _id,
                title,
                author,
                year,
                totalPages,
                status,
                rating: showRating,
                resume,
              }) =>
                status === 'done' && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={book} className={styles.iconDone} />
                    <div className={styles.bookListItemNameDone}>
                      <span>
                        <ReactSVG src={book} className={styles.iconDoneMob} />
                      </span>
                      {title}
                    </div>
                    <p className={styles.bookListItemAuthorDone}>
                      <span className={styles.bookListItemMob}>Author:</span>
                      {author}
                    </p>
                    <p className={styles.bookListItemYearDone}>
                      <span className={styles.bookListItemMob}>Year:</span>
                      {year}
                    </p>
                    <p className={styles.bookListItemPageDone}>
                      <span className={styles.bookListItemMob}>Pages:</span>
                      {totalPages}
                    </p>
                    <div className={styles.stars}>
                      <span className={styles.bookListItemMob}>Rating:</span>
                      <RatingReadOnly rating={showRating} />
                    </div>

                    <button
                      type="button"
                      className={styles.buttonRezume}
                      onClick={isShowModal}
                    >
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
                    <div className={styles.bookListItemName}>
                      <span>
                        <ReactSVG src={book} className={styles.iconReadMob} />
                      </span>
                      {title}
                    </div>
                    <p className={styles.bookListItemAuthor}>
                      <span className={styles.bookListItemMob}>Author:</span>
                      {author}
                    </p>
                    <p className={styles.bookListItemYear}>
                      <span className={styles.bookListItemMob}>Year:</span>
                      {year}
                    </p>
                    <p className={styles.bookListItemPage}>
                      <span className={styles.bookListItemMob}>Pages:</span>
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
                    <div className={styles.bookListItemName}>
                      <span>
                        <ReactSVG src={book} className={styles.iconPlanMob} />
                      </span>
                      {title}
                    </div>
                    <p className={styles.bookListItemAuthor}>
                      <span className={styles.bookListItemMob}>Author:</span>
                      {author}
                    </p>
                    <p className={styles.bookListItemYear}>
                      <span className={styles.bookListItemMob}>Year:</span>
                      {year}
                    </p>
                    <p className={styles.bookListItemPage}>
                      <span className={styles.bookListItemMob}>Pages:</span>
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
          <NavLink to="/training" className={styles.link}>
            <button type="button" className={styles.btnNext}>
              Next
            </button>
          </NavLink>
          <button type="button" className={styles.btnAddMob}>
            +
          </button>
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
