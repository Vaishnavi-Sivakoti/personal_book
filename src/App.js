import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchPage from './components/SearchBar';
import BookshelfPage from './components/BookShelf';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Search Books</Link>
        <Link to="/bookshelf">My Bookshelf</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
