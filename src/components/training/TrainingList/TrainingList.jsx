import css from './TrainingList.module.scss';
import TrainingListItem from '../TrainingListItem';
import books from '../../../json/trainingListBooks.json';

export default function TrainingList() {
    return (
        <ul>
            {books.map(({ id, title, author, year, pages }) => (
                <TrainingListItem
                    key={id}
                    title={title}
                    author={author}
                    year={year}
                    pages={pages}
                    onDelete={() => null}
                />
            ))}
        </ul>
    );
}
