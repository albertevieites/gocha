// Import image
import editIcon from '../../../../assets/icons/edit.svg';

// Getting a EditClick function to edit a bookmark from BookmarkCard component by props
const EditButton = ({ handleEditBtn }) => {
  return (
    <div className='edit--btn'>
      {/* onClick event invoke EditClick function passing from BookmarkCard by props */}
      <button onClick={handleEditBtn}>
        <img src={editIcon} alt='edit icon' />
      </button>
    </div>
  );
};

export default EditButton;
