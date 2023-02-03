import { useBookmark } from '../../contexts/BookmarkContext';

function DeleteOneButton() {
  const { bookmarks, DeleteBookmark } = useBookmark();

  return (
    <div className='one--btn'>
      <button
        onClick={() => {
          DeleteBookmark(bookmarks[0].id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteOneButton;
