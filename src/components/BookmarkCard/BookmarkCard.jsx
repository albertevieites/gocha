import { useState } from 'react';

// Import components
import CancelButton from '../Buttons/CancelButton/CancelButton';
import DeleteOneButton from '../Buttons/DeleteOneButton/DeleteOneButton';
import EditButton from '../Buttons/EditButton/EditButton';
import UpdateButton from '../Buttons/UpdateButton/UpdateButton';


function BookmarkCard({ eachLink, eachBoomarkID, submitUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newLink, setNewLink] = useState(eachLink);

  // handle updating
  const LinkValueChange = event => {
    setNewLink(event.target.value);
  };

  // Handle rendering scopes
  const UpdateClick = () => {
    submitUpdate(eachBoomarkID, { id: Date.now(), url: newLink })
    setIsEditing(false);
  };

  // FUNCIONA
  const CancelClick = () => {
    setIsEditing(false);
  };

  // FUNCIONA
  const EditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className='bookmark--card'>
      {isEditing ? (
        <div className='bookmark--card__update'>
          <input type='text' value={newLink} onChange={LinkValueChange} />
          <div className="bookmark--card__update--buttons">
            <UpdateButton handleUpdateBtn={UpdateClick} />
            <CancelButton handleCancelBtn={CancelClick} />
          </div>
        </div>
      ) : (
        <>
          <a href={eachLink}>{eachLink}</a>
          <div className="bookmark--card__edit">
            <div className="bookmark--card__edit--buttons">
              <EditButton handleEditBtn={EditClick} />
              <DeleteOneButton />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BookmarkCard;
