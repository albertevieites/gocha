// Import image
import updateIcon from '../../../../assets/icons/update.svg';


const UpdateButton = ({ handleUpdateBtn }) => {
  return (
    <div className='update--btn'>
      <button onClick={handleUpdateBtn}>
        <img src={updateIcon} alt='update icon' />
      </button>
    </div>
  );
};

export default UpdateButton;
