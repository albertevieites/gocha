// Import from node modules

// Import image
import SearchIcon from '../../../assets/icons/search.svg';

// Passing a state using Lifting Sate Up
// Passing search value from the child of BookmarkList component
const SearchBar = props => {
  const handleSearch = event => {
    event.preventDefault();

    // Bring search value to BookmarkList component
    // Lifting Sate Up
    props.filterBookmarks(event.target.value);
  };

  return (
    <div className='search--bar'>
      {/* Invoke handleSearch function when the value in changing in the search field */}
      <img src={SearchIcon} alt='search icon' />
      <input type='text' placeholder='Search' onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
