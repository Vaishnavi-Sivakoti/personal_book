import React, { useState, useEffect } from 'react';

function BookshelfPage() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  return (
    <div>
      <h2>My Bookshelf</h2>
      <div className="book-list">
        {bookshelf.map(book => (
          <div key={book.key} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookshelfPage;
