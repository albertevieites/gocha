// Import from modules
import { useState } from 'react';

// Import Context
import { useBookmark } from '../../../contexts/BookmarkContext';

// Import Images
import dropitIcon from '../../../assets/icons/dropit.svg';
import Error from '../Error/Error';

const Form = () => {
  // Customized Hook to get AddBookmark funtion from context
  const { bookmarks, AddBookmark } = useBookmark();

  // URL data state
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  // Function to get the value from the form
  // Getting the url state
  const handleOnChange = event => {
    let newUrl = event.target.value;

    // Check if the url begins with 'http://' or 'https://'
    // If not, add 'http://' at the beginning of the url
    if (newUrl.indexOf('http://') !== 0 && newUrl.indexOf('https://') !== 0) {
      newUrl = 'http://www.' + newUrl;
    } else {
      setUrl('');
    }

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

    const checkDatabase = bookmarks.some(link => link.url === url);

    if (!checkDatabase) {
      try {
        new URL(url);

        const newBookmark = {
          id: Date.now(),
          url
        };

        // Add the bookmark
        AddBookmark(newBookmark);

        // Clear the form
        setUrl('');
        setError('');
      } catch (err) {
        setError('Invalid URL. Please enter a valid URL.');
      }
    } else {
      setError('The URL is already in the database');
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
          <input
            type='text'
            name='url'
            value={url}
            placeholder='URL'
            onChange={handleOnChange}
            onKeyDown={onKeyDown}
          />
        </div>

        <button onClick={handleSubmit}>Save</button>
      </div>

      {/* Render error */}
      {error && <Error error={error} />}
    </div>
  );
};

export default Form;
