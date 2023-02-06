// Import from node modules
import { createContext, useContext, useEffect, useState } from 'react';

// Initialize createContext
const BookmarkContext = createContext();

// Customed hook to avoid calling two imports in every call
const useBookmark = () => {
  const context = useContext(BookmarkContext);
  return context;
};

// The context  to handle global variables and functions
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
  // Use a spread operator to add a new element to the bookmarks
  const AddBookmark = bookmark => {
    // Add a new element to the beginning of the bookmarks
    setBookmarks([bookmark, ...bookmarks]);
  };

  // Delete a bookmark from the list of bookmarks
  // Passing id as parameter, filter to update the state of the bookmarks deleting that specific bookmark
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
    // Pass global values
    // States and functions
      value={{
        bookmarks,
        setBookmarks,
        AddBookmark,
        DeleteBookmark,
        DeleteAllBookmarks,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export { BookmarkContext, BookmarkWrapper, useBookmark };
