// Import from modules
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useBookmark } from '../../contexts/BookmarkContext';

import dropitIcon from '../../assets/icons/dropit.svg';

const Form = () => {
  // Customized Hook to get AddBookmark funtion from context
  const { AddBookmark } = useBookmark();

  // Handle redirection to error page
  const navigate = useNavigate();

  // URL data state
  const [url, setUrl] = useState('');
 /*  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState(''); */

  // Function to handle events
  const handleOnChange = event => {
    setUrl(event.target.value);
  };

  // VALIDATION
  // JS Validation
 /*  const myUrl = new URL("http://www.jvikjljklj.com");
  console.log(myUrl); */



  // Function to handle submit events
  const handleSubmit = async () => {
    const newBookmark = {
      id: Date.now(),
      url
    };
    /* const isValid = validateUrl(url);
    setIsValid(isValid);
    if (isValid) {
      setMessage('Valid');
    } else {
      setMessage('Not Valid');
    } */
    try {
      await AddBookmark(newBookmark);
      setUrl('');
    } catch (error) {
      navigate('/error');
    }
  };

  // [(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)

  return (
    <div className='form'>
      {/* Form */}
      <div className='form__container'>
        <div className='form__container--link'>
          <div className="form__container--link--legend">
            <h1>Drop a Bookmark</h1>
            <img src={dropitIcon} alt="little drop icon" />
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
      {/* {message && (
        <p style={isValid ? { color: '#446A46' } : { color: '#990000' }}>
          {message}
        </p>
      )} */}
    </div>
  );
};

export default Form;
