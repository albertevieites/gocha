import { createContext, useEffect, useState, useContext } from 'react';

const BookmarkContext = createContext();

const useBookmark = () => {
	const context = useContext(BookmarkContext);
	return context;
}

function BookmarkWrapper({ children }) {
	// State of bookmarks saved in the local storage
  const [savedBookmarks] = useState(localStorage.getItem('bookmarks'));

  // Persist state even refresh page or initialization with a empty array
  const [bookmarks, setBookmarks] = useState(
    savedBookmarks ? JSON.parse(savedBookmarks) : []
    );

  // Store bookmarks in the local storage
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

	// FUNCTIONS TO HANDLE DIFFERENT ACTIONS
  // Add bookmarks function
  // Use a spread operator of the data to a new data
  const AddBookmark = bookmark => {
    setBookmarks([...bookmarks, bookmark]);
  }

  // Delete a bookmark from the list of bookmarks
  function DeleteBookmark(id) {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  }

  // Delete all bookmarks from the local storage
  const DeleteAllBookmarks = () => {
    // Update data with a empty array remove all bookmarks
    setBookmarks([]);
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        setBookmarks,
        AddBookmark,
        DeleteBookmark,
        DeleteAllBookmarks
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export { BookmarkContext, BookmarkWrapper, useBookmark };