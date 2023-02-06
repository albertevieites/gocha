// Import image
import updateIcon from '../../../../assets/icons/update.svg';

// Getting UpdateClick function to update a bookmark from BookmarkCard component by props
const UpdateButton = ({ handleUpdateBtn }) => {
  return (
    <div className='update--btn'>
      {/* onClick event invoke UpdateClick function passing from BookmarkCard by props */}
      <button onClick={handleUpdateBtn}>
        <img src={updateIcon} alt='update icon' />
      </button>
    </div>
  );
};

export default UpdateButton;
