// Import image
import cancelIcon from '../../../../assets/icons/cancel.svg';

// Import by props the cancel function from BookmarkCard Component(father of this component)
const CancelButton = ({ handleCancelBtn }) => {
  return (
    <div className='cancel--btn'>
      {/* Invoke handleCancelBtn function receive from BookmarkCard component by props */}
      <button onClick={handleCancelBtn}>
        <img src={cancelIcon} alt='cancel icon' />
      </button>
    </div>
  );
};

export default CancelButton;
