import updateIcon from '../../../assets/icons/update.svg';

function UpdateButton({ handleUpdateBtn }) {
  return (
    <div className="update--btn">
      <button onClick={handleUpdateBtn}>
        <img src={updateIcon} alt="update icon" />
      </button>
    </div>
  );
}

export default UpdateButton;
