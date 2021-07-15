import { useSelector } from 'react-redux';
import css from './TrainingList.module.scss';
import TrainingListItem from '../TrainingListItem';
import { booksSelectors } from '../../../redux/books';

const placeholder = (
  <TrainingListItem title="..." author="..." year="..." pages="..." />
);

export default function TrainingList() {
  const books = useSelector(booksSelectors.getAllBooks);

  const isArrayNotEmpty = Array.isArray(books) && books.length;

  return (
    <div className={css.TrainingList}>
      <div className={css.header}>
        <p className={css.title}>Book title</p>
        <p className={css.author}>Author</p>
        <p className={css.year}>Year</p>
        <p className={css.pages}>Pages</p>
      </div>

      <ul className={css.list}>
        {isArrayNotEmpty
          ? books.map(({ id, title, author, year, pages }) => (
              <TrainingListItem
                key={id}
                title={title}
                author={author}
                year={year}
                pages={pages}
                onDelete={() => null}
              />
            ))
          : placeholder}
      </ul>
    </div>
  );
}
