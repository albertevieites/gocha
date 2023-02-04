// Import from node modules
import { useState } from 'react';

// Import button components
import CancelButton from '../../Tokens/Buttons/CancelButton/CancelButton';
import DeleteButton from '../../Tokens/Buttons/DeleteButton/DeleteButton';
import EditButton from '../../Tokens/Buttons/EditButton/EditButton';
import UpdateButton from '../../Tokens/Buttons/UpdateButton/UpdateButton';

// Pass by props id and url variables and submitUpdate function
const BookmarkCard = ({ eachBoomarkID, eachLink, submitUpdate }) => {
  // States variables
  // isEditing: this state indicates which block will be rendered
  // newLink: this state indicates which id is managing, passing by props id as a initial value
  const [isEditing, setIsEditing] = useState(false);
  const [newLink, setNewLink] = useState(eachLink);

  console.log(eachBoomarkID);

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
              <DeleteButton eachBoomarkID={eachBoomarkID} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BookmarkCard;
