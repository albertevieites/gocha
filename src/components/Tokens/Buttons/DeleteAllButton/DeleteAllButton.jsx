import { useBookmark } from '../../../../hooks/useBookmark';

function DeleteAllButton() {
  const { DeleteAllBookmarks } = useBookmark();

  return (
    <div className='all--btn'>
      <button onClick={DeleteAllBookmarks}>Delete All Bookmarks</button>
    </div>
  );
}

export default DeleteAllButton;
