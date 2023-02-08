// Import from node modules
import { useEffect, useState } from 'react';

// Import from general context
import { useBookmark } from '../../../contexts/BookmarkContext';

// Import component
import SearchBar from '../../Utils/SearchBar/SearchBar';
import BookmarkCard from '../BookmarkCard/BookmarkCard';

// Import loading spinner
import spinner from '../../../assets/animated/spinner.svg';

// Pass by props the number of current page of the list and the number of items by page
const BoomarkList = ({ currentPage, itemsPerPage }) => {
  // Import by context the state of the data in the local storage and the function that change the value of the state of the data storage
  const { bookmarks, setBookmarks } = useBookmark();

  // Fetching data state from the local storage
  const [isFetching, setIsFetching] = useState(true);

  // Filtered data state
  const [findQuery, setFindQuery] = useState('');
  console.log(findQuery);

  // Using useEffect hook to invoke the getData function every time something changes in the BookmarkList component
  useEffect(() => {
    getData();
  }, []);

  // getData function updates the state of the bookmarks data in the local storage
  const getData = () => {
    setBookmarks(bookmarks);
    setIsFetching(false);
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

  // Filter the current bookmarks updating the findQuery state
  // Getting the value of the searchbar from by lifting state up(passing state from the SearchBar child to BookmarkList fhater)
  const filterBookmarks = find => {
    setFindQuery(find.toLowerCase());
  };

  // Handle fetching bookmarks
  if (isFetching === true) {
    // If the component is searching data
    return (
      <div className='bookmark--list__spinner'>
        <img src={spinner} alt='spinner gif' />
      </div>
    );
  }

  // Go through each page data. In this case the current page
  return (
    <>
      <SearchBar filterBookmarks={filterBookmarks} />
      <div className='bookmark--list'>
        {/* Ternary to show the list of bookmarks or searched bookmarks */}
        {!findQuery ? (
          <>
            {/* Passing some props to BookmarkCard child */}
            {/* Passing id value, url value and the function to udpate the bookmark */}
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
            {/* Rendering bookmarks that are searched */}
            {bookmarks
              // Filtered bookmarks that are being filtered
              .filter(bookmark =>
                bookmark.url.slice(4).toLowerCase().includes(findQuery)
              )
              // Show the matching bookmarks
              .map(bookmark => {
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
        )}
      </div>
    </>
  );
};

export default BoomarkList;
