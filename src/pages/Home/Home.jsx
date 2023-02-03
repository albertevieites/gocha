import { useState } from 'react';

// Import context
import { useBookmark } from '../../contexts/BookmarkContext';

// Import components
import BoomarkList from '../../components/BookmarkList/BookmarkList';
import DeleteAllButton from '../../components/Buttons/DeleteAllButton/DeleteAllButton';
import Form from '../../components/Form/Form';
import Pagination from '../../components/Pagination/Pagination';
import Title from '../../components/Title/Title';

function Home() {
  const { bookmarks } = useBookmark();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarksPerPage] = useState(20);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='home'>
      <div className="home__header">
        <Title />
        <Form />
      </div>
      <BoomarkList currentPage={currentPage} itemsPerPage={bookmarksPerPage} />
      <DeleteAllButton />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalBookmarks={bookmarks.length}
        bookmarksPerPage={bookmarksPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Home;
