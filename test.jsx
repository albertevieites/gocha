import { useState } from 'react';

function BookmarkApp() {
  const [bookmarks, setBookmarks] = useState([
    { id: 1, title: 'Google', url: 'https://www.google.com' },
    { id: 2, title: 'Facebook', url: 'https://www.facebook.com' },
    { id: 3, title: 'Twitter', url: 'https://www.twitter.com' },
  ]);

  function handleAddBookmark(bookmark) {
    setBookmarks([...bookmarks, bookmark]);
  }

  function handleEditBookmark(updatedBookmark) {
    setBookmarks(
      bookmarks.map(bookmark =>
        bookmark.id === updatedBookmark.id ? updatedBookmark : bookmark
      )
    );
  }

  function handleDeleteBookmark(id) {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  }

  return (
    <div>
      <h1>Bookmark App</h1>
      <BookmarkList
        bookmarks={bookmarks}
        onEditBookmark={handleEditBookmark}
        onDeleteBookmark={handleDeleteBookmark}
      />
      <BookmarkForm onAddBookmark={handleAddBookmark} />
    </div>
  );
}

function BookmarkList({ bookmarks, onEditBookmark, onDeleteBookmark }) {
  return (
    <ul>
      {bookmarks.map(bookmark => (
        <li key={bookmark.id}>
          <a href={bookmark.url}>{bookmark.title}</a>
          <button onClick={() => onEditBookmark(bookmark)}>Edit</button>
          <button onClick={() => onDeleteBookmark(bookmark.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function BookmarkForm({ onAddBookmark }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAddBookmark({
      id: Date.now(),
      title,
      url,
    });
    setTitle('');
    setUrl('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={event => setUrl(event.target.value)}
      />
      <button type="submit">Add Bookmark</button>
    </form>
  );
}

export default BookmarkApp;

// 2nd version

import React, { useState, useEffect } from 'react';

function BookmarkApp() {
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem('bookmarks')) || [
      { id: 1, title: 'Google', url: 'https://www.google.com' },
      { id: 2, title: 'Facebook', url: 'https://www.facebook.com' },
      { id: 3, title: 'Twitter', url: 'https://www.twitter.com' },
    ]
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarksPerPage] = useState(20);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  function handleAddBookmark(bookmark) {
    setBookmarks([...bookmarks, bookmark]);
  }

  function handleEditBookmark(updatedBookmark) {
    setBookmarks(
      bookmarks.map(bookmark =>
        bookmark.id === updatedBookmark.id ? updatedBookmark : bookmark
      )
    );
  }

  function handleDeleteBookmark(id) {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  }

  function handleClearAll() {
    setBookmarks([]);
  }

  const indexOfLastBookmark = currentPage * bookmarksPerPage;
  const indexOfFirstBookmark = indexOfLastBookmark - bookmarksPerPage;
  const currentBookmarks = bookmarks.slice(indexOfFirstBookmark, indexOfLastBookmark);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(bookmarks.length / bookmarksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h1>Bookmark App</h1>
      <BookmarkForm onAddBookmark={handleAddBookmark} />
      <BookmarkList
        bookmarks={currentBookmarks}
        onEditBookmark={handleEditBookmark}
        onDeleteBookmark={handleDeleteBookmark}
      />
      <Pagination
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
}

function BookmarkList({ bookmarks, onEditBookmark, onDeleteBookmark }) {
  return (
    <ul>
      {bookmarks.map(bookmark => (
        <li key={bookmark.id}>
          <a href={bookmark.url}>{bookmark.title}</a>
          <button onClick={() => onEditBookmark(bookmark)}>Edit</button>
          <button onClick={() => onDeleteBookmark(bookmark.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

