// Import from modules
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookmark } from '../../contexts/BookmarkContext';

const Form = () => {
  const { AddBookmark } = useBookmark();

  // Handle redirection to error page
  const navigate = useNavigate();
  // URL data state
  const [url, setUrl] = useState("");

  // Function to handle events
  const handleBookmarkChange = (event) => { setUrl(event.target.value) }

  // Function to handle submit events
  const handleSubmit = async () => {
    const newBookmark = {
      id: Date.now(),
      url,
    };
    try {
      await AddBookmark(newBookmark);
      setUrl("");
    } catch (error) {
      navigate("/error")
    }
  };

  // [(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)


  return (
    <div className="form">
      <h1>Drop a link</h1>
      {/* Form */}
      <div className="form__container">
        <div className="form__container--link">
          <label htmlFor="bookmark"></label>
          <input
            type="text"
            name='url'
            value={url}
            onChange={handleBookmarkChange}
          />
        </div>

        <button onClick={handleSubmit}>Save it!</button>
      </div>
    </div>
  );
}

export default Form;
