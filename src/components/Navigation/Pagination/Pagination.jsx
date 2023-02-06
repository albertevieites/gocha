// Import from node modules
import { useBookmark } from '../../../contexts/BookmarkContext';

// Import images
import nextIcon from '../../../assets/icons/next.svg';
import previousIcon from '../../../assets/icons/previous.svg';

// Passing values by props from Home component(father component)
function Pagination({
  currentPage,
  setCurrentPage,
  totalBookmarks,
  bookmarksPerPage,
  paginate
}) {
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
    if (currentPage !== Math.ceil(bookmarks.length / bookmarksPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle go back pagination
  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='pagination'>
      <nav>
        <button disabled={currentPage === 1} onClick={handlePrev}>
          <img src={previousIcon} alt='previous page icon' />
        </button>

        <ul className='pagination__list'>
          {pages.length === 0 ? (
            <li className='pagination__item--base'>
              <a>1</a>
            </li>
          ) : (
            <>
              {pages.map(number => (
                <li key={number} className='pagination__item'>
                  <a
                    onClick={() => paginate(number)}
                    href='#'
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

        <button disabled={currentPage === totalBookmarks} onClick={handleNext}>
          <img src={nextIcon} alt='next page icon' />
        </button>
      </nav>
    </div>
  );
}

export default Pagination;
