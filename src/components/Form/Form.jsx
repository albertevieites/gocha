// Import dependencies
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  // Hook to redirect to error page
  const navigate = useNavigate();

  // Boomark data state
  const [bookmark, setBookmark] = useState(
    JSON.parse(localStorage.getItem('bookmark')) || [
      { id: 1, title: "Phantom", url: "https://phantom.land"},
      { id: 2, title: "Google", url: "https://www.google.com"},
      { id: 3, title: "Facebook", url: "https://www.facebook.com"},
      { id: 4, title: "Google", url: "https://www.twitter.com"},
    ]
  );

  // Function to handle events
  const handleBookmarkChange= (event) => { setBookmark(event.target.value) }

  // [(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)

  // Function to handle submit events
  const handleSubmit = event => {
    console.log(event)
    event.preventDefault();
  }


  return (
    <div className="form">
      <h1>Drop a link</h1>

      {/* Form */}
      <div className="form__container">
        <div className="form__container--link">
          <label htmlFor="link">Link</label>
          <input
            type="text"
            name='bookmark'
            value={bookmark}
            onChange={handleBookmarkChange}
          />
        </div>

        <button onClick={handleSubmit}>Send it!</button>
      </div>
    </div>
  );
}

export default Form;
