// Import from node modules
import { useState } from 'react';

// Import image
import SearchIcon from '../../../assets/icons/search.svg';

// Passing a state using Lifting Sate Up
// Passing find state from the child of BookmarkList component
const SearchBar = props => {
  // Get the value of the input field on the state
  const [find, setFind] = useState('');

  const handleSearch = event => {
    event.preventDefault();

    // Update find state with the value of the input field
    setFind(event.target.value);

    // Bring find state to BookmarkList component
    // Lifting Sate Up
    props.filterBookmarks(event.target.value);
  };

  return (
    <div className='search--bar'>
      {/* Invoke handleSearch function when the value in changing in the search field */}
      <img src={SearchIcon} alt="search icon" />
      <input type='text' placeholder='Search' onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
