import { useSelector } from 'react-redux';
import css from './TrainingList.module.scss';
import TrainingListItem from '../TrainingListItem';
import { trainingSelectors } from '../../../redux/training';

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
  const books = useSelector(trainingSelectors.getSelectBooks);
  // const isTrainStarted = useSelector(trainingSelectors.getIsStarted);

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
