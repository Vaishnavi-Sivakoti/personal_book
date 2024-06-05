import React from 'react';

function BookCard({ book, onAdd, isAdded }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      <button 
        onClick={() => onAdd(book)} 
        disabled={isAdded}
        style={{ backgroundColor: isAdded ? '#ccc' : '#61dafb', cursor: isAdded ? 'not-allowed' : 'pointer' }}
      >
        {isAdded ? 'Added' : 'Add to Bookshelf'}
      </button>
    </div>
  );
}

export default BookCard;
