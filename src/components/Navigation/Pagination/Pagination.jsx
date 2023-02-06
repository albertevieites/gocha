// Import from node modules
import { useBookmark } from '../../../contexts/BookmarkContext';

// Import images
import nextIcon from '../../../assets/icons/next.svg';
import previousIcon from '../../../assets/icons/previous.svg';

// Passing values by props from Home component(father component)
const Pagination = ({
  currentPage,
  setCurrentPage,
  totalBookmarks,
  bookmarksPerPage,
  paginate
}) => {
  // Passing state of database by context
  const { bookmarks } = useBookmark();

  // Initialize pagination with a empty array
  const pages = [];

  // Loop as many times as the number of total bookmarks divided by the number of bookmarks per page
  for (let i = 1; i <= Math.ceil(totalBookmarks / bookmarksPerPage); i++) {
    pages.push(i);
  }

  // Function to handle go forward pagination
  const handleNext = () => {
    // Condition to advance if the number of the size of database divided by the number of bookmarks per page is different than the number of the current page
    // Updating the currentPage state
    if (currentPage !== Math.ceil(bookmarks.length / bookmarksPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle go back pagination
  const handlePrev = () => {
    // Updating the currentPage state
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='pagination'>
      <nav>
        {/* Going to next page button */}
        {/* Invoke handlePrev function by onClick event */}
        <button disabled={currentPage === 1} onClick={handlePrev}>
          <img src={previousIcon} alt='previous page icon' />
        </button>

        {/* Rendering 1 default number page if pages array is empty */}
        <ul className='pagination__list'>
          {pages.length === 0 ? (
            <li className='pagination__item--base'>
              <a>1</a>
            </li>
          ) : (
            <>
              {/* Rendering the numbers of every page of the list(20 bookmarks per page) */}
              {pages.map(number => (
                <li key={number} className='pagination__item'>
                  <a
                    // onClick event goes to number page
                    onClick={() => paginate(number)}
                    href='#'
                    // Choose a class to display the number page with a specific background color if it is selected
                    className={
                      currentPage === number ? 'selectedPage' : 'pageNumber'
                    }
                  >
                    {number}
                  </a>
                </li>
              ))}
            </>
          )}
        </ul>

        {/* Going to previous page button */}
        {/* Invoke handlePrev function by onClick event */}
        <button disabled={currentPage === totalBookmarks} onClick={handleNext}>
          <img src={nextIcon} alt='next page icon' />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
