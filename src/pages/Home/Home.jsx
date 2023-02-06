// Import from node modules
import { useState } from 'react';

// Import context
import { useBookmark } from '../../contexts/BookmarkContext';

// Import components
import BoomarkList from '../../components/Bookmarks/BookmarkList/BookmarkList';
import Brand from '../../components/Navigation/Brand/Brand';
import Pagination from '../../components/Navigation/Pagination/Pagination';
import DeleteAllButton from '../../components/Tokens/Buttons/DeleteAllButton/DeleteAllButton';
import Form from '../../components/Utils/Form/Form';

const Home = () => {
  // Get database values by context
  // Global variable
  const { bookmarks } = useBookmark();

  // Pagination states
  // Maximum of 20 items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarksPerPage] = useState(20);

  // Change current page number
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='home'>
      <header>
        <Brand />
        <Form />
      </header>

      <div className='separator'></div>

      <main>
        {/* Pass sates to BookmarkList component */}
        <BoomarkList
          currentPage={currentPage}
          itemsPerPage={bookmarksPerPage}
        />
        <DeleteAllButton />
      </main>

      <footer>
        {/* Pass data to handle the number of the pagination */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalBookmarks={bookmarks.length}
          bookmarksPerPage={bookmarksPerPage}
          paginate={paginate}
        />
      </footer>
    </div>
  );
};

export default Home;
