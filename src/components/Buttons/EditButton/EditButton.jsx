import editIcon from '../../../assets/icons/edit.svg';

function EditButton({ handleEditBtn }) {
  return (
    <div className='edit--btn'>
      <button onClick={handleEditBtn}>
        <img src={editIcon} alt='edit icon' />
      </button>
    </div>
  );
}

export default EditButton;
