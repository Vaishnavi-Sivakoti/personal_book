import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [addedBooks, setAddedBooks] = useState(new Set());

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${value}&limit=10&page=1`);
      setBooks(response.data.docs);
    } else {
      setBooks([]);
    }
  };

  const addToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    setAddedBooks(prev => new Set(prev).add(book.key));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for books..."
      />
      <div className="book-list">
        {books.map(book => (
          <BookCard 
            key={book.key} 
            book={book} 
            onAdd={addToBookshelf} 
            isAdded={addedBooks.has(book.key)} 
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
