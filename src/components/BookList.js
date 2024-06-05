import React from 'react';

function BookList({ books, onAdd }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {books.map(book => (
          <li key={book.key}>
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(', ')}</p>
            <button onClick={() => onAdd(book)}>Add to Bookshelf</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
