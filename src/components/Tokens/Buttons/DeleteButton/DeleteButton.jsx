// Import from node modules
import { useBookmark } from '../../../../contexts/BookmarkContext';

// Import images
import deleteIcon from '../../../../assets/icons/delete.svg';

const DeleteButton = ({ eachBoomarkID }) => {
  const { DeleteBookmark } = useBookmark();

  return (
    <div className='one--btn'>
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
