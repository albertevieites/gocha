// Import from node modules
import { useBookmark } from '../../../../contexts/BookmarkContext';

// Import images
import deleteIcon from '../../../../assets/icons/delete.svg';

// Getting a specific id of bookmark from BookmarkCard component by props
// Id to delete a specific bookmark
const DeleteButton = ({ eachBoomarkID }) => {
  // Received a function to delete a bookmark by context
  const { DeleteBookmark } = useBookmark();

  return (
    <div className='one--btn'>
      {/* onClick event invoke DeleteBookmark function passing bookmark id as argument */}
      <button
        onClick={() => {
          DeleteBookmark(eachBoomarkID);
        }}
      >
        <img src={deleteIcon} alt='delete icon' />
      </button>
    </div>
  );
};

export default DeleteButton;
