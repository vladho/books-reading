import css from './TrainingList.module.scss';
import TrainingListItem from '../TrainingListItem';
import books from '../../../json/trainingListBooks.json';

const placeholder = (
    <TrainingListItem title="..." author="..." year="..." pages="..." />
);

export default function TrainingList() {
    const isArrayNotEmpty = Array.isArray(books) && books.length;

    return (
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
    );
}
