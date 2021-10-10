import React, { useState, useEffect } from 'react';
import fetchGraphQL from './fetchGraphQL';
import BooksRow from './BooksRow';

function BooksTable() {
    const [books, setBooks] = useState([]);

    const query = `query getBooks($title: String!) {
    Books(title: $title) {
      isbn
      title
    }
  }`;

    useEffect(() => {
        fetchGraphQL(query, { title: 'a' })
            .then((response) => {
                setBooks(response.data.Books);
            })
            .catch((error) => {
                console.error(error);
            });
    });

    const rows = [];
    books.forEach((book) => {
        rows.push(
            <BooksRow isbn={book.isbn} title={book.title} key={book.isbn} />
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>ISBN</th>
                    <th>TITLE</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
export default BooksTable;
