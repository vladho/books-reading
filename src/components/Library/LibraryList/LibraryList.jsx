import React from 'react'

function LibraryList({ books }) {
    return (
        <div>
            <ul>{books.map(({ id, name, author, year, page }) =>
                (
                <li key={id}>
                    <p>{name}</p>
                    <p>{author}</p>
                    <p>{year}</p>
                    <p>{page}</p>
                </li>
            ))}</ul>
        </div>
    )
}

export default LibraryList

