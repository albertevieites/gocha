// Import from node modules
import { useBookmark } from '../../../contexts/BookmarkContext';

// Import images
import nextIcon from '../../../assets/icons/next.svg';
import previousIcon from '../../../assets/icons/previous.svg';

function Pagination({
  currentPage,
  setCurrentPage,
  totalBookmarks,
  bookmarksPerPage,
  paginate
}) {
  const { bookmarks } = useBookmark();

  const pages = [];

  for (let i = 1; i <= Math.ceil(totalBookmarks / bookmarksPerPage); i++) {
    pages.push(i);
  }

  // Functions
  const handleNext = () => {
    if (currentPage !== Math.ceil(bookmarks.length / bookmarksPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

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
