import css from './TrainingListItem.module.scss';

export default function TrainingListItem({ title, author, year, pages }) {
    return (
        <li className={css.item}>
            <p className={css.title}>{title}</p>

            <p className={css.field}>
                <span>Author:</span>
                {author}
            </p>

            <p className={css.field}>
                <span>Year:</span>
                {year}
            </p>

            <p className={css.field}>
                <span>Pages:</span>
                {pages}
            </p>
        </li>
    );
}
