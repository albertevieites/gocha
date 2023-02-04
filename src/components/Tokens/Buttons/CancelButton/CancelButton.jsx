// Import image
import cancelIcon from '../../../../assets/icons/cancel.svg';


const CancelButton = ({ handleCancelBtn }) => {
  return (
    <div className='cancel--btn'>
      <button onClick={handleCancelBtn}>
        <img src={cancelIcon} alt='cancel icon' />
      </button>
    </div>
  );
};

export default CancelButton;
