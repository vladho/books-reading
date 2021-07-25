import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import { LangContext } from '../../App/App';
import TrainingListItem from '../TrainingListItem';
import { trainingSelectors } from '../../../redux/training';
import css from './TrainingList.module.scss';

const placeholder = (
  <TrainingListItem
    title="..."
    author="..."
    year="..."
    pages="..."
    placeholder
  />
);

export default function TrainingList() {
  const { language } = useContext(LangContext);
  const isTrainStarted = useSelector(trainingSelectors.getIsStarted);

  const booksSelector = isTrainStarted
    ? trainingSelectors.getBooks
    : trainingSelectors.getSelectBooks;

  const books = useSelector(booksSelector);

  return (
    <div className={css.TrainingList}>
      <div className={css.header}>
        <p className={css.title}>
          {language.libraryPage.tableHeader.book_title}
        </p>
        <p className={css.author}>
          {language.libraryPage.tableHeader.book_author}
        </p>
        <p className={css.year}>{language.libraryPage.tableHeader.book_year}</p>
        <p className={css.pages}>
          {language.libraryPage.tableHeader.book_pages}
        </p>
      </div>

      <ul className={css.list}>
        {books.length
          ? books.map(({ _id, title, author, year, totalPages, status }) => (
              <TrainingListItem
                key={_id}
                id={_id}
                title={title}
                author={author}
                year={year}
                status={status}
                pages={totalPages}
              />
            ))
          : placeholder}
      </ul>
    </div>
  );
}
