import { useBookmark } from '../../../contexts/BookmarkContext';

import deleteIcon from '../../../assets/icons/delete.svg'

function DeleteOneButton() {
  const { bookmarks, DeleteBookmark } = useBookmark();

  return (
    <div className='one--btn'>
      <button
        onClick={() => {
          DeleteBookmark(bookmarks[0].id);
        }}
      >
        <img src={deleteIcon} alt="delete icon" />
      </button>
    </div>
  );
}

export default DeleteOneButton;
