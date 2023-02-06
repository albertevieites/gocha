// Import from node modules
import { useEffect, useState } from 'react';

// Import from general context
import { useBookmark } from '../../../contexts/BookmarkContext';

// Import component
import SearchBar from '../../Utils/SearchBar/SearchBar';
import BookmarkCard from '../BookmarkCard/BookmarkCard';

// Pass by props the number of current page of the list and the number of items by page
const BoomarkList = ({ currentPage, itemsPerPage }) => {
  // Import by context the state of the data in the local storage and the function that change the value of the state of the data storage
  const { bookmarks, setBookmarks } = useBookmark();

  // Filtered data state
  const [findQuery, setFindQuery] = useState('');

  // Using useEffect hook to invoke the getData function every time something changes in the BookmarkList component
  useEffect(() => {
    getData();
  }, []);

  // getData function updates the state of the bookmarks data in the local storage
  const getData = () => {
    setBookmarks(bookmarks);
  };

  // Edit a bookmark in the list of bookmarks
  // Passing as parameters id and value to updated the bookmark
  function updateBookmark(id, newValue) {
    // Update local storage with a new value
    setBookmarks(
      // Go through the data base to update the sate of the database with a new value
      bookmarks.map(eachMark => (eachMark.id === id ? newValue : eachMark))
    );
  }

  // Submit a new value of a bookmark to update the database
  // Passing id and new value as arguments
  const submitUpdate = (id, newValue) => {
    updateBookmark(id, newValue);
  };

  // Get current bookmarks per include in each page(max 20 per page)
  const LastBookmarkIndex = currentPage * itemsPerPage;
  const FirstBookmarkIndex = LastBookmarkIndex - itemsPerPage;
  const currentBookmarks = bookmarks.slice(
    FirstBookmarkIndex,
    LastBookmarkIndex
  );

  // Filter the current bookmarks
  const filterBookmarks = find => {
    setFindQuery(find);
  };

  // Go through each page data. In this case the current page.
  return (
    <>
      <SearchBar filterBookmarks={filterBookmarks} />
      <div className='bookmark--list'>
        {/* Passing some props to BookmarkCard child */}
        {/* Passing id value, url value and the function to udpate the bookmark */}
        {!findQuery ? (
          <>
            {currentBookmarks.map(bookmark => {
              return (
                <BookmarkCard
                  key={bookmark.id}
                  eachBoomarkID={bookmark.id}
                  eachLink={bookmark.url}
                  submitUpdate={submitUpdate}
                />
              );
            })}
          </>
        ) : (
          <>
            {bookmarks
              .filter(bookmark => bookmark.url.includes(findQuery))
              .map(bookmark => {
                return (
                  <BookmarkCard key={bookmark.id} eachLink={bookmark.url} />
                );
              })}
          </>
        )}

        <hr />
      </div>
    </>
  );
};

export default BoomarkList;
