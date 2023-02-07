// Import from node modules
import { useState } from 'react';

// Import Context
import { useBookmark } from '../../../contexts/BookmarkContext';

// Import Images
import dropitIcon from '../../../assets/icons/dropit.svg';
import Error from '../Error/Error';

const Form = () => {
  // Customized Hook to get AddBookmark function and bookmarks database from context
  const { bookmarks, AddBookmark } = useBookmark();

  // URL data state
  // Error state
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  // Function to get the value from the form
  // Getting the url state
  const handleOnChange = event => {
    // Initialize a variable with the value of written value in the form field
    let newUrl = event.target.value;

    // Check if the url begins with 'http://' or 'https://'
    // If not, add 'http://' at the beginning of the url
    if (newUrl.indexOf('http://') !== 0 && newUrl.indexOf('https://') !== 0) {
      newUrl = 'http://www.' + newUrl;
    } else {
      setUrl('');
    }

    // Update url state with the value of updated newUrl variable which has added the prefix 'http'
    setUrl(newUrl);
  };

  // Function to send the data to the database clicking enter key button
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      handleSubmit(event);
    }
  };

  // Function to handle submit events
  const handleSubmit = event => {
    event.preventDefault();

    // Check if url state is in the database
    const checkDatabase = bookmarks.some(link => link.url === url);

    // If the url is not in the database, invoke the some functions
    if (!checkDatabase) {
      try {
        // Function to check the format of the url
        new URL(url);

        // Model of value to update
        const newBookmark = {
          id: Date.now(),
          url
        };

        // Invoke AddBookmark function
        AddBookmark(newBookmark);

        // Clear the form
        setUrl('');
        // Clear the error message
        setError('');
      } catch (err) {
        setError('Invalid URL. Please enter a valid URL.');
      }
    } else {
      // If url is in the database, show a error message
      setError('The URL is already in the database.');
    }
  };

  return (
    <div className='form'>
      {/* Form */}
      <div className='form__container'>
        <div className='form__container--link'>
          <div className='form__container--link--legend'>
            <h1>Drop a Bookmark</h1>
            <img src={dropitIcon} alt='little drop icon' />
          </div>
          <label htmlFor='bookmark'></label>

          {/* Invoke handleOnChange function to change the url value when it's being written */}
          {/* Invoke onKeyDown function to send the input value as a argument to handleSubmit function when enter key is clicked */}
          <input
            type='text'
            name='url'
            value={url}
            placeholder='URL'
            onChange={handleOnChange}
            onKeyDown={onKeyDown}
          />
        </div>

        {/* Invoke handleSubmit function when button is clicked */}
        <button onClick={handleSubmit}>Save</button>
      </div>

      {/* Render error */}
      {error && <Error error={error} />}
    </div>
  );
};

export default Form;
