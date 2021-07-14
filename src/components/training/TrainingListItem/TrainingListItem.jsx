import css from './TrainingListItem.module.scss';
import IconButton from '../../common/IconButton';
import { ReactComponent as BookIcon } from '../../../assets/training/bookIcon.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/training/deleteIcon.svg';

export default function TrainingListItem({
    title,
    author,
    year,
    pages,
    onDelete,
}) {
    return (
        <li className={css.item}>
            <BookIcon className={css.bookIcon} />

            <p className={css.title}>{title}</p>

            <p className={css.author}>
                <span className={css.prefix}>Author:</span>
                {author}
            </p>

            <p className={css.year}>
                <span className={css.prefix}>Year:</span>
                {year}
            </p>

            <p className={css.pages}>
                <span className={css.prefix}>Pages:</span>
                {pages}
            </p>

            {onDelete && (
                <IconButton className={css.deleteBtn} onClick={onDelete}>
                    <DeleteIcon />
                </IconButton>
            )}
        </li>
    );
}

// import books from '../../json/trainingListBooks.json';
// import TrainingListItem from '../training/TrainingListItem';

// <ul>
//     {books.map(({ id, title, author, year, pages }) => (
//         <TrainingListItem
//             key={id}
//             title={title}
//             author={author}
//             year={year}
//             pages={pages}
//         />
//     ))}
// </ul>;
