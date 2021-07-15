import React from 'react';
import styles from './LibraryList.module.scss';

function LibraryList({ books }) {
    return (
        <div className={styles.container}>
            <ul className={styles.category}>
                <p className={styles.categoryTitle}>Маю намір прочитати</p>
                <ul className={styles.categoryListTitle}>
                    <li className={styles.categoryListItem}>Назва книги</li>
                    <li className={styles.categoryListItem}>Автор</li>
                    <li className={styles.categoryListItem}>Рік</li>
                    <li className={styles.categoryListItem}>Стор.</li>
                </ul>
                <ul className={styles.bookList}>
                    {books.map(({ id, name, author, year, page }) => (
                        <li key={id} className={styles.bookListItem}>
                            <p>{name}</p>
                            <p>{author}</p>
                            <p>{year}</p>
                            <p>{page}</p>
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    );
}

export default LibraryList;
