import { useState } from 'react';

// Import context
import { useBookmark } from '../../contexts/BookmarkContext';

// Import components
import BoomarkList from '../../components/Bookmarks/BookmarkList/BookmarkList';
import DeleteAllButton from '../../components/Tokens/Buttons/DeleteAllButton/DeleteAllButton';
import Form from '../../components/Utils/Form/Form';
import Brand from '../../components/Navigation/Brand/Brand';
import Pagination from '../../components/Navigation/Pagination/Pagination';


function Home() {
  const { bookmarks } = useBookmark();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarksPerPage] = useState(20);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='home'>
      <header>
        <Brand />
        <Form />
      </header>

      <div className='separator'></div>

      <main>
        <BoomarkList
          currentPage={currentPage}
          itemsPerPage={bookmarksPerPage}
        />
        <DeleteAllButton />
      </main>

      <footer>
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
}

export default Home;
