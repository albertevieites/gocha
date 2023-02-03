import { useState } from 'react';
import CancelButton from '../CancelButton/CancelButton';
import DeleteOneButton from '../DeleteOneButton/DeleteOneButton';
import EditButton from '../EditButton/EditButton';
import UpdateButton from '../UpdateButton/UpdateButton';

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
        <>
          <input type='text' value={newLink} onChange={LinkValueChange} />
          <UpdateButton handleUpdateBtn={UpdateClick} />
          <CancelButton handleCancelBtn={CancelClick} />
        </>
      ) : (
        <>
          <a href={eachLink}>Link:{eachLink}</a>
          <DeleteOneButton />
          <EditButton handleEditBtn={EditClick} />
        </>
      )}
    </div>
  );
}

export default BookmarkCard;
