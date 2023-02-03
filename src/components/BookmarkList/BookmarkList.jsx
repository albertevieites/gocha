// BookmarkList
import { useEffect } from 'react';
import { useBookmark } from '../../contexts/BookmarkContext';
import BookmarkCard from '../BookmarkCard/BookmarkCard';

const BoomarkList = () => {
  const { bookmarks, setBookmarks } = useBookmark();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setBookmarks(bookmarks);
  };

  // Edit a bookmark in the list of bookmarks
  function updateBookmark(id, newValue) {
    setBookmarks(
      bookmarks.map(eachMark => (eachMark.id === id ? newValue : eachMark))
    );
  }

  // Submit UPDATE a bookmark in the list of bookmarks
  const submitUpdate = (id, newValue) => {
    updateBookmark(id, newValue);
  };

  return (
    <div className='bookmark--list'>
      {bookmarks.map(bookmark => {
        return (
          <BookmarkCard
            key={bookmark.id}
            eachBoomarkID={bookmark.id}
            eachLink={bookmark.url}
            submitUpdate={submitUpdate}
          />
        );
      })}
    </div>
  );
};

export default BoomarkList;
