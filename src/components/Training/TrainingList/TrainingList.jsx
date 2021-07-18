import { useSelector } from 'react-redux';
import css from './TrainingList.module.scss';
import TrainingListItem from '../TrainingListItem';
import { trainingSelectors } from '../../../redux/training';
import { booksSelectors } from '../../../redux/books';

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
  const isTrainStarted = useSelector(trainingSelectors.getIsStarted);

  const booksSelector = isTrainStarted
    ? booksSelectors.getTrainBooks
    : trainingSelectors.getSelectBooks;

  const books = useSelector(booksSelector);

  return (
    <div className={css.TrainingList}>
      <div className={css.header}>
        <p className={css.title}>Book title</p>
        <p className={css.author}>Author</p>
        <p className={css.year}>Year</p>
        <p className={css.pages}>Pages</p>
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
