import { useDispatch, useSelector } from 'react-redux';
import css from './TrainingList.module.scss';
import TrainingListItem from '../TrainingListItem';
import { trainingSelectors, trainingActions } from '../../../redux/training';

const placeholder = (
  <TrainingListItem title="..." author="..." year="..." pages="..." />
);

export default function TrainingList() {
  const dispatch = useDispatch();

  const books = useSelector(trainingSelectors.getSelectBooks);

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
          ? books.map(({ _id, title, author, year, totalPages }) => (
              <TrainingListItem
                key={_id}
                title={title}
                author={author}
                year={year}
                pages={totalPages}
                onDelete={() => dispatch(trainingActions.delSelectedId(_id))}
              />
            ))
          : placeholder}
      </ul>
    </div>
  );
}
