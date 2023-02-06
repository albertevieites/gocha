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

  // Function to handle updating form value
  const LinkValueChange = event => {
    setNewLink(event.target.value);
  };

  // Function to supmit the new value
  const UpdateClick = () => {
    // Passing as parameters the current id and the new values of the updated element
    submitUpdate(eachBoomarkID, { id: Date.now(), url: newLink });
    // Change the isEditing state to show the block of code to show the default card
    setIsEditing(false);
  };

  // Function to go to the update card
  const EditClick = () => {
    // Function to show the block of code to update the data field
    setIsEditing(true);
  };

  // Function to cancel the action of update data
  const CancelClick = () => {
    // Function to return to the previous state which is the default card
    setIsEditing(false);
  };

  // Render of block of code depending if the isEditing state is true of false
  // True shows the update card(dark card) and false shows the default card
  return (
    // Ternary to change the class depending on the isEditing state
    <div className={isEditing ? 'bookmark--card__dark' : 'bookmark--card'}>
      {/* Ternary to show the block of code depending on the isEditing state  */}
      {/* Show default card or update card  */}
      {isEditing ? (
        <div className='bookmark--card__update'>
          {/* Pass the id value received from props */}
          {/* Pass the function to handle the event that change the value */}
          <input type='text' value={newLink} onChange={LinkValueChange} />
          <div className='bookmark--card__update--buttons'>
            {/* Pass the functions to handle updating and cancel actions of the buttons */}
            <UpdateButton handleUpdateBtn={UpdateClick} />
            <CancelButton handleCancelBtn={CancelClick} />
          </div>
        </div>
      ) : (
        <>
          {/* Pass the id value received from props */}
          <a href={eachLink}>{eachLink}</a>
          <div className='bookmark--card__edit'>
            <div className='bookmark--card__edit--buttons'>
              {/* Pass the functions to handle editing and delete actions of the buttons */}
              <EditButton handleEditBtn={EditClick} />
              <DeleteButton eachBoomarkID={eachBoomarkID} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookmarkCard;
