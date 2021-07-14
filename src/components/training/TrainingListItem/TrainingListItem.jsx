import css from './TrainingListItem.module.scss';

export default function TrainingListItem({ title, author, year, pages }) {
    return (
        <li className={css.item}>
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
