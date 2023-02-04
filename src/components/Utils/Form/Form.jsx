// Import from modules
import { useState } from 'react';

// Import Context
import { useBookmark } from '../../../contexts/BookmarkContext';

// Import Images
import dropitIcon from '../../../assets/icons/dropit.svg';
import Error from '../Error/Error';

const Form = () => {
  // Customized Hook to get AddBookmark funtion from context
  const { AddBookmark } = useBookmark();

  // URL data state
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  // Function to handle events
  const handleOnChange = event => {
    setUrl(event.target.value);
  };

  // VALIDATION
  // Check if the Url has 'https://' or 'http://' prefix
  /* const TestUrl = (url) => {
    const addHttp = url => {
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
      }
      return url;
    };
    const newUrl = addHttp(url);
    const validatedUrl = new URL(newUrl);

    setUrl(validatedUrl);
  } */


  // Function to handle submit events
  const handleSubmit = event => {
    event.preventDefault();

    let newUrl = url;
    if (!newUrl.startsWith('http://') && !newUrl.startsWith('https://')) {
      newUrl = 'http://' + newUrl;
    }
    console.log("newUrl:", newUrl);
    // Check if the URL doesn't have a prefix


    try {
      console.log("Valid URL:", new URL(newUrl));
      new URL(newUrl);

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
          />
        </div>

        <button onClick={handleSubmit}>Save it!</button>
      </div>

      {/* Render error */}
      {error && <Error error={error} />}
    </div>
  );
};

export default Form;
